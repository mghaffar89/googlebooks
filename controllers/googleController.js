import axios from "axios";
const db = require("../models");

export default {
  searchTerms: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
};
