import endermIMG from '../images/services/Endermolif.jpg';
import epilIMG from '../images/services/Epilacja.jpg';
import storzIMG from '../images/services/Fala-udzerzeniowa-Storz.jpg';
import wodorIMG from '../images/services/Wodorowe.jpg';
import mezmicroIMG from '../images/services/Mezoterapia-mikroigłowa.jpg';
import mezIMG from '../images/services/Mezoterapia-igłowa.jpg';


export const servicesList = [
    {
        name: 'Endermologia LPG',
        photo: endermIMG,
        link: '/services',
        className: 'enderm'
    },
    {
        name: 'Epilacja laserowa',
        photo: epilIMG,
        link: '/services',
        className: 'laser'
    },
    {
        name: 'Mezoterapia mikroigłowa Nanofrax',
        photo: mezmicroIMG,
        link: '/services',
        className: 'nanofrax'
    },
    {
        name: 'Mezoterapia igłowa',
        photo: mezIMG,
        link: '/services',
        className: 'mezoter'
    },
    {
        name: 'Oczyszczanie wodorowe + maską PCA',
        photo: wodorIMG,
        link: '/services',
        className: 'wodor'
    },
    {
        name: 'STORZ Fala uderzeniowa',
        photo: storzIMG,
        link: '/services',
        className: 'storz'
    }
]