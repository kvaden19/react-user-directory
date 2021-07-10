import axios from "axios";

export default {
  getRandomUsers: function() {
    return axios.get('https://randomuser.me/api/?results=10&inc=name,location,email,picture');
  },
  getUsersofNat: function(nationality) {
    return axios.get(`https://randomuser.me/api/?nat=${nationality}&results=10`);
  }
};