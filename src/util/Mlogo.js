import MlogoBlack from './../assets/Mlogo.png';
import MlogoWhite from './../assets/MlogoWhite.png';

export function getLogo(logoId) {
    switch (logoId) {
        case 1:
            return MlogoBlack;
        case 2:
            return MlogoWhite;
        default:
            return null;
    }
}
