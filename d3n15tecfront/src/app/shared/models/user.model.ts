export class User {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public password?: string,
        public cpf?: string,
        public dataNascimento?: Date,
        public telefoneCelular?: string,
        public role?: string
    ) {}

} 