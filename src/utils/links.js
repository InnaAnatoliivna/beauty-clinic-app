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
        name: 'Instagram',
        link: 'https://www.facebook.com/epilacja.slupsk/',
        icon: <img src={iconBooksy} alt="Booksy Icon" />,
    }
]