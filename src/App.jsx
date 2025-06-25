import React from "react";
import Skills from "./page/Skills";
import Contact from "./page/Contact";
import About from "./page/About";
import Home from "./page/Home";
import Login from "./page/Login";
import Child from "./component/Child";
import Counter from "./page/Counter";
import Navbar from "./component/Navbar";
import Hooks from "./page/hooks";
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Reducer from "./Hooks/Reducer";
import Ref from "./Hooks/Ref";
import Todo from "./Hooks/Todo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const fruits = ["Apple", "Banana", "Orange"];
  const user = { username: "jeevan", password: "123456" };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About items={fruits} users={user}/>} />
        <Route path="/child" element={<Child />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home items={fruits} users={user}  />} />
        <Route path="/login" element={<Login users={user} />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </div>
  );
};

export default App;