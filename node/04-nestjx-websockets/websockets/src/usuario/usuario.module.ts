import {Module} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports:[
      TypeOrmModule.forFeature(
          [UsuarioEntity], //Entidad en este modulo
      ),
    ],
    providers:[UsuarioService],
    exports:[UsuarioService],
    controllers:[UsuarioController]
})

export class UsuarioModule{

}