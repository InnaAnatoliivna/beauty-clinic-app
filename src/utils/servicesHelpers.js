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


const services = [
    {
        id: "mezoterapia-mikroigłowa",
        service: MesotherapyMicro
    },
    {
        id: "mezoterapia-igłowa",
        service: Mesotherapy
    },
    {
        id: "stymulatory-tkankowe",
        service: dataTissueStimulators
    },
    {
        id: "storz-fala-uderzeniowa",
        service: dataSTORZ
    },
    {
        id: "epilacja-laserowa",
        service: dataHairRemoval
    },
    {
        id: "podstawowa-pielęgnacja-twarzy",
        service: dataFacialCare
    },
    {
        id: "endermologia-lpg",
        service: dataEndermology
    },
    {
        id: "konsultacja-przedzabiegowa",
        service: dataConsultation
    },
    {
        id: "oczyszczanie-wodorowe",
        service: dataCleaning
    },
    {
        id: "beauty-plan",
        service: dataBeautyPlan
    }
];

export const getServices = () => {
    return services;
};

export const getServiceById = (serviceId) => {
    return services.find((service) => service.id === serviceId);
};
