import {firebase, googleAuthProvider } from '../firebase';

export const login = () => ({
    type : 'LOGIN',
    uid
})
export default () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout =() => {
    type: 'LOGOUT'
}

export const startLogout =() => {
    return () => {
        return firebase.auth().signOut();
    }
}