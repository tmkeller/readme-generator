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
        name: 'contributing'
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
        choices: [ 'Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'CC0', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'IBM Public License Version 1.0', 'ISC License (ISC)', 'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1', 'The Unlicense', 'The Do What the **** You Want to Public License', 'The zlib/libpng License' ]
    },
]

// TODO: Create a function to write README file
function writeToFile( fileName, data ) {
    const newTitle = `# ${ data.title }\n\n`
    const newLicense = `## License\n${ getBadge( data.license ) }\n\n`
    const newDescription = `## Description\n${ data.description }\n\n`
    const newInstallation = `## Installation\n${ data.installation }\n\n`
    const newUsage = `## Usage\n${ data.usage }\n\n`
    const newContributing = `## Contributing\n${ data.contributing }\n\n`
    const newTests = `## Tests\n${ data.test }\n\n`
    const finalString = newTitle + newLicense + newDescription + newInstallation + newUsage + newContributing + newTests;
    fs.appendFile( fileName, finalString, ( err ) => {
        err ? console.log( err ) : console.log( `Tests instructions successfully written.` );
    })
}

// TODO: Create a function to initialize app
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

function getBadge( key ) {
    switch ( key ) {
        case 'Apache 2.0 License':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        case 'BSD 3-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        case 'BSD 2-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
        case 'CC0':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
        case 'Attribution 4.0 International':
            return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
        case 'Attribution-ShareAlike 4.0 International':
            return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'
        case 'Attribution-NonCommercial 4.0 International':
            return '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)'
        case 'Attribution-NoDerivates 4.0 International':
            return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)'
        case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
            return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'
        case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
            return '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'
        case 'Eclipse Public License 1.0':
            return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        case 'GNU GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        case 'GNU GPL v2':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        case 'GNU AGPL v3':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        case 'GNU LGPL v3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        case 'GNU FDL v1.3':
            return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'
        case 'IBM Public License Version 1.0':
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        case 'ISC License (ISC)':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        case 'The MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        case 'Attribution License (BY)':
            return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
        case 'Open Database License (ODbL)':
            return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'
        case 'Public Domain Dedication and License (PDDL)':
            return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
        case 'The Perl License':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        case 'The Artistic License 2.0':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
        case 'SIL Open Font License 1.1':
            return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        case 'The Do What the **** You Want to Public License':
            return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
        case 'The zlib/libpng License':
            return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        default:
            return key
    }
}