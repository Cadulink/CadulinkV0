angular.module('people.service', ['articles.data', 'communities.data', 'people.data'])

.factory('PersonService', function() {
    return {
        get: function(){
            return people;
        },
        getId: function(personId) {
            return people[personId];
        },
        getCommunities(personId){
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
              'communities': [1,3]
            });
        },
        setId: function(personId, email, password, firstName, lastName, profession, practiceLocation){
            people[personId]['email'] = email;
            people[personId]['password'] = password;
            people[personId]['firstName'] = firstName;
            people[personId]['lastName'] = lastName;
            people[personId]['profession'] = profession;
            people[personId]['practiceLocation'] = practiceLocation;
        }
    };
});
