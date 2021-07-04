import axios from "axios";

const numResults = 3;

axios.get(`https://randomuser.me/api/?results=${numResults}&inc=name,location,email,picture`)
  .then(function (response) {
    console.log(response.data.results);
});

// module.exports