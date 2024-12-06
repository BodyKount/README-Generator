// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";
import path from 'path';


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title for this project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license was used for this project?',
        choices: ["MIT", "Apache", "ISC", "None"],
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide all necessary installation instructions for your project.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What usage information would you like to provide for your project?',
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'What are the contribution guidelines are needed for your project?',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'What are the test instructions you would like to provide for your project?',
    },
    {
        name: 'github',
        type: 'input',
        message: 'What GITHUB username do you want to use?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please provide your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    console.log(`Writing to file: ${filePath}`);
    try {
        fs.writeFileSync(filePath, data);
        console.log(`Successfully created to ${filePath}`);
    } catch (error) {
        console.error(`Error in creating to file: ${filePath}`, error);
    }
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
        console.log("README.md file has been successfully created!");
    } catch (error) {
        console.error("This was an issue creating README file:", error);
    }
}

// Function call to initialize app
init();