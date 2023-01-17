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
    console.log('\x1b[1m \x1b[32m Goodbye, see you next time! \x1b[0m')
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
    //Una vez ejecutado recupero mis datos guardados en mi arreglo
    await readFiles();

    //Declaro algunos objetos antes
    /*
    var person1 = new Photographer("David", "Rosero",new Date('01-01-2000'),'01');
    var person2 = new Photographer("Santiago", "Roman",new Date('01-01-2000'),'02');
    arrayPhotographers.push(person1,person2);

     */

    const answer = await inquirer
        .prompt(
                    {
                        type: 'list',
                        name: 'action1',
                        message: 'What do you do?',
                        choices: ['Visualize portfolio', 'Know about Photographers', 'Are you new Photographer?', 'Edit profile', 'Close']
                    }
                )
        .then((answer) => {
                                if (answer.action1 == 'Are you new Photographer?'){
                                    console.clear();
                                    createPhotographer();


                                } else if(answer.action1 == 'Know about Photographers'){
                                    console.clear();
                                    showPhotographers();

                                } else if(answer.action1 == 'Visualize portfolio'){
                                    console.clear();

                                    inquirerMenu();
                                } else if(answer.action1 == 'Edit profile'){
                                    console.clear();
                                    editProfilePhotographer();

                                }else if(answer.action1 == 'Close'){
                                    console.clear();
                                    goodBye();
                                    //nothing
                                }
                            });
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
    await inquirerMenu();
}


async function showPhotographers(){
    try{
        await readFiles();
        console.log(arrayPhotographers);
    } catch (e){
        console.error(e);
    }

}

async function editProfilePhotographer(){
    try{
        const find_param = await inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'id_search',
                    message: 'Write your ID: '
                }
            );
        //await readFiles();

        let index_found = arrayPhotographers.findIndex(the_most_search => the_most_search.id == find_param.id_search);
        console.log(index_found);

        const hol = await editPhotographer(index_found);


    } catch (e){
        console.error(e);
    }
    //await inquirerMenu();
}

async function editPhotographer(index_found){
    try{

        const update_Info = await inquirer
            .prompt(
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name:',
                    default: arrayPhotographers[index_found].name.toString(),
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Last Name:',
                    dafault: arrayPhotographers[index_found].last_name.toString(),
                },
                {
                    type: 'input',
                    name: 'date_birth',
                    message: 'Date Birth',
                    default: arrayPhotographers[index_found].date_birth.toString(),
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Which is your ID?',
                    default: arrayPhotographers[index_found].id.toString(),
                }
            );

        arrayPhotographers[index_found].name = update_Info.name;
        arrayPhotographers[index_found].last_name = update_Info.last_name;
        arrayPhotographers[index_found].date_birth = new Date(update_Info.date_birth);
        arrayPhotographers[index_found].id = update_Info.id;

        if (index_found >= 0){
            //console.clear();

        }else{
            console.log("No existe algún registro similar");
        }
    } catch (e){
        console.error(e);
    }
}

inquirerMenu();

