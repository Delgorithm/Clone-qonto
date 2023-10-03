import img1 from '/img/comptepro.png';
import img2 from '/img/facture.png'; 
import img3 from '/img/gestiondepenses.png';
import img4 from '/img/compta.png';

const AccordionText = [
    {
        id: 1,
        name: "Compte pro & Cartes",
        bg: "bg-cyan-100",
        text: "IBAN français, cartes pro, virements instantanés : tout pour payer et être payé.",
        moreInfo: "En savoir plus",
        img: img1
    },
    {
        id: 2,
        name: "Factures clients et fournisseurs",
        bg: "bg-yellow-100",
        text: "Centralisez et gérez toutes vos factures sur votre compte. Pour des paiements rapides.",
        moreInfo: "En savoir plus",
        img: img2
    },
    {
        id: 3,
        name: "Gestion des dépenses d'équipe",
        bg: "bg-purple-200",
        text: "Fixez des limites de paiement et déléguez les dépenses en gardant le contrôle.",
        moreInfo: "En savoir plus",
        img: img3
    },
    {
        id: 4,
        name: "Comptabilité & Reporting",
        bg: "bg-orange-200",
        text: "Automatisez la collecte des justificatifs et connectez Qonto à votre outil comptable",
        moreInfo: "En savoir plus",
        img: img4    
    },
]

export default AccordionText