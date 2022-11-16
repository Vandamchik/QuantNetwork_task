import React from 'react';
import { Route, Routes } from "react-router-dom";
import { FirstPage } from "../pages/FirstPage";
import { SecondPage } from "../pages/SecondPage";


export function App(): JSX.Element {

    return (
        <>
            <Routes>
                <Route path="/" element={ <FirstPage /> } />
                <Route path='/:id' element={ <SecondPage /> } />
            </Routes>
        </>
    );
}