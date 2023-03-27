export class LoginUsuario {
    NombreUsuario: string;
    password: string;

    constructor(NombreUsuario: string, password:string){
        this.NombreUsuario = NombreUsuario;
        this.password = password;
    }
}
