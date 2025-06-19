import React from "react";
import Child from "./component/Child";
import Skills from "./page/Skills";
import Contact from "./page/Contact";
import About from "./page/About";
import Home from "./page/Home";
import Login from "./page/Login";
import Counter from "./page/Counter"
const App = () => {
  var fruits = ["Apple", "Banana", "Orange"];
  var user= {username:"jeevan",password:"123456"};  
  return (
    <>
      <div>
        <Child />
      </div>
      <div><Child name="Jeevan" age="20"/><Child name="kavin" age="25"/></div>
      <Home items={fruits} users={user}/>
      <Skills/>
      <div>contact</div>
      <div><Login users={user}/></div>
      <Counter/>
    </>
  );
};
export default App;