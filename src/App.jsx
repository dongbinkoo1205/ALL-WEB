import { Route, Routes } from 'react-router-dom';
import CombinedProvider from './Context/CombinedProvider.jsx';
import Detail from './Pages/Detail.jsx'; // Detail.jsx
import NotFound from './Pages/NotFound.jsx'; // NotFound.jsx
import MainPage from './Pages/MainPage.jsx'; // MainPage.jsx
import About from './Pages/About.jsx'; // About.jsx
import Portfolio from './Pages/Portfolio.jsx';~

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
