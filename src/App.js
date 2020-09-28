import React from "react";
import { useState } from "react"
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, BrowserRouter } from "react-router-dom";
import Template from "./components/Template";
import "./App.css";
// const routes = [
//   {
//     path: '/',
//     component: Main,
//     data: '123'
//   },
//   {
//     path: '/templates',
//     component: Template,
//     data: '123'
//   }
// ]
function App(props) {
  const [name, setName] = useState({
    name: null,
    url: null
  })
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={()=><Main params={name} setParams={setName} />} />
        <Route path="/templates" render={(props) => <Template name={name} {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
