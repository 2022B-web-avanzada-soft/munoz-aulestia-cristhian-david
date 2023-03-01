import {
    BadRequestException, Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param, Post,
    Put, Query
} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";
import {validate} from "class-validator";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {UsuarioEntity} from "./usuario.entity";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
//@Controller('usuario/asj/')
//http://localhost:3000/usuario/asj

@Controller('usuario')
//http://localhost:3000/usuario/
export class UsuarioController{
    constructor(
        private readonly usuarioService:UsuarioService
    ) {
    }

    @Get("/:id")//GET/usuario/1
    @HttpCode(200)
    findOneById(
        //paramsteros de rutas
        @Param() params //{id:1, idNota:12}
    ){
        throw new BadRequestException('No found')
        //throw new UnauthorizedException()
        return this.usuarioService.findOneById(+params.id); //+"1"=1
    }

    @Delete ("/:id")//DELETE/usuario/:id
    @HttpCode(200)
    delete(
        @Param() params //{id:1, idNota:12}
    ){
        return this.usuarioService.findOneById(+params.id); //+"1"=1
    }

    @Put("/:id") //PUT/usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, //{id:1}
        @Body() bodyParams //{nombre:''....}
    ){
        const nuevoRegistro = new UsuarioUpdateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.apellidos = bodyParams.apellidos;
        nuevoRegistro.rol = bodyParams.rol;
        const arregloErrores = await validate(
            nuevoRegistro
        );
        if (arregloErrores.length > 0){
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje:'Envio mal datos'
            });
        }
        return this.usuarioService.update(
            bodyParams,
            +params.id
        );
    }

    @Post("/:id") //PUT/usuario/:id
    @HttpCode(201)
    async create(
        @Body() bodyParams //{nombre:''....}
    ){
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.nombres = bodyParams.nombres;
        nuevoRegistro.apellidos = bodyParams.apellidos;
        nuevoRegistro.rol = bodyParams.rol;
        const arregloErrores = await validate(
            nuevoRegistro
        );
        if (arregloErrores.length > 0){
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje:'Envio mal datos'
            });
        }
        return this.usuarioService.create(nuevoRegistro);
    }

    @Get("/")//Get /usuario/
    @HttpCode (200)
    find(
        @Query() queryParams
    ){
        const consulta: FindManyOptions<UsuarioEntity>={

            skip: queryParams.skip ? +queryParams.skip : 0,
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<UsuarioEntity>[]

        if(queryParams.nombres){
            consultaWhere.push({
                nombres: Like('%' + queryParams.nombres + '%'),
                rol: queryParams.rol ? queryParams.rol : undefined,
            })
        }
        /*
        if(queryParams.apellidos){
            consultaWhere.push({
                apellidos: Like('%' + queryParams.apellidos + '%'),
                rol: queryParams.rol ? queryParams.rol : undefined,
            })
        }
        */

        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        return this.usuarioService.find(consulta);
    }


}