const express = require("express");
const branch = require("../models/branch");
const details = require("../models/detailsschema");
const dombivli = require("../models/dombivli");
const kalyan = require("../models/kalyan");
const Sliderschema = require("../models/Sliderschema");
const thane = require("../models/thane");

const routes = express.Router()

routes.get("/", async (req, res) => {
    const slides = await Sliderschema.find()
    const br_name = await branch.find()



    res.render("index", {
        slides: slides,
        br_name: br_name,



    });
});

routes.get("/details", async (req, res) => {
  const detailsPage = await details.find()
    res.render("details", {
        detailsPage:detailsPage
      



    });
});


routes.get("/kalyan_branch", async (req, res) => {
    const kyn_branch = await kalyan.find()
    res.render("kalyan_branch", {
        kyn_branch:kyn_branch
    });
});
routes.get("/dombivli_branch", async (req, res) => {
    const dombivli_branch = await dombivli.find()
    res.render("dombivli_branch", {
        dombivli_branch:dombivli_branch
    });
});

routes.get("/thane_branch", async (req, res) => {
    const thane_branch = await thane.find()
    res.render("thane_branch", {
        thane_branch:thane_branch
    });
});



module.exports = routes;


