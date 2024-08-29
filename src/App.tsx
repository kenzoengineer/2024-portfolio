import { createContext } from "react";
import Hello from "./components/Hello";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useWindowDimension } from "./consts";
import Glance from "./components/Glance";

interface WindowDims {
    windowWidth: number;
    windowHeight: number;
}

// TODO: Consolidate contexts, we don't need two.

export const WindowContext = createContext<WindowDims>({
    windowHeight: 0,
    windowWidth: 0,
});

const App = () => {
    let [windowWidth, windowHeight] = useWindowDimension();
    return (
        <div className="App bg-b-white">
            <WindowContext.Provider value={{ windowWidth, windowHeight }}>
                <Hero />
                <Glance />
                {/* <Hello /> */}
                <Skills />
                <Experience />
            </WindowContext.Provider>
        </div>
    );
};

export default App;
