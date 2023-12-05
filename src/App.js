import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoadingManager from './components/LoadingManager';
import HomeView from "./views/HomeView";

const App = () => {
    return (
    <LoadingManager>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    </LoadingManager>
    );
};

export default App;