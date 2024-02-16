# employee-tracker ![license](https://img.shields.io/badge/license-MIT-blue)

## Description
This is a console-based application that allows users to manage employees, roles, and departments in a database of employees.

Here's a quick demo to showcase the applications functionality:

https://github.com/derekmedrano/employee-tracker/assets/42650709/9fdde0c0-ac31-4839-a91b-d083f5d002a8

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
Project is installed via node.js. Necessary files are found in Github repo. It is recommended you Git clone onto your local machine.

## Usage
PROJECT CONTAINS SEED FILE, THIS IS USED AN EXAMPLE AND CAN BE SEEDED WITH USERS CUSTOM DATABASES.

Project is used in the console and deploys an inquirer based navigation menu. Use the arrow keys and the enter button to navigate the available options.
Application uses MySQL2 and Inquirer packages dependancies.

MySQL2 - https://www.npmjs.com/package/mysql2 <br>
Inquirer - https://www.npmjs.com/package/inquirer

The following code creates the connection to MySQL as well as the sample database. In this case the user and/or password should be swapped to the user's respective credentials.
![codesnip_em8](https://github.com/derekmedrano/employee-tracker/assets/42650709/dbd50ba3-0aae-4fe9-adba-577dd6ca62f8) 

Code block that generates the the Navigation menu. This is created with the Inquirer prompt object-method.
![codesnip_em1](https://github.com/derekmedrano/employee-tracker/assets/42650709/741f9047-ab53-4d7c-91a0-d1d5bcaef109)

Function that holds the query for viewing departments
![codesnip_em2](https://github.com/derekmedrano/employee-tracker/assets/42650709/6efa4ece-830a-477c-904c-6b3ef8022e40)

Function that holds the query for viewing roles
![codesnip_em3](https://github.com/derekmedrano/employee-tracker/assets/42650709/a919dca2-8d77-4a82-aa67-c50b6d6ab4f6)

Function that holds the query for viewing employees
![codesnip_emx](https://github.com/derekmedrano/employee-tracker/assets/42650709/36e411ff-13b1-4506-aeb4-0a47a2d1ab0a)

Function for adding a new department
![codesnip_em4](https://github.com/derekmedrano/employee-tracker/assets/42650709/9cfbb198-2ef9-48b4-bd34-e6d4b3013007)

Function for adding a new role 
![codesnip_em5](https://github.com/derekmedrano/employee-tracker/assets/42650709/64f8869d-08c8-4df4-930b-a4575417f59e)

Function for adding new employee. Users will be prompted for the new employees necessary info. Only the manager section can be NULL.
![codesnip_em6](https://github.com/derekmedrano/employee-tracker/assets/42650709/db677e8c-d351-4f7b-9c2d-8f732eb0ff85)

Function for updating an employee's new role.
![codesnip_em7](https://github.com/derekmedrano/employee-tracker/assets/42650709/8bfeaddf-834f-4386-86b2-0b9cdbc47150)






## License
MIT

Copyright (c) 2023 derekmedrano

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
Users and Devs can contribute via Github branching.

## Tests
N/A

## Questions
derekjmedrano@gmail.com
[Github](www.github.com/derekmedrano)
