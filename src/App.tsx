import { useState } from "react";
import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
    return (
        <div className="App bg-b-white overflow-x-hidden">
            <Hero />
            <Hello />
            <Skills />
            <Experience />
        </div>
    );
};

export default App;
