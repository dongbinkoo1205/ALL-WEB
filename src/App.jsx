import { Route, Routes } from 'react-router-dom';
import CombinedProvider from './Context/CombinedProvider';
import PortFolio from './Pages/PortFolio';
import Detail from './Pages/Detail';
import NotFound from './Pages/NotFound';
import MainPage from './Pages/MainPage';
import About from './Pages/About';
import ScrollToTop from './components/ScrollToTop';
function App() {
    return (
        <div className="App">
            <CombinedProvider>
                <ScrollToTop />
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
