export interface AtualizaRequest {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  cpf?: string;
  dataNascimento?: Date;
  telefoneCelular?: string;
  role?: string;
}
