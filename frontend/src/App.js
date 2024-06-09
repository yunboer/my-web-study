import About from './Components/About';
import Home from './Components/Home';
import Article from './Components/Article';
import Picture from './Components/Picture';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';

const App = () => {
    return (
        <BrowserRouter> 
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/article" element={<Article />} />
                <Route path="/picture" element={<Picture />} />
                
            </Routes>
        </BrowserRouter>
    );
};
export default App;