class Person {
    public name: string;
    public last_name: string;
    public date_birth: Date;
    private age: number;


    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.name = nombreParametro;
        this.last_name = apellidoParametro;
    }

}


//----------------------------------------------------------------------

class Photographer extends Person{
    constructor(
        nombreParametro:string, //Parametros del cosntructor
        apellidoParametro: string, //Parametros del constructor
        public cedula: string, //Modificador acceso-> Propíedad de la clase
        public estadocivil: string, //Mofificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadocivil;
    }
}
const adrian = new Photographer(
    'Adrian',
    'Eguez',
    '1727425900',
    'soltero'
);

adrian.cedula; //1727425900
adrian.estadocivil; // 'soltero'