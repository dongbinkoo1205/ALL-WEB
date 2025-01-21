import { Route, Routes } from 'react-router-dom';
import CombinedProvider from './Context/CombinedProvider';
import PortFolio from './pages/Portfolio';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import MainPage from './pages/MainPage';
import About from './pages/About';

function App() {
    return (
        <div className="App">
            <CombinedProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/PortFolio" element={<PortFolio />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Detail/:id" element={<Detail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CombinedProvider>
        </div>
    );
}

export default App;
