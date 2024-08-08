import { IUser } from "../model/IUser"

export type MagazineType = {
    usuario: IUser;
    token: string;
    setUsuario: (usuario: IUser) => void;
    setToken: (token: string) => void;
};