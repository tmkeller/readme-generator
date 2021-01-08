// TODO: Include packages needed for this application
const inquirer = require( 'inquirer' )
const fs = require( 'fs' )

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter project title: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Choose your license: ',
        name: 'license',
        choices: [ 'Good', 'Better', 'Best' ]
    },
]

inquirer.prompt( questions ).then( ( response ) => {
    if ( !response ) {
        console.log( "There was an error." );
    } else {
        fs.appendFile( 'log.txt',
            `Project title: ${ response.title}
            Project description: ${ response.description}
            Project installation: ${ response.installation}
            Project usage: ${ response.usage }
            Project guidelines: ${ response.guidelines}
            Project test instructions: ${ response.test }
            Project license: ${ response.license }`,
            ( err ) => {
                err ? console.log( err ) : console.log( "Success!" );
            }
        )
    }
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
