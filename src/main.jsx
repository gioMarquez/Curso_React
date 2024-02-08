import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
// // import {App} from './FirstApp';
import './index.css'
import { CounterApp } from './counterApp';
import { CounterJversion } from './CounterJversion';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterJversion value={0} />
    </React.StrictMode>
)