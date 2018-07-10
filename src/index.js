import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import './main.css';
import App from './App';
import routes from "./routes";

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
