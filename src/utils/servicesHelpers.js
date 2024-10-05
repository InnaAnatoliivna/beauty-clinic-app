import MesotherapyMicro from '../resources/dataServices/MesotherapyMicro.json';
import Mesotherapy from '../resources/dataServices/Mesotherapy.json';
import dataTissueStimulators from '../resources/dataServices/dataTissueStimulators.json';
import dataSTORZ from '../resources/dataServices/dataSTORZ.json';
import dataHairRemoval from '../resources/dataServices/dataHairRemoval.json';
import dataFacialCare from '../resources/dataServices/dataFacialCare.json';
import dataEndermology from '../resources/dataServices/dataEndermology.json';
import dataConsultation from '../resources/dataServices/dataConsultation.json';
import dataCleaning from '../resources/dataServices/dataCleaning.json';
import dataBeautyPlan from '../resources/dataServices/dataBeautyPlan.json';
import imgCleaningFirst from '../images/services/Oczyszczanie-wodorowe.jpg';
import imgCleaningSecond from '../images/services/Zabieg-pca-twarz.jpg';
import imgCleaningThird from '../images/services/Zabiegi-na-twarz.jpg';
import imgCleaningFourth from '../images/services/Wodorowe.jpg';
import imgMMicroFirst from '../images/services/Mezoterapia-mikroigłowa1.jpg';
import imgMMicroSecond from '../images/services/mezmikro.jpg';
import imgMezotFirst from '../images/services/Mezoterapia-igłowa1.jpg';
import imgMezotSecond from '../images/services/Mezoterapia-skóry-głowy.jpg';
import imgStFirst from '../images/services/stymulator.jpg';
import imgStSecond from '../images/services/stymulat.jpg';
import imgStorzFirst from '../images/services/Fala-udzerzeniowa-Storz1.jpg';
import imgStorzSecond from '../images/services/DSC01391.jpg';
import imgEpilFirst from '../images/services/Zdjęcia-epil.jpg';
import imgEpilSecond from '../images/services/Epilacja-pach1.jpg';
import imgEndermFirst from '../images/services/Enderm.jpg';
import imgEndermSecond from '../images/services/Endermolif-twarz-szyja-dekolt1.jpg';
import imgConsFirst from '../images/services/Masaż-twarZy.jpg';
import imgConsSecond from '../images/services/Masaż-2.jpg';
import imgKFirst from '../images/about-1.jpg';
import imgKSecond from '../images/slides/slide8.jpg';
import imgPlan from '../images/services/beauty.jpg';
//mobile screen
import imgCleaningFirstMob from '../images/services/mobile/Oczyszczanie-wodorowe-mob.jpg';
import imgCleaningSecondMob from '../images/services/mobile/Zabieg-pca-twarz-mob.jpg';
import imgCleaningThirdMob from '../images/services/mobile/Zabiegi-na-twarz-mob.jpg';
import imgCleaningFourthMob from '../images/services/mobile/Wodorowe-mob.jpg';
import imgMMicroFirstMob from '../images/services/mobile/Mezoterapia-mikroigłowa1-mob.jpg';
import imgMMicroSecondMob from '../images/services/mobile/mezmikro-mob.jpg';
import imgMezotFirstMob from '../images/services/mobile/Mezoterapia-igłowa1-mob.jpg';
import imgMezotSecondMob from '../images/services/mobile/Mezoterapia-skóry-głowy-mob.jpg';
import imgStFirstMob from '../images/services/mobile/stymulator-mob.jpg';
import imgStSecondMob from '../images/services/mobile/stymulat-mob.jpg';
import imgStorzFirstMob from '../images/services/mobile/Fala-udzerzeniowa-Storz1-mob.jpg';
import imgStorzSecondMob from '../images/services/mobile/DSC01391-mob.jpg';
import imgEpilFirstMob from '../images/services/mobile/Zdjęcia-epil-mob.jpg';
import imgEpilSecondMob from '../images/services/mobile/Epilacja-pach1-mob.jpg';
import imgEndermFirstMob from '../images/services/mobile/Enderm-mob.jpg';
import imgEndermSecondMob from '../images/services/mobile/Endermolif-twarz-szyja-dekolt1-mob.jpg';
import imgConsFirstMob from '../images/services/mobile/Masaż-twarZy-mob.jpg';
import imgConsSecondMob from '../images/services/mobile/Masaż-2-mob.jpg';
import imgKFirstMob from '../images/services/mobile/about-1-mob.jpg';
import imgKSecondMob from '../images/services/mobile/slide8-mob.jpg';
import imgPlanMob from '../images/services/mobile/beauty-mob.jpg';


const services = [
    {
        id: "mezoterapia-igłowa",
        service: Mesotherapy,
        image: [imgMezotFirst, imgMezotSecond],
        imageMob: [imgMezotFirstMob, imgMezotSecondMob]

    },
    {
        id: "mezoterapia-mikroigłowa",
        service: MesotherapyMicro,
        image: [imgMMicroFirst, imgMMicroSecond],
        imageMob: [imgMMicroFirstMob, imgMMicroSecondMob]

    },
    {
        id: "stymulatory-tkankowe",
        service: dataTissueStimulators,
        image: [imgStFirst, imgStSecond],
        imageMob: [imgStFirstMob, imgStSecondMob]
    },
    {
        id: "storz-fala-uderzeniowa",
        service: dataSTORZ,
        image: [imgStorzFirst, imgStorzSecond],
        imageMob: [imgStorzFirstMob, imgStorzSecondMob]
    },
    {
        id: "epilacja-laserowa",
        service: dataHairRemoval,
        image: [imgEpilFirst, imgEpilSecond],
        imageMob: [imgEpilFirstMob, imgEpilSecondMob]
    },
    {
        id: "podstawowa-pielęgnacja-twarzy",
        service: dataFacialCare,
        image: [imgConsFirst, imgConsSecond],
        imageMob: [imgConsFirstMob, imgConsSecondMob]
    },
    {
        id: "endermologia-lpg",
        service: dataEndermology,
        image: [imgEndermFirst, imgEndermSecond],
        imageMob: [imgEndermFirstMob, imgEndermSecondMob]
    },
    {
        id: "konsultacja-przedzabiegowa",
        service: dataConsultation,
        image: [imgKFirst, imgKSecond],
        imageMob: [imgKFirstMob, imgKSecondMob]
    },
    {
        id: "oczyszczanie-wodorowe",
        service: dataCleaning,
        image: [imgCleaningFirst, imgCleaningSecond, imgCleaningThird, imgCleaningFourth],
        imageMob: [imgCleaningFirstMob, imgCleaningSecondMob, imgCleaningThirdMob, imgCleaningFourthMob]
    },
    {
        id: "beauty-plan",
        service: dataBeautyPlan,
        image: [imgStorzSecond, imgPlan],
        imageMob: [imgStorzSecondMob, imgPlanMob]
    }
];

export const getServices = () => {
    return services;
};

export const getServiceById = (serviceId) => {
    return services.find((service) => service.id === serviceId);
};
