import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
    return (
        <div className="App bg-b-white">
            <Hero />
            <Hello />
            <Skills />
        </div>
    );
};

export default App;
