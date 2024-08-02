const inquirer = require('inquirer');
const jest = require('jest');

inquirer
    .prompt ([
        {
            message: 'Please choose a text color.',
            name: 'textColor',
        },
        {
            message: 'Please choose a background color.',
            name: 'bgColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape.',
            name: 'shape',
            choices: ['triangle', 'circle', 'square'],
        }
        
    ])
    .then((response) => {
        console.log(response);
        
    }
);
