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
import img10 from '/img/ourcard01.png'
import img11 from '/img/ourcard02.png'
import img12 from '/img/ourcard03.png'

import img13 from '/img/carroussel1.png'
import img14 from '/img/carroussel2.png'
import img15 from '/img/carroussel3.png'
import img16 from '/img/carroussel4.png'
import img17 from '/img/carroussel5.png'
import img18 from '/img/carroussel6.png'
import img19 from '/img/carroussel7.png'
import img20 from '/img/carroussel8.png'

    
const middleImg = [
    {
        id: 1,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img10: img10,
        img11: img11,
        img12: img12,
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

const proInformation = [
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
    },
    {
        id: 5,
        title: "Factures clients et fournisseurs",
        text: "Centraliser ses factures"
    },
    {
        id: 6,
        title: "Gestion des dépenses d'équipe",
        text: "Améliorer sa gestion des dépenses",
    },
    {
        id: 7,
        title: "Comptabilité & Reporting",
        text: "Simplifier sa comptabilité"
    },
]

const cardPro = [
    {
        id: 1,
        title: "Paiement",
        img: img13,
        subtitle: "Compte pro",
        text: "IBAN professionnels, pour payer et être payé rapidement"
    },
    {
        id: 2,
        title: "Paiement",
        img: img14,
        subtitle: "Cartes",
        text: "Physiques et virtuelles, Apple Pay & Google Play"
    },
    {
        id: 3,
        title: "Paiement",
        img: img15,
        subtitle: "Sepa",
        text: "Virements SEPA instantanés prélèvements"
    },
    {
        id: 4,
        title: "Paiement",
        img: img16,
        subtitle: "Swift",
        text: "Virements dans 25 devises"
    },
    {
        id: 5,
        title: "Paiement",
        img: img17,
        subtitle: "TPE",
        text: "Terminal de paiement mobile Zettle"
    },
    {
        id: 6,
        title: "Gestion",
        img: img18,
        subtitle: "Financement",
        text: "Les évolutions de prêt de nos partenaires"
    },
    {
        id: 7,
        title: "Gestion",
        img: img19,
        subtitle: "Epargne",
        text: "Les solutions d'épargne de nos partenaires"
    },
    {
        id: 8,
        title: "Gestion",
        img: img20,
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

export { middleImg, middleText, middleBlogText, proInformation, cardPro, FaArrowLeft, FaArrowRight };