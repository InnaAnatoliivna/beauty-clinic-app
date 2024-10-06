import endermIMG from '../images/services/Endermolif.jpg';
import epilIMG from '../images/services/Epilacja.jpg';
import storzIMG from '../images/services/Fala-udzerzeniowa-Storz.jpg';
import wodorIMG from '../images/services/Wodorowe.jpg';
import mezmicroIMG from '../images/services/Mezoterapia-mikroigłowa.jpg';
import mezIMG from '../images/services/Mezoterapia-igłowa.jpg';
import stimulIMG from '../images/services/igłowa1.jpg';
import imgMassage from '../images/services/Masaż-21.jpg';
import imgConsult from '../images/services/DSC013912.jpg';
import imgCons from '../images/services/consult.jpg';

export const servicesList = [
    {
        name: 'Endermologia LPG',
        photo: endermIMG,
        link: '/zabiegi/endermologia-lpg',
        type: 'Ciało'
    },
    {
        name: 'Epilacja laserowa',
        photo: epilIMG,
        link: '/zabiegi/epilacja-laserowa',
        type: 'Ciało'
    },
    {
        name: 'Mezoterapia mikroigłowa Nanofrax',
        photo: mezmicroIMG,
        link: '/zabiegi/mezoterapia-mikroigłowa',
        type: 'Medycyna estetyczna'
    },
    {
        name: 'Mezoterapia igłowa',
        photo: mezIMG,
        link: '/zabiegi/mezoterapia-igłowa',
        type: 'Medycyna estetyczna'
    },
    {
        name: 'Oczyszczanie wodorowe + maską PCA',
        photo: wodorIMG,
        link: '/zabiegi/oczyszczanie-wodorowe',
        type: 'Twarz'
    },
    {
        name: 'STORZ Fala uderzeniowa',
        photo: storzIMG,
        link: '/zabiegi/storz-fala-uderzeniowa',
        type: 'Ciało'
    }
]

export const servicesNextList = [
    {
        name: 'Stymulatory tkankowe',
        photo: stimulIMG,
        link: '/zabiegi/stymulatory-tkankowe',
        type: 'Medycyna estetyczna'
    },
    {
        name: 'Podstawowa pielęgnacja twarzy + masaż',
        photo: imgMassage,
        link: '/zabiegi/podstawowa-pielęgnacja-twarzy',
        type: 'Twarz'
    },
    {
        name: 'Konsultacja przedzabiegowa',
        photo: imgCons,
        link: '/zabiegi/konsultacja-przedzabiegowa',
        type: 'Konsultacje kosmetologiczne'
    },
    {
        name: 'Beauty plan',
        photo: imgConsult,
        link: '/zabiegi/beauty-plan',
        type: 'Konsultacje kosmetologiczne'
    }
]