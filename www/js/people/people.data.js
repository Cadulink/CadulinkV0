angular.module('people.data', []);

var currentUser;
localStorage.setItem(currentUser,('currentUser'));
var people = [
    {
        id: 0,
        email: "sebastien@cadulink.com",
        password : "cadulink",
        firstName: "Sébastien",
        lastName: "Velluz",
        profession: "Médecin généraliste",
        practiceLocation: "Valenciennes",
        communities: [0,2,3],
        image: "img/sebatien.jpg",
    },
    {
        id: 1,
        email: "kamel@cadulink.com",
        password : "cadulink",
        firstName: "Kamel",
        lastName: "Tansaout",
        profession: "Chirurgien-dentiste",
        practiceLocation: "Anzin",
        communities: [1,2],
        image:"img/kamel.jpg"
    },
    {
        id: 2,
        email: "julien@cadulink.com",
        password : "cadulink",
        firstName: "Julien",
        lastName: "Fourrier",
        profession: "Étudiant sage-femme",
        practiceLocation: "Lille",
        communities: [0,4],
        image: "img/julien.jpg"
    },
    {
        id: 3,
        email: "anthony@cadulink.com",
        password : "cadulink",
        firstName: "Anthony",
        lastName: "De Mendonca",
        profession: "ORL",
        practiceLocation: "Tourcoing",
        communities: [1,2,4],
        image: "img/anthony.jpg"
    },
    {
        id: 4,
        email: "philippe@cadulink.com",
        password : "cadulink",
        firstName: "Philippe",
        lastName: "Pary",
        profession: "Médecin généraliste",
        practiceLocation: "Valenciennes",
        communities: [0,3,4],
        image :"img/philippe.jpg"
    },
    {
        id: 5,
        email: "jordan@cadulink.com",
        password : "cadulink",
        firstName: "Jordan",
        lastName: "Bultez",
        profession: "Chirurgien-plastique",
        practiceLocation: "Valenciennes",
        communities: [1,4],
        image: "img/jordan.jpg"
    },
    {
        id: 6,
        email: "victor@cadulink.com",
        password : "cadulink",
        firstName: "Victor",
        lastName: "Vergne",
        profession: "Chiropratique",
        practiceLocation: "Anzin",
        communities: [1,2,4],
        image: "img/victor.jpg"
    },
    {
        id: 7,
        email: "michel@cadulink.com",
        password : "cadulink",
        firstName: "Michel",
        lastName: "Delpierre",
        profession: "Gynécologue",
        practiceLocation: "Bapaume",
        communities: [0,4],
        image: "img/michel.jpg"
    },
    {
        id: 8,
        email: "daniel@cadulink.com",
        password : "cadulink",
        firstName: "Daniel",
        lastName: "Bruchet",
        profession: "Dentiste",
        practiceLocation: "Bapaume",
        communities: [3,4],
        image: "img/Daniel.jpg"
    }
];
