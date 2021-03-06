import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById("root");

//ReactDOM.render(elemento, root);
//Elemento tiene componente, propiedades e hijos
ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, root);

serviceWorker.unregister();
