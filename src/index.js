import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./index.css";
import App from "./App";
import Feedback from "./Components/Feedback/Feedback";
import Auth from "./Components/Auth/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/app" element={<App/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
