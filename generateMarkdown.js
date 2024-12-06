// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT")
    //This whole function is a conditional statement that checks the license type and returns the corresponding badge.
  {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } 
  //If the license is MIT, the function returns the MIT badge.
  else if (license === "Apache") {
    return "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  }
  //If the license is Apache, the function returns the Apache badge.
  else if (license === "ISC"){
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  }
  //
  else {
    return ""; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else {
    return ""; 
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return ""; 
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  For more details, see the license documentation: ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Testing
  \`\`\`
  ${data.testing}
  \`\`\`
  
  ## Questions
  If you have any questions, feel free to reach out:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
  }

export default generateMarkdown;