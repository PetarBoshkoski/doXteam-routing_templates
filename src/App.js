import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import OneTemplate from "./components/OneTemplate";
import { Route, BrowserRouter } from "react-router-dom";
import Template from "./components/Template";
import CreateTemplate from "./components/CreateTemplate";
import ImportTemplate from "./components/ImportTemplate"
import "./App.css";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/templates",
    component: Template,
  },
  {
    path: "/templates/:id",
    component: OneTemplate,
  },
  {
    path: "/create-template",
    component: CreateTemplate,
  },
  {
    path: "/import-template",
    component: ImportTemplate,
  }
];
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        {routes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </BrowserRouter>
    </div>
  );
}

export default App;
