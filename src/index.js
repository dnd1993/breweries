import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import { AppProvider } from './context';
import './index.css';

// Global styles
import 'sanitize.css/sanitize.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
