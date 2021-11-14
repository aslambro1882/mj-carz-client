import initializeAuthentication from '../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user => {
                setAuthError('')
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    })
                    .catch((error) => {

                    })
                history.replace('/home')
            }))
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setAuthError('');
                const destination = location?.state?.from || '/home';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    const signInwithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/home';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`http://pure-beach-57412.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("http://pure-beach-57412.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(() => {

            })
    }










    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInwithGoogle,
        logOut
    }
};

export default useFirebase;