const inquirer = require('inquirer');

const readPaginacionData = async () => {

    const questions = [
        {
            type: 'input',
            name: 'sizePage',
            message: 'Ingresa el tamaño de pagina (en kilobytes): ',
            validate( value ) {
                if( value.length == 0){
                    return 'Error: Este dato es obligatorio';
                }
                if(isNaN(value) || parseInt(value) <= 0) {
                    return 'Error: El valor debe ser un número mayor a 0';
                }
                return true;
            }  
        },
        {
            type: 'input',
            name: 'sizeMemoryVirtual',
            message: 'Ingresa el tamaño memoria virtual (en kilobytes): ',
            validate( value ) {
                if( value.length == 0){
                    return 'Error: Este dato es obligatorio';
                }
                if(isNaN(value) || parseInt(value) <= 0) {
                    return 'Error: El valor debe ser un número mayor a 0';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'sizeMemoryPhysical',
            message: 'Ingresa el tamaño memoria física (en kilobytes): ',
            validate( value ) {
                if( value.length == 0){
                    return 'Error: Este dato es obligatorio';
                }
                if(isNaN(value) || parseInt(value) <= 0) {
                    return 'Error: El valor debe ser un número mayor a 0';
                }
                return true;
            }
        }
    ];

    let data;

    data = await inquirer.prompt(questions);

    do {
        if(data.sizeMemoryPhysical >= data.sizeMemoryVirtual){
            console.log(">>> Error: La memoria virtual debe ser mayor a la memoria fisica");
            const result = await inquirer.prompt(questions.slice(1));
            data.sizeMemoryPhysical = result.sizeMemoryPhysical;
            data.sizeMemoryVirtual = result.sizeMemoryVirtual;
        }
    }while(data.sizeMemoryPhysical >= data.sizeMemoryVirtual)
    return data;
}


module.exports = {
    readPaginacionData
}