import axios from 'axios';
import { SubDesc, CompanyWithSubNames, IndustryItems, SubCategories } from '../components/Categories';
const accessKey = '9uKXRDQYOg9lnoGQ9uJsJzr3Ol11UYePc7A2_gn-aP0';

const MockData = await Promise.all(
    Array.from({ length: 50 }, async (_, index) => {
        const randomSubDescs = SubDesc[Math.floor(Math.random() * SubDesc.length)];

        // CompanyWithSubNames에서 랜덤한 name과 subName 가져오기
        const randomCompany = CompanyWithSubNames[Math.floor(Math.random() * CompanyWithSubNames.length)];

        const randomCompanyName = randomCompany.name; // name 값 추출
        const randomCompanyEnName = randomCompany.enName; // name 값 추출
        const randomSubName = randomCompany.subName; // subName 값 추출
        const randomEnSubName = randomCompany.enSubName; // subName 값 추출
        const randomSubSelectOption = randomCompany.subCategory; // subName 값 추출
        const randomSubindustryItems = randomCompany.industryItems; // subName 값 추출

        const photocategories = ['coffee'];
        const randomPhotoCategories = photocategories[Math.floor(Math.random() * photocategories.length)];
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${randomPhotoCategories}&client_id=${accessKey}`
        );
        const results = response.data.results;
        let photoUrl = results.length > 0 ? results[Math.floor(Math.random() * results.length)].urls.small : null;

        // w=400을 w=1920으로 변경
        if (photoUrl) {
            photoUrl = photoUrl.replace(/w=\d+/, 'w=1920');
        }

        return {
            id: index + 1,
            subName: randomSubName,
            name: randomCompanyName,
            enName: randomCompanyEnName,
            enSubName: randomEnSubName,
            isMobile: Math.random() > 0.5,
            isNote: Math.random() > 0.5,
            isSlide: Math.random() > 0.5,
            isMypage: Math.random() > 0.5,
            isMemberShip: Math.random() > 0.5,
            isAlert: Math.random() > 0.5,
            isReservation: Math.random() > 0.5,
            isChatBot: Math.random() > 0.5,
            isClick: Math.floor(Math.random() * 11340),
            photoUrl: photoUrl,
            randomSubDescs: randomSubDescs,
            randomSubSelectOption: randomSubSelectOption,
            randomSubindustryItems: randomSubindustryItems,
        };
    })
);

export default MockData;
