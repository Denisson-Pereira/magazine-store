import { IUserCadastro } from "../models/IUserCadastro";
import { connectionService } from "./connectionService";

export async function cadastroService(usuario: IUserCadastro): Promise<void> {
    try {
        const response = await connectionService.post('user/cadastro', usuario)
        console.log('Usuario cadastrado com sucesso!', response.data)
    } catch (error) {
        console.error('Erro ao cadastrar usuário: ', error)
    }
}