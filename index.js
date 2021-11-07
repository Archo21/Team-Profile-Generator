const inquirer = require("inquirer");
const fs = require("fs");
const path = require ("path")
const outpudirectory = path.resolve(__dirname,"output")
const outputpath = path.join(outpudirectory,"team.html")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render =require("./sources/generateHtml")
const teamWorks = []
function appStart(){
    inquirer.prompt([
        {
            type:"list",
            name:"role",
            message:"what is your role?",
            choices: ["manager","intern","engineer"]
        },
        {
            type:"input",
            name:"name",
            message:"what is your name?"  
        },
        {
            type:"input",
            name:"id",
            message:"what is your id?"
        },  
        {
            type:"input",
            name:"email",
            message:"what is your email?"
        },       
        {
            type:"input",
            name:"github",
            message:"what is your github Username?",
            when:(answer)=>answer.role === "engineer"
        },
        {
            type:"input",
            name:"school",
            message:"what is your school?",
            when:(answer)=>answer.role === "intern",
        },
        {
            type:"input",
            name:"officenumber",
            message:"what is your Office Number?",
            when:(answer)=>answer.role === "manager",
        },
        {
        type: "list",
        name: "askAgain",
        message: "Would you like to add more team members?",
        choices: [
            "yes",
            "no"
        ]}

    ])
    .then(function(answer) {
    
    if (answer.role === "engineer") {
        const engineer = new Engineer (
            answer.name, answer.id, answer.email, answer.github
        )
        teamWorks.push(engineer)
    }
    if (answer.role === "intern") {
        const intern = new Intern (
            answer.name, answer.id, answer.email, answer.school
        )
        teamWorks.push(intern)
    }
    if (answer.role === "manager") {
        const manager = new Manager (
            answer.name, answer.id, answer.email, answer.officenumber
        )
        teamWorks.push(manager)
    }
    if(answer.askAgain === "yes"){

    appStart()
    }
    else{
        fs.writeFile(outputpath,render(teamWorks),(error)=>  {
            if (error){
                return console.log (error)
            }
            console.log("it works")
        });
        }
    });
    }
appStart()