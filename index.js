const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const dist = path.resolve(__dirname, "dist"),
const goToDist = path.join(dist, "roster.html");

const render = require("./lib/htmlRenderer");