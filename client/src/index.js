import React  from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<div>
                <BrowserRouter >
                  <div>
                    < App />
                  </div>
                </ BrowserRouter>
                </div>, document.getElementById("root"))
registerServiceWorker();
