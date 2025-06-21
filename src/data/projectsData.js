
import space from '../assets/png/space.png'
import graphe from '../assets/png/Graphe.jpg'
import interpreteur from '../assets/png/screen_un.png'
import qds from '../assets/png/trace_quatre.png'
import medApp from '../assets/png/medapp.jpg'
import medicine from '../assets/png/medicine.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Jeu - Space Invaders',
        projectDesc: `Développement complet du jeu Space Invaders en .NET (C#), intégrant l’ensemble des mécaniques de gameplay : déplacement du joueur, génération des ennemis, tirs, collisions, et progression de la difficulté.
        Projet axé sur la maîtrise de la programmation orientée objet, la gestion des événements, et l’optimisation de la logique de jeu.`,
        tags: ['C#'],
        code: 'https://github.com/ideuxs/Space-Invaders',
        image: space
    },
    {
        id: 2,
        projectName: 'Organix',
        projectDesc: `Projet de développement d’une application mobile permettant de signaler la pénurie de médicaments dans une ville. L’utilisateur peut scanner le QR code du médicament ou saisir son code CIP (identifiant officiel attribué lors de sa mise sur le marché) afin de transmettre l’alerte.`,
        tags: ['React Native', 'Javascript'],
        code: 'https://github.com/ideuxs/Organix',
        image: medicine
    },
    {
        id: 3,
        projectName: `Gestion d'information`,
        projectDesc: `Interpréteur de commandes développé en langage C permettant la gestion d’étudiants au sein d’une formation. Possibilité d’ajouter ou de retirer des étudiants, d’associer des matières avec les notes correspondantes, et de générer un relevé incluant la moyenne de chaque étudiant ainsi que la décision finale concernant leur passage ou non à l’année suivante.`,
        tags: ['C'],
        code: 'https://github.com/ideuxs/gestion-information',
        image: interpreteur
    },
    {
        id: 4,
        projectName: 'Algorithme Dijkstra',
        projectDesc: `Algorithme de Dijkstra en Java pour calculer le chemin le plus court dans un graphe pondéré. Utilisation d'une file de priorité pour optimiser les performances et une structure de données adaptée aux graphes orientés. Tests unitaires complets réalisés avec JUnit.`,
        tags: ['Java'],
        code: 'https://github.com/ideuxs/Graphe-Dijkstra',
        image: graphe
    },
   
    {
        id: 2,
        projectName: 'Jeu - Quart de singe',
        projectDesc: 'Jeu interactif en langage C / C++ du « quart de singe », où plusieurs joueurs construisent un mot lettre par lettre. Mise en œuvre des concepts fondamentaux comme les pointeurs, la gestion dynamique de la mémoire et le contrôle de flux en C. Insertion des paramètres en ligne de commande pour initialiser les joueurs et un fichier dictionnaire pour valider les mots proposés',
        tags: ['C', 'C++'],
        code: 'https://github.com/ideuxs/Quart-de-Singe',
        image: qds
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/