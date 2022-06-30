import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";
// import ReactDOM from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <App/>;
// root.render(element);
// ReactDOM.render(<App/>, document.getElementById('root'));
const container = document.getElementById('root');
render(<App/>, container);