import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('epn_usuario') //nombre de la tabla en DB
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ //columna en la DB
        name: 'user_nombres', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 60, //longitud campo DB
        nullable: false, //si es mullable
    })
    nombres: string; //nombre campo

    //Columna en la DB
    @Column({
        name: 'user_rol', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 1, //longitud
        nullable: false, //Si es nullable
        default: 'U', //valor por defecto
        //comnetario en la DB
        comment: 'U= usuario; A= administrador;'
    })
    rol:string;



}