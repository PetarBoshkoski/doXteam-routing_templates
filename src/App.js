import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import OneTemplate from "./components/OneTemplate";
import { Route, BrowserRouter , Switch} from "react-router-dom";
import Template from "./components/Template";
import "./App.css";
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/templates',
    component: Template
  },
  {
    path: '/templates/:id',
    component: OneTemplate
  }
];
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        {routes.map((route) => (
          <Route key={route.path} exact path={route.path} component={route.component}/>
        ))}
      </BrowserRouter>
    </div>
  );
}

export default App;
