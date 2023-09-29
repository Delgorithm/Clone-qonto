import React from 'react'
import { 
    BsFillPersonFill, 
    BsPeopleFill,
    BsFillBuildingsFill,
    BsFillHeartFill,
    BsFillKeyFill,
    BsFillRocketTakeoffFill,
    BsBagFill,
    BsReceipt,
    BsWalletFill,
    BsFillBookmarksFill,
    BsFillChatTextFill,
    BsPlugFill,
    BsWechat,
    BsFillQuestionCircleFill,
    BsStarFill,
    BsFillPersonLinesFill
} from 'react-icons/bs'

const TextMenuHamburger = () => {

    const Solutions = [
        {
            id: 1,
            logo: <BsFillPersonFill />,
            name: 'Indépendants',
            description: 'Freelances et professions libérales'
        },
        {
            id: 2,
            logo: <BsPeopleFill />,
            name: 'TPE',
            description: '1°9 emoployés'
        },
        {
            id: 3,
            logo: <BsFillBuildingsFill />,
            name: 'PME',
            description: '10-250 employés'
        },
        {
            id: 4,
            logo: <BsFillHeartFill />,
            name: 'Associations',
            description: 'Dons, cotisations, achats'
        },
        {
            id: 5,
            logo: <BsFillKeyFill />,
            name: 'Dépôt de capital',
            description: '100% en ligne, certificat en 72h'
        },
        {
            id: 6,
            logo: <BsFillRocketTakeoffFill />,
            name: `Aide à la création d'entreprise`,
            description: 'Rédaction status, immatriculation'
        },
    ];

    const Fonctionnalites = [
        {
            id: 1,
            logo: <BsBagFill />,
            name: 'Compte pro & Cartes',
            description: 'Tout pour payer et être payé'
        },
        {
            id: 2,
            logo: <BsReceipt />,
            name: 'Factures clients et fournisseurs',
            description: 'Centralisez toutes vos factures'
        },
        {
            id: 3,
            logo: <BsWalletFill />,
            name: `Gestion des dépenses d'équipes`,
            description: 'Déléguez tout en gardant le contrôle'
        },
        {
            id: 4,
            logo: <BsFillBookmarksFill />,
            name: 'Comptabilité & Reporting',
            description: 'Automatisez vos processus'
        },
    ];

    const Ressources = [
        {
            id: 1,
            logo: <BsFillChatTextFill />,
            name: 'Blog',
            description: ''
        },
        {
            id: 2,
            logo: <BsPlugFill />,
            name: 'Outils partenaires intégrés',
            description: ''
        },
        {
            id: 3,
            logo: <BsWechat />,
            name: 'Notre communauté finance',
            description: ''
        },
        {
            id: 4,
            logo: <BsFillQuestionCircleFill />,
            name: 'FAQ & service client',
            description: ''
        },
        {
            id: 5,
            logo: <BsStarFill />,
            name: 'Pourquoi choisir Qonto ?',
            description: ''
        },
        {
            id: 6,
            logo: <BsFillPersonLinesFill />,
            name: 'Témoignages clients',
        },
    ];

    const Tarifs = [
        {
            id: 1,
            logo: <BsFillKeyFill />,
            name: `Pourquoi les créateurs d'entreprise`,
            description: ''
        },
        {
            id: 2,
            logo: <BsFillPersonFill />,
            name: 'Pour les indépendants',
            description: ''
        },
        {
            id: 3,
            logo: <BsPeopleFill />,
            name: 'Pour les TPE',
            description: ''
        },
        {
            id: 4,
            logo: <BsFillBuildingsFill />,
            name: 'Pour les PME',
        },
    ];

    return {
        Solutions,
        Fonctionnalites,
        Ressources,
        Tarifs,
    };
}

export default TextMenuHamburger