'use strict';

function User(DS) {
  return DS.defineResource({
    name: 'user',
    endpoint: 'users',
    methods: {
      name: function () {
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });
}

User.$inject = ['DS'];

module.exports = User;