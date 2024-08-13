import AsyncStorage from "@react-native-async-storage/async-storage";
import { connectionService } from "./connectionService";
import { IUser } from "../models/IUser";

export const STORE_USER = '@Magazine:user';
export const STORE_TOKEN = '@Magazine:token';

export async function loginService(login: string, senha: string, setUsuario: (usuario: IUser) => void) {
    try {
        const { data } = await connectionService.post('/login', {
            login: login,
            senha: senha
        });
        if (!data.usuario) {
            return { status: false, msg: 'Usuário não encontrado.' }
        } else {
            await AsyncStorage.setItem(STORE_USER, JSON.stringify(data.usuario));
            await AsyncStorage.setItem(STORE_TOKEN, data.token);
            setUsuario(data.usuario);
            return { status: true, usuario: data.usuario };
        }
    } catch (error) {
        console.log(error)
        return {status: false, msg: 'Erro ao conectar com o servidor.'}
    }
}