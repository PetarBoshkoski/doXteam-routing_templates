import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, BrowserRouter , Switch} from "react-router-dom";
import Template from "./components/Template";
import "./App.css";
const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/templates/:name/:url",
    component: Template
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);

  const handleName = (event) => {
    setName();
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component}/>
        ))}
        {count}
      </BrowserRouter>
    </div>
  );
}

export default App;
