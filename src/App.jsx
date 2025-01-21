import { Route, Routes } from 'react-router-dom';
import CombinedProvider from './Context/CombinedProvider';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import MainPage from './Pages/MainPage';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';

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
