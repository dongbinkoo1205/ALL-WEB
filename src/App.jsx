import { Route, Routes } from 'react-router-dom';
import CombinedProvider from './Context/CombinedProvider';
import Detail from './Pages/Detail'; // Detail.jsx
import NotFound from './Pages/NotFound'; // NotFound.jsx
import MainPage from './Pages/MainPage'; // MainPage.jsx
import About from './Pages/About'; // About.jsx
import Portfolio from '../src/Pages/Portfolio'; // Portfolio.jsx

function App() {
    return (
        <div className="App">
            <CombinedProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Detail/:id" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CombinedProvider>
        </div>
    );
}

export default App;
