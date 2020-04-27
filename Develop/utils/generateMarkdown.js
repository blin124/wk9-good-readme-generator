function generateMarkdown({name, email, title, subTitle, description, usage, license, contributors, testInstall,  testConduct, userToKnow, userContributeToKnow}) {  

  return `
  https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

  # Github
  > Username: ${name}
  > Email: ${email}

  | ** Contents of Project ** |
  | Project Title |
  | Description   |
  | Installation  |
  | Usage         |
  | License       |
  | Contributing  |
  | Tests         |
  | Questions     |

  # ${title}

  > ${subTitle} 

  > ${description}

  ** Badges
  - badge
  - npm package
  - issues

  ## Screenshots of project / Gifs of project:
  - ${screenshotsOrGifs}

  ## Usage
  ${usage}

  ## Contributors
  - ${contributors}

  ---

  ## Installation dependencies
  > $${testInstall}
  ### Test run command
  > $${testConduct}

  ---

  > User Necessary Knowledge
  ${userToKnow}
  ${userContributeToKnow}

  ---

  ## License
  - ${license}

  ---

  ## Copyright
  @ Copyright ${copyright}
  `
}

module.exports = generateMarkdown;
