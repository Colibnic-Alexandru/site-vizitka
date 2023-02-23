import './App.css';
import {Header} from "./header/Header";
import {Slider} from "./slider/Slider";
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {Skills} from "./skills/Skills";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Slider/>
            <Projects/>
            <Main/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;
