import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (firstName, lastName, username, email, password) {
      return axios.post('/api/users/', { firstName, lastName, username, email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Recipes: {

    all: function() {
      return axios.get('/api/recipes/all', {})
    },

    create: function(authToken, title, image, description, prepTime, cookTime, servings, directions, categories, ingredients) {
      return axios.post('/api/recipes/', {
        title, image, description, prepTime, cookTime, servings, directions, categories, ingredients
      }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).catch(err => console.log(err));
    },

    byId: function(id) {
      return axios.get('/api/recipes/' + id, {})
    },

    byUser: function(authToken) {
      return axios.get('/api/recipes/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    },

    save: function(id, authToken) {
      return axios.post('/api/recipes/' + id, {}, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    },

    delete: function(id, authToken) {
      return axios.delete('/api/recipes/' + id, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    }
  },

  Categories : {
    all: function() {
      return axios.get('/api/categories/all', {})
    }
  }
}
