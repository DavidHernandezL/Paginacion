const { readPaginacionData } = require('./inquirer.js');

(async () => {
    const data = await readPaginacionData();

    console.log(data);
})()