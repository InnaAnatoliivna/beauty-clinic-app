import endermIMG from '../images/services/Endermolif.jpg';
import epilIMG from '../images/services/Epilacja.jpg';
import storzIMG from '../images/services/Fala-udzerzeniowa-Storz.jpg';
import wodorIMG from '../images/services/Wodorowe.jpg';
import mezmicroIMG from '../images/services/Mezoterapia-mikroigłowa.jpg';
import mezIMG from '../images/services/Mezoterapia-igłowa.jpg';
import stimulIMG from '../images/services/igłowa1.jpg';
import imgMassage from '../images/services/Masaż-21.jpg';
import imgConsult from '../images/services/DSC013912.jpg';


export const servicesList = [
    {
        name: 'Endermologia LPG',
        photo: endermIMG,
        link: '/services/endermologia-lpg',
        className: 'enderm'
    },
    {
        name: 'Epilacja laserowa',
        photo: epilIMG,
        link: '/services/epilacja-laserowa',
        className: 'laser'
    },
    {
        name: 'Mezoterapia mikroigłowa Nanofrax',
        photo: mezmicroIMG,
        link: '/services/mezoterapia-mikroigłowa',
        className: 'nanofrax'
    },
    {
        name: 'Mezoterapia igłowa',
        photo: mezIMG,
        link: '/services/mezoterapia-igłowa',
        className: 'mezoter'
    },
    {
        name: 'Oczyszczanie wodorowe + maską PCA',
        photo: wodorIMG,
        link: '/services/oczyszczanie-wodorowe',
        className: 'wodor'
    },
    {
        name: 'STORZ Fala uderzeniowa',
        photo: storzIMG,
        link: '/services/storz-fala-uderzeniowa',
        className: 'storz'
    }
]

export const servicesNextList = [
    {
        name: 'Stymulatory tkankowe',
        photo: stimulIMG,
        link: '/services/stymulatory-tkankowe',
    },
    {
        name: 'Podstawowa pielęgnacja twarzy + masaż',
        photo: imgMassage,
        link: '/services/podstawowa-pielęgnacja-twarzy',
    },
    {
        name: 'Konsultacja przedzabiegowa',
        photo: imgConsult,
        link: '/services/konsultacja-przedzabiegowa',
    },
    {
        name: 'Beauty plan',
        photo: imgConsult,
        link: '/services/beauty-plan',
    }
]