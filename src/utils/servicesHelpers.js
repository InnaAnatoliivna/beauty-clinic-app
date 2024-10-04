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

const services = [
    {
        id: "mezoterapia-igłowa",
        service: Mesotherapy,
        image: [imgMezotFirst, imgMezotSecond]
    },
    {
        id: "mezoterapia-mikroigłowa",
        service: MesotherapyMicro,
        image: [imgMMicroFirst, imgMMicroSecond]
    },
    {
        id: "stymulatory-tkankowe",
        service: dataTissueStimulators,
        image: [imgStFirst, imgStSecond]
    },
    {
        id: "storz-fala-uderzeniowa",
        service: dataSTORZ,
        image: [imgStorzFirst, imgStorzSecond]
    },
    {
        id: "epilacja-laserowa",
        service: dataHairRemoval,
        image: [imgEpilFirst, imgEpilSecond]
    },
    {
        id: "podstawowa-pielęgnacja-twarzy",
        service: dataFacialCare,
        image: [imgConsFirst, imgConsSecond]
    },
    {
        id: "endermologia-lpg",
        service: dataEndermology,
        image: [imgEndermFirst, imgEndermSecond]
    },
    {
        id: "konsultacja-przedzabiegowa",
        service: dataConsultation,
        image: [imgKFirst, imgKSecond]
    },
    {
        id: "oczyszczanie-wodorowe",
        service: dataCleaning,
        image: [imgCleaningFirst, imgCleaningSecond, imgCleaningThird, imgCleaningFourth]
    },
    {
        id: "beauty-plan",
        service: dataBeautyPlan,
        image: [imgStorzSecond, imgPlan]
    }
];

export const getServices = () => {
    return services;
};

export const getServiceById = (serviceId) => {
    return services.find((service) => service.id === serviceId);
};
