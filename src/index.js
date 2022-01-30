import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createClient, Provider } from 'urql';
import * as serviceWorker from './serviceWorker';

const client = createClient({
    url:'http://localhost:4000/api'
});


ReactDOM.render(
<Provider value={client}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
