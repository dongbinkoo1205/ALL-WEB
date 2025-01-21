import AosProvider from './AosProvider';
import DataProvider from './DataProvider';
import SwiperProvider from './SwiperProvider';
import MouseProvider from './MouseProvider';
import LenisScrollProvider from './LenisScrollProvider';
import ScrollSlideProvider from './ScrollSlideProvider';
import MediaQueryContext from './MediaQueryContext';
function CombinedProvider({ children }) {
    return (
        <LenisScrollProvider>
            <ScrollSlideProvider>
                <SwiperProvider>
                    <AosProvider>
                        <MediaQueryContext>
                            <MouseProvider>
                                <DataProvider>{children}</DataProvider>
                            </MouseProvider>
                        </MediaQueryContext>
                    </AosProvider>
                </SwiperProvider>
            </ScrollSlideProvider>
        </LenisScrollProvider>
    );
}

export default CombinedProvider;
