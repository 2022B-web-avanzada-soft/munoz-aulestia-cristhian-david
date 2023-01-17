"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Photographer_1 = require("./Entidades/Photographer");
var inquirer = require('inquirer');
var path_photographers = "./Sources/photographers.txt";
var arrayPhotographers = [];
var CRUD_file_js_1 = require("./CRUD_file.js");
//tsc main.ts --target es6
//Functions
function welcome() {
    console.log('\x1b[1m \x1b[31m Welcome to PholapSC \x1b[0m');
}
function goodBye() {
    console.log('\x1b[1m \x1b[32m Goodbye, see you next time! \x1b[0m');
}
//Preparation of Files
function readFiles() {
    return __awaiter(this, void 0, void 0, function () {
        var contenido, arrayPhotographersJSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, CRUD_file_js_1.leerArchivos)(path_photographers)];
                case 1:
                    contenido = _a.sent();
                    if (contenido != "") {
                        arrayPhotographersJSON = JSON.parse(contenido + "");
                        arrayPhotographers = arrayPhotographersJSON.map(getPhotographers);
                    }
                    else {
                        //nothing
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getPhotographers(item) {
    return new Photographer_1.Photographer(item.name, item.last_name, new Date(item.date_birth), item.id);
}
function writeFile() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(arrayPhotographers.length != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, CRUD_file_js_1.escribirArchivos)(path_photographers, JSON.stringify(arrayPhotographers))];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function inquirerMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.clear();
                    welcome();
                    //Una vez ejecutado recupero mis datos guardados en mi arreglo
                    return [4 /*yield*/, readFiles()];
                case 1:
                    //Una vez ejecutado recupero mis datos guardados en mi arreglo
                    _a.sent();
                    return [4 /*yield*/, inquirer
                            .prompt({
                            type: 'list',
                            name: 'action1',
                            message: 'What do you do?',
                            choices: ['Visualize portfolio', 'Know about Photographers', 'Are you new Photographer?', 'Edit profile', 'Close']
                        })
                            .then(function (answer) {
                            if (answer.action1 == 'Are you new Photographer?') {
                                console.clear();
                                createPhotographer();
                            }
                            else if (answer.action1 == 'Know about Photographers') {
                                console.clear();
                                showPhotographers();
                            }
                            else if (answer.action1 == 'Visualize portfolio') {
                                console.clear();
                                inquirerMenu();
                            }
                            else if (answer.action1 == 'Edit profile') {
                                console.clear();
                                editProfilePhotographer();
                            }
                            else if (answer.action1 == 'Close') {
                                console.clear();
                                goodBye();
                                //nothing
                            }
                        })];
                case 2:
                    answer = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createPhotographer() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, newPerson, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, inquirer
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
                                "default": '01-01-2000'
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'Which is your ID?',
                                "default": '17000000**'
                            }
                        ])];
                case 1:
                    respuesta = _a.sent();
                    newPerson = new Photographer_1.Photographer(respuesta.name, respuesta.last_name, new Date(respuesta.date_birth), respuesta.id);
                    arrayPhotographers.unshift(newPerson);
                    writeFile();
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.error(e_1);
                    return [3 /*break*/, 3];
                case 3:
                    setTimeout(function () { }, 3000);
                    return [4 /*yield*/, inquirerMenu()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function showPhotographers() {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readFiles()];
                case 1:
                    _a.sent();
                    console.log(arrayPhotographers);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function editProfilePhotographer() {
    return __awaiter(this, void 0, void 0, function () {
        var find_param_1, index_found, hol, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, inquirer
                            .prompt({
                            type: 'input',
                            name: 'id_search',
                            message: 'Write your ID: '
                        })];
                case 1:
                    find_param_1 = _a.sent();
                    index_found = arrayPhotographers.findIndex(function (the_most_search) { return the_most_search.id == find_param_1.id_search; });
                    console.log(arrayPhotographers[index_found].name.toString());
                    return [4 /*yield*/, editPhotographer(index_found)];
                case 2:
                    hol = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    console.error(e_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function editPhotographer(index_found) {
    return __awaiter(this, void 0, void 0, function () {
        var update_Info, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, inquirer
                            .prompt({
                            type: 'input',
                            name: 'name',
                            message: 'Name:',
                            "default": arrayPhotographers[index_found].name.toString()
                        }, {
                            type: 'input',
                            name: 'last_name',
                            message: 'Last Name:',
                            dafault: arrayPhotographers[index_found].last_name.toString()
                        }, {
                            type: 'input',
                            name: 'date_birth',
                            message: 'Date Birth',
                            "default": arrayPhotographers[index_found].date_birth.toString()
                        }, {
                            type: 'input',
                            name: 'id',
                            message: 'Which is your ID?',
                            "default": arrayPhotographers[index_found].id.toString()
                        })];
                case 1:
                    update_Info = _a.sent();
                    arrayPhotographers[index_found].name = update_Info.name;
                    arrayPhotographers[index_found].last_name = update_Info.last_name;
                    arrayPhotographers[index_found].date_birth = new Date(update_Info.date_birth);
                    arrayPhotographers[index_found].id = update_Info.id;
                    if (index_found >= 0) {
                        //console.clear();
                    }
                    else {
                        console.log("No existe algún registro similar");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    console.error(e_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
inquirerMenu();
