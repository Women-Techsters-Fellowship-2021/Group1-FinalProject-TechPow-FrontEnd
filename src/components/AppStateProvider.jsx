import React from 'react';
import { createContext, useReducer } from 'react';
import doneeInfo from '../resources/DoneeData/donee-info';

export const AppContext = createContext();

const initialState = {
    isLoggedIn: false,
    userId: null,
    userEmail: null,
    Token: null,
    donees: doneeInfo,
    applicationForm: {
        dob: '',
        userID: '',
        fullName: '',
        homeAddress: '',
        country: '',
        itemNeeded: '',
        reasonForApplication: '',
        imageLink: '',
        letterOfRecommendationLink: '',
        nationalIdLink: '',
        orgName: '',
        orgWebsite: '',
        orgContact: '',
        signature: '',
        phoneNumber: '',
        gender: '',
        eduLevel: '',
    },
    completedTabs: [],
    // imageSelectedPass: "",
    // imageSelectedLetter: "",
    // imageSelectedID: "",

};

function reducer(state, action) {
    let saveState = { ...state };

    if (action.type === 'REGISTER') {
        saveState.isLoggedIn = false;
        saveState.userId = action.payload.userId;
        saveState.userEmail = action.payload.userEmail;
        saveState.userRole = action.payload.userRole;
    }

    if (action.type === 'LOGIN') {
        saveState.isLoggedIn = true;
        saveState.userId = action.payload.userId;
        saveState.userEmail = action.payload.userEmail;
        saveState.Token = action.payload.Token;
    }

    if (action.type === 'LOGOUT') {
        saveState.isLoggedIn = false;
        saveState.userId = null;
        saveState.userEmail = null;
        saveState.token = null;
    }

    if (action.type === 'DONEE_APPLICATION') {
        saveState.isLoggedIn = true;
        saveState.donees = [...saveState.donees, action.payload.donee];
    }

    if (action.type === 'SELECT_IMAGE') {
        saveState.imageSelectedPass = action.payload.imageSelectedPass;
    }

    if (action.type === 'SELECT_LETTER') {
        saveState.imageSelectedLetter = action.payload.imageSelectedLetter;
    }

    if (action.type === 'SELECT_ID') {
        saveState.imageSelectedID = action.payload.imageSelectedID;
    }

    if (action.type === 'SAVE_IMAGES') {
        saveState.imageUploadPass = action.payload.imageUploadedPass;
        saveState.imageUploadLetter = action.payload.imageUploadedLetter;
        saveState.imageUploadID = action.payload.imageUploadedID;
    }

    if (action.type === 'UPDATE_APPLICATION_FORM')
        saveState.applicationForm = { ...saveState.applicationForm, ...action.payload }

    if (action.type === 'SET_ACTIVE_TAB')
        saveState.setActiveTab = action.payload;

    if (action.type === 'ADD_COMPLETED_STEP')
        saveState.completedTabs = [...saveState.completedTabs, action.payload];

    return saveState;
}

function AppStateProvider({ children }) {
    const [appstate, dispatch] = useReducer(reducer, initialState);

    const contextObject = {
        state: appstate,
        dispatch: dispatch,
    };

    return (
        <AppContext.Provider value={contextObject}>
            {children}
        </AppContext.Provider>
    );
}

export default AppStateProvider;