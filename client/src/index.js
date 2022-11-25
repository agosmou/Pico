// type imr and imrd
import React from 'react';
// removed ReactDom bc React18 no longer supports it
//import ReactDOM from 'react-dom'   
import { createRoot } from 'react-dom/client';
import App from "./App"

// removed reactDOM per above
//ReactDOM.render(<App/>, document.getElementById("root"))


// added createRoot instead
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);