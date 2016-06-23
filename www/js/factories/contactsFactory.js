(function() {
  angular.module("cwapp")

    .factory("Contacts", contactsFactory);

  function contactsFactory($http) {
    var selectedContact = {};
    return {
      getAllContacts: $http.get('https://cw-project-backend.herokuapp.com/getRecords'),
      set: function(data) {
        selectedContact = data;
      },
      get: function() {
        return selectedContact;
      },
      update: function(url) {$http.patch('https://cw-project-backend.herokuapp.com/updateRecord', [selectedContact, url]);},
    };
  }

})();
