angular.module('communities.data', []);

var communities = [
    { id: 0, label: "Dentiste", description: "texte", communityManagerId: 2, relatedCommunities: [1,3,4] },
    { id: 1, label: "Médecin", description: "texte", communityManagerId: 1, relatedCommunities: [1,2] },
    { id: 2, label: "Infirmière", description: "texte", communityManagerId: 3, relatedCommunities: [0,2,4] },
    { id: 3, label: "Kinésithérapeute", description: "texte", communityManagerId: 4, relatedCommunities: [1,3,4] },
    { id: 4, label: "Chirurgie", description: "texte", communityManagerId: 4, relatedCommunities: [3,4] }
];
