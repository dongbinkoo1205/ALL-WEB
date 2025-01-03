import AosProvider from './AosProvider';
import DataProvider from './DataProvider';
import SwiperProvider from './SwiperProvider';
import MouseProvider from './MouseProvider';
import LenisScrollProvider from './LenisScrollProvider';
import ScrollSlideProvider from './ScrollSlideProvider';
function CombinedProvider({ children }) {
    return (
        <LenisScrollProvider>
            <ScrollSlideProvider>
                <SwiperProvider>
                    <AosProvider>
                        <MouseProvider>
                            <DataProvider>{children}</DataProvider>
                        </MouseProvider>
                    </AosProvider>
                </SwiperProvider>
            </ScrollSlideProvider>
        </LenisScrollProvider>
    );
}

export default CombinedProvider;
