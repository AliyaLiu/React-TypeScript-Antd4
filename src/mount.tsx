import React from "react";
import {render} from 'react-dom';
import App from './app';
import '@styles/reset.css';
const rootEl = document.getElementById('app');
render(<App/>, rootEl);

if (module.hot) {
    module.hot.accept('src/mount', () => {
        render( <App/>, rootEl);
    });
}
