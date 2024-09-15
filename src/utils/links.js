import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import iconBooksy from '../images/BooksyIcon.png'

export const SocialNetworks = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/epilacja.slupsk/',
        icon: <BsInstagram />,
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/epilacja.slupsk/',
        icon: <FaFacebookSquare />,
    },
    {
        name: 'Booksy',
        link: 'https://booksy.com/pl-pl/119440_epilacja-slupsk_depilacja_20103_slupsk',
        icon: <img src={iconBooksy} alt="Booksy Icon" width={120} />,
    }
]