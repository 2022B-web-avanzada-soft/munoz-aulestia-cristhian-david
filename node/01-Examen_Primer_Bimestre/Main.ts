import {Photographer} from "./Entidades/Photographer";

const inquirer = require ('inquirer');
const path_photographers = "./Sources/photographers.txt";
let arrayPhotographers: Array<Photographer> = [];

import {escribirArchivos, leerArchivos} from "./CRUD_file.js";
import {read} from "fs";

//tsc main.ts --target es6


//Functions
function welcome(){
    console.log('\x1b[1m \x1b[31m Welcome to PholapSC \x1b[0m')
}
function goodBye(){
    console.clear()
    console.log('\x1b[1m \x1b[32m Goodbye, see you next time! \x1b[0m')
}
function toPause(){
    const answer = inquirer.prompt(
        [
            {
                type: 'list',
                name: 'enter',
                message: 'Press ENTER to continue.',
                choices: ['Come back 😄', '¡Exit! 😭']
            }
        ]
    ).then((answer)=>{
            if (answer.enter == 'Come back 😄'){
                inquirerMenu();
            }else{
                //nothing
                goodBye();
            }

        }
    )
}



//Preparation of Files
async function readFiles(){
    const contenido = await leerArchivos(path_photographers);
    if (contenido != ""){
        const arrayPhotographersJSON = JSON.parse(contenido+"");
        arrayPhotographers = arrayPhotographersJSON.map(getPhotographers);
    } else {
        //nothing
    }

}
function getPhotographers(item) {
    return new Photographer(item.name,item.last_name,new Date(item.date_birth),item.id);
}

async function writeFile(){
    //Write all my data
    if (arrayPhotographers.length != 0){
        await escribirArchivos(path_photographers,JSON.stringify(arrayPhotographers));
    }
}

async function inquirerMenu(){
    console.clear();
    welcome();
    let comprobador:number=0;

    //Una vez ejecutado recupero mis datos guardados en mi arreglo
    await readFiles();

    const answer = await inquirer
        .prompt(
            {
                type: 'list',
                name: 'action1',
                message: 'What do you do?',
                choices: ['Visualize portfolio', 'Know about Photographers', 'Are you new Photographer?', 'Edit profile' , 'Delete profile', 'Close']
            }
        )
        .then((answer) => {
            console.clear();
            if (answer.action1 == 'Are you new Photographer?'){
                createPhotographer();

            } else if(answer.action1 == 'Know about Photographers'){
                showPhotographers();
                setTimeout(()=>{},3000);
                console.clear();

            } else if(answer.action1 == 'Visualize portfolio'){

            } else if(answer.action1 == 'Edit profile'){
                searchPhotographerbyID('edit');

            }else if(answer.action1 == 'Delete profile'){
                searchPhotographerbyID('delete');

            }else if(answer.action1 == 'Close'){
                comprobador=-1;
                goodBye();

            }
        });
    setTimeout(()=>{},3000);

}


async function createPhotographer(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'What is your last_name?'
                },
                {
                    type: 'input',
                    name: 'date_birth',
                    message: 'Which is your date birth?',
                    default: '01-01-2000'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Which is your ID?',
                    default: '17000000**'
                }

            ]);
        //console.log(respuesta);

        //Create new Photographer
        var newPerson = new Photographer(respuesta.name,respuesta.last_name,new Date(respuesta.date_birth),respuesta.id);
        arrayPhotographers.unshift(newPerson);
        writeFile();

        //Se puede escribir 1 objeto pero hace falta tomar en cuenta al arreglo
        //await writeFiles(newPerson);

        //Vuelvo a invocar inquirerMenu()
        //await inquirerMenu();

    } catch (e){
        console.error(e);
    }
    setTimeout(()=>{},3000);
    await toPause();
}


async function showPhotographers(){
    try{
        await readFiles();
        console.log(arrayPhotographers);
        //setTimeout(()=>{},5000);
    } catch (e){
        console.error(e);
    }
    setTimeout(()=>{},5000);
}

async function searchPhotographerbyID(action:String){
    try{
        const find_param = await inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'id_search',
                    message: 'Write your ID: '
                }
            );
        await readFiles();
        let index_found:number = arrayPhotographers.findIndex(the_most_search => the_most_search.id == find_param.id_search);
        //console.log(index_found);

        if (index_found >=0 ){
                                if(action=='edit'){
                                    await editPhotographer(index_found);
                                } else if(action=='delete'){
                                    await deletePhotographer(index_found);
                                }
        }else{
            console.log('Photographer does not Found')
        }
    } catch (e){
        console.error(e);
    }

}

async function editPhotographer(index_found:number){
    try{
        const update_Info = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name:',
                    default: arrayPhotographers[index_found].name,
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Last Name:',
                    default: arrayPhotographers[index_found].last_name,
                },
                {
                    type: 'input',
                    name: 'date_birth',
                    message: 'Date Birth',
                    default: '01-01-2000',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Which is your ID?',
                    default: arrayPhotographers[index_found].id.toString(),
                }
            ]);

        arrayPhotographers[index_found].name = update_Info.name;
        arrayPhotographers[index_found].last_name = update_Info.last_name;
        arrayPhotographers[index_found].date_birth = new Date(update_Info.date_birth);
        arrayPhotographers[index_found].id = update_Info.id;
        await writeFile();
    } catch (e){
        console.error(e);
    }
    setTimeout(()=>{},3000);
}
async function deletePhotographer(id:number){
    try{
        await readFiles();
        //Use .splice to identify the value to delete into array
        //and indicate only an element of array with '1'
        arrayPhotographers.splice(id,1);
        await writeFile();
        //setTimeout(()=>{},2000);

    } catch (e){
        console.error(e);
    }
    setTimeout(()=>{},3000);
}


inquirerMenu();