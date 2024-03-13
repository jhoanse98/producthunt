"use client"
import firebase from 'firebase/compat/app';
import React, {createContext} from 'react';


interface firebaseProp {
    firebase: any;
}

const initialState = {
    firebase: null,
};

const FirebaseContext = createContext<firebaseProp>(initialState);

export default FirebaseContext;