// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![license](https://img.shields.io/badge/license-MIT-blue)"
  } else if (license === "Apache 2.0") {
    return "![license](https://img.shields.io/badge/Apache%202.0-Apache%202.0-green)"
  } else if (license === "BSD 3.0") {
    return "![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](http://opensource.org/licenses/MIT)"
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0](http://opensource.org/licenses/Apache-2.0)"
  } else if (license === "BSD 3.0") {
    return "[BSD 3.0](http://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}

  ## Description
  ${data.Description}

  ## Table of Contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributing
  ${data.Contributing}

  ## Test
  ${data.Tests}

  ## Questions
  ${data.Email}
  ${data.Username}

`;
}

export default generateMarkdown;
