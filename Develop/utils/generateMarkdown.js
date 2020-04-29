function generateMarkdown({name, email, avatar_url, title, subTitle, description, screenshotsOrGifs, usage, license, contributors, testInstall,  testConduct, userToKnow, userContributeToKnow, copyright}) {  

  return `
  # Github
  > Username: ${name}
  > Email: ${email}
  
  > Gihub Profile Picture:
  [${avatar_url}]

  ## Contents of Project
  | Project Title |
  | Description   |
  | Installation  |
  | Usage         |
  | License       |
  | Contributing  |
  | Tests         |
  | Questions     |

  # ${title}

  ## ${subTitle} 

  > ${description}

  ## Screenshots of project / Gifs of project:
  - ${screenshotsOrGifs}

  ## Usage
  - ${usage}

  ## Contributors
  - ${contributors}

  ---

  ## Installation dependencies
  [https://img.shields.io/badge/npm-${testInstall}-green]
  > $ ${testInstall}
  ### Test run command
  [https://img.shields.io/badge/tests-${testConduct}-brightgreen]
  > $ ${testConduct}

  ---

  ### User Necessary Knowledge
  ${userToKnow}
  ${userContributeToKnow}

  ---

  ## License
  [https://img.shields.io/badge/license-${license}-gold]
  - ${license}

  ---

  ## Copyright
  @ Copyright ${copyright}
  [https://img.shields.io/badge/copyright-${copyright}-blue]

  `
}

module.exports = generateMarkdown;
