// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch ( license ) {
        case 'Apache 2.0 License':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
        case 'BSD 3-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
        case 'BSD 2-Clause License':
            return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]'
        case 'CC0':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)]'
        case 'Attribution 4.0 International':
            return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)]'
        case 'Attribution-ShareAlike 4.0 International':
            return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)]'
        case 'Attribution-NonCommercial 4.0 International':
            return '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)]'
        case 'Attribution-NoDerivates 4.0 International':
            return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)]'
        case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
            return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)]'
        case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
            return '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)]'
        case 'Eclipse Public License 1.0':
            return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
        case 'GNU GPL v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
        case 'GNU GPL v2':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]'
        case 'GNU AGPL v3':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]'
        case 'GNU LGPL v3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]'
        case 'GNU FDL v1.3':
            return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)]'
        case 'IBM Public License Version 1.0':
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]'
        case 'ISC License (ISC)':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
        case 'The MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]'
        case 'Attribution License (BY)':
            return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]'
        case 'Open Database License (ODbL)':
            return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]'
        case 'Public Domain Dedication and License (PDDL)':
            return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]'
        case 'The Perl License':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
        case 'The Artistic License 2.0':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)]'
        case 'SIL Open Font License 1.1':
            return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)]'
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
        case 'The Do What the **** You Want to Public License':
            return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]'
        case 'The zlib/libpng License':
            return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]'
        default:
            return ""
    }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch ( license ) {
        case 'Apache 2.0 License':
            return '(https://opensource.org/licenses/Apache-2.0)'
        case 'Boost Software License 1.0':
            return '(https://www.boost.org/LICENSE_1_0.txt)'
        case 'BSD 3-Clause License':
            return '(https://opensource.org/licenses/BSD-3-Clause)'
        case 'BSD 2-Clause License':
            return '(https://opensource.org/licenses/BSD-2-Clause)'
        case 'CC0':
            return '(http://creativecommons.org/publicdomain/zero/1.0/)'
        case 'Attribution 4.0 International':
            return '(https://creativecommons.org/licenses/by/4.0/)'
        case 'Attribution-ShareAlike 4.0 International':
            return '(https://creativecommons.org/licenses/by-sa/4.0/)'
        case 'Attribution-NonCommercial 4.0 International':
            return '(https://creativecommons.org/licenses/by-nc/4.0/)'
        case 'Attribution-NoDerivates 4.0 International':
            return '(https://creativecommons.org/licenses/by-nd/4.0/)'
        case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
            return '(https://creativecommons.org/licenses/by-nc-sa/4.0/)'
        case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
            return '(https://creativecommons.org/licenses/by-nc-nd/4.0/)'
        case 'Eclipse Public License 1.0':
            return '(https://opensource.org/licenses/EPL-1.0)'
        case 'GNU GPL v3':
            return '(https://www.gnu.org/licenses/gpl-3.0)'
        case 'GNU GPL v2':
            return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        case 'GNU AGPL v3':
            return '(https://www.gnu.org/licenses/agpl-3.0)'
        case 'GNU LGPL v3':
            return '(https://www.gnu.org/licenses/lgpl-3.0)'
        case 'GNU FDL v1.3':
            return '(https://www.gnu.org/licenses/fdl-1.3)'
        case 'IBM Public License Version 1.0':
            return '(https://opensource.org/licenses/IPL-1.0)'
        case 'ISC License (ISC)':
            return '(https://opensource.org/licenses/ISC)'
        case 'The MIT License':
            return '(https://opensource.org/licenses/MIT)'
        case 'Mozilla Public License 2.0':
            return '(https://opensource.org/licenses/MPL-2.0)'
        case 'Attribution License (BY)':
            return '(https://opendatacommons.org/licenses/by/)'
        case 'Open Database License (ODbL)':
            return '(https://opendatacommons.org/licenses/odbl/)'
        case 'Public Domain Dedication and License (PDDL)':
            return '(https://opendatacommons.org/licenses/pddl/)'
        case 'The Perl License':
            return '(https://opensource.org/licenses/Artistic-2.0)'
        case 'The Artistic License 2.0':
            return '(https://opensource.org/licenses/Artistic-2.0)'
        case 'SIL Open Font License 1.1':
            return '(https://opensource.org/licenses/OFL-1.1)'
        case 'The Unlicense':
            return '(http://unlicense.org/)'
        case 'The Do What the **** You Want to Public License':
            return '(http://www.wtfpl.net/about/)'
        case 'The zlib/libpng License':
            return '(https://opensource.org/licenses/Zlib)'
        default:
            return ""
        }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseBadge( license ) + renderLicenseLink( license );
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    let topMarkdown = "";
    let tableOfContents = "## Table of Contents\n";
    let newMarkdown = "";
    let index = 0;
    if ( data.title ) {
        topMarkdown += `# ${ data.title }\n\n`;
    }
    if ( data.description ) {
        index++;
        tableOfContents += `${ index }. [Description](#description)\n`;
        newMarkdown += `## Description\n${ data.description }\n\n`
    }
    if ( data.installation ) {
        index++;
        tableOfContents += `${ index }. [Installation](#installation)\n`;
        newMarkdown += `## Installation\n${ data.installation }\n\n`
    }
    if ( data.usage ) {
        index++;
        tableOfContents += `${ index }. [Usage](#usage)\n`;
        newMarkdown += `## Usage\n${ data.usage }\n\n`
    }
    if ( data.contributing ) {
        index++;
        tableOfContents += `${ index }. [Contributing](#contributing)\n`;
        newMarkdown += `## Contributing\n${ data.contributing }\n\n`
    }
    if ( data.test ) {
        index++;
        tableOfContents += `${ index }. [Tests](#tests)\n`;
        newMarkdown += `## Tests\n${ data.test }\n\n`
    }
    if ( data.github || data.email ) {
        index++;
        tableOfContents += `${ index }. [Questions](#questions)\n`;
        newMarkdown += `## Questions\n`
        if ( data.github ) {
            newMarkdown += `Written by [${ data.github }](https://github.com/${ data.github }) on Github`
        }
        if ( data.email ) {
            newMarkdown += `Email the author at ${ data.email }`
        }
        newMarkdown += `\n\n`
    }
    if ( data.license ) {
        index++;
        topMarkdown += `${ renderLicenseSection( data.license ) }\n\n`
        tableOfContents += `${ index }. [License](#license)\n`;
        newMarkdown += `## License\n[${ data.license }]${ renderLicenseLink( data.license ) }`;
    }
    return topMarkdown + tableOfContents + newMarkdown;
}

module.exports = { generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge };