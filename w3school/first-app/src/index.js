import React from 'react' ;
import ReactDom from 'react-dom/client';

const myfirstElement = <h1>Hello React!</h1>

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(myfirstElement);


