angular.module('communities.data', []);

var communities = [
    { id: 1, label: "Dentiste", description: "texte", communityManagerId: 2, relatedCommunities: [1,3,4] },
    { id: 2, label: "Médecin", description: "texte", communityManagerId: 1, relatedCommunities: [2,3] },
    { id: 3, label: "Infirmière", description: "texte", communityManagerId: 3, relatedCommunities: [1,2,5] },
    { id: 4, label: "Kinésithérapeute", description: "texte", communityManagerId: 4, relatedCommunities: [1,3,5] },
    { id: 5, label: "Chirurgie", description: "texte", communityManagerId: 4, relatedCommunities: [3,4] }
];
