import {
    BadRequestException, Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param, Post,
    Put
} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";
import {validate} from "class-validator";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";

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


}