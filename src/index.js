import React from 'react';
import {store} from "./store";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {BrowserRouter} from "react-router-dom";
import App from "./Pages/App";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

