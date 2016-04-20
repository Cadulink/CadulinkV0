
angular.module('communities.data', []);

var communities = [
    {
    id: 0,
    label: "Dentiste",
    description: "texte",
    communityManagerId: 0,
    adminId: 1,
    labelisateur:2,
    relatedCommunities: [1,3,4]
  },
    {
    id: 1,
    label: "Médecin",
    description: "texte",
    communityManagerId: 1,
    adminId: 0,
    labelisateur:3,
    relatedCommunities: [2,3]
  },
    {
    id: 2,
    label: "Infirmière",
    description: "texte",
    communityManagerId: 3,
    adminId: 1,
    labelisateur:4,
    relatedCommunities: [0,2,5]
  },
    {
    id: 3,
    label: "Kinésithérapeute",
    description: "texte",
    communityManagerId: 4,
    adminId: 2,
    labelisateur:5,
    relatedCommunities: [1,3,5]
  },
    {
    id: 4,
    label: "Chirurgie",
    description: "texte",
    communityManagerId: 4,
    adminId: 1,
    labelisateur:2,
    relatedCommunities: [3,4]
  },
    {
    id: 5,
    label: "Pharmacien",
    description: "texte",
    communityManagerId: 4,
    adminId: 1,
    labelisateur:2,
    relatedCommunities: [0]
  }
];
