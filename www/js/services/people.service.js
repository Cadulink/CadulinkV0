angular.module('people.service', ['articles.data', 'communities.data', 'people.data'])

.factory('PersonService', function() {
    return {
        get: function() {
            return people;
        },
        getId: function(personId) {
            return people[personId];
        },
        getCommunities: function(personId){
            subCommunities = [];
            people[personId].communities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        },
        create: function(email, password, firstName, lastName, profession, practiceLocation){
            people.push({
              'id': people.length,
              'email': email,
              'password': password,
              'firstName': firstName,
              'lastName': lastName,
              'profession': profession,
              'practiceLocation': practiceLocation,
              'communities': [2,3]
            });
        },
        edit: function(personId, email, password, firstName, lastName, profession, practiceLocation){
            people[personId]['email'] = email;
            people[personId]['password'] = password;
            people[personId]['firstName'] = firstName;
            people[personId]['lastName'] = lastName;
            people[personId]['profession'] = profession;
            people[personId]['practiceLocation'] = practiceLocation;
        },
        isInCommunity(personId,communityId) {
            if(people[personId].communities.indexOf(communityId) != -1) {
                return true;
            }
            else {
                return false;
            }
        },
        joinCommunity(personId,communityId) {
            people[personId].communities.push(communityId);
            return true;
        },
        quitCommunity(personId,communityId) {
            for(var i=0;i<people[personId].communities.length;i++) {
                if(people[personId].communities[i] == communityId) {
                    people[personId].communities.splice(i,1);
                    return true;
                }
            }
            return false;
        }
    };
});
