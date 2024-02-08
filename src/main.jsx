import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
// // import {App} from './FirstApp';
import './index.css'
import { CounterApp } from './counterApp';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={5} />
    </React.StrictMode>
)