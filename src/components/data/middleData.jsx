import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import img1 from '/img/yuka.png'
import img2 from '/img/ankorstore.png'
import img3 from '/img/phone1.png'
import img4 from '/img/facture1.png'
import img5 from '/img/createur1.png'
import img6 from '/img/independants.png'
import img7 from '/img/tpe.png'
import img8 from '/img/pme.png'
import img9 from '/img/associations.png'

    
const middleImg = [
    {
        id: 1,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4
    }
];

const middleText = [
    {
        id: 1,
        text: "Pour les entreprises de toutes tailles, secteurs et stades de croissance"
    }
]

const middleBlogText = [
    {
        id: 1,
        text: "Créateurs d'entreprise",
        icon: <FaArrowRight />,
        img: img5,
        bg: "bg-black"
    },
    {
        id: 2,
        text: "Indépendants",
        icon: <FaArrowRight />,
        img: img6,
        bg: "bg-purple-100",
    },
    {
        id: 3,
        text: "TPE",
        icon: <FaArrowRight />,
        img: img7,
        bg: "bg-cyan-100",
    },
    {
        id: 4,
        text: "PME",
        icon: <FaArrowRight />,
        img: img8,
        bg: "bg-yellow-100",
    },
    {
        id: 5,
        text: "Associations",
        icon: <FaArrowRight />,
        img: img9,
        bg: "bg-orange-100",
    },
]

const pro = [
    {
        id: 1,
        text: "Tous vos besoins financiers sur une seule app."
    },
    {
        id: 2,
        text: "Nos tarifs s'adaptent à votre activité et à votre croissance."
    },
    {
        id: 3,
        text: "Compte pro & Cartes"
    },
    {
        id: 4,
        text: "Ouvrir un compte pro",
        icon: <FaArrowRight />
    },
    {
        id: 5,
        icon: <FaArrowRight />,
        icon2: <FaArrowLeft />
    }
]

const cardPro = [
    {
        id: 1,
        title: "Paiement",
        subtitle: "Compte pro",
        text: "IBAN professionnels, pour payer et être payé rapidement"
    },
    {
        id: 2,
        title: "Paiement",
        subtitle: "Cartes",
        text: "Physiques et virtuelles, Apple Pay & Google Play"
    },
    {
        id: 3,
        title: "Paiement",
        subtitle: "Sepa",
        text: "Virements SEPA instantanés prélèvements"
    },
    {
        id: 4,
        title: "Paiement",
        subtitle: "Swift",
        text: "Virements dans 25 devises"
    },
    {
        id: 5,
        title: "Paiement",
        subtitle: "TPE",
        text: "Terminal de paiement mobile Zettle"
    },
    {
        id: 6,
        title: "Gestion",
        subtitle: "Financement",
        text: "Les solutions de prêt de nos partenaires"
    },
    {
        id: 7,
        title: "Gestion",
        subtitle: "Epargne",
        text: "Les solutions d'épargne de nos partenaires"
    },
    {
        id: 8,
        title: "Gestion",
        subtitle: "Dépôt de capital",
        text: "Dépôt de capital social ou augmentation du capital"
    },
    {
        id: 9,
        title: "Aide",
        subtitle: "Changer de banque",
        text: "Nous simplifions votre transfert de compte"
    }
]

export { middleImg, middleText, middleBlogText, pro, cardPro, FaArrowLeft, FaArrowRight };