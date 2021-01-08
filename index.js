// Include packages needed for this application
const generate = require( './custom modules/generateMarkdown.js' );
const inquirer = require( 'inquirer' )
const fs = require( 'fs' )

// Create an array of questions for user input
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
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter the author\'s Github: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter the author\'s email: ',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Choose your license: ',
        name: 'license',
        choices: [ 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the **** You Want to Public License', 'The zlib/libpng License' ]
    },
]

// Create a function to write README file
function writeToFile( fileName, data ) {
    const finalString = generate.generateMarkdown( data );
    fs.appendFile( fileName, finalString, ( err ) => {
        err ? console.log( err ) : console.log( `Tests instructions successfully written.` );
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt( questions ).then( ( response ) => {
        if ( !response ) {
            console.log( "There was an error." );
        } else {
            writeToFile( 'README.md', response );
        }
    });
}

// Function call to initialize app
init();