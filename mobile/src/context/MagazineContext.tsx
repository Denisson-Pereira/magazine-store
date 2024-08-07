import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_TOKEN, STORE_USER } from "../services/loginService";
import { IUser } from "../models/IUser";
import { MagazineType } from "../@types/MagazineProps";

const MagazineContext = createContext<MagazineType>({} as MagazineType)

type Props = {
    children?: React.ReactNode;
  };
export const MagazineProvider: React.FC<Props> = ({ children }) => {
    const [usuario, setUsuario] = useState<IUser>({} as IUser)
    const [token, setToken] = useState<string>('')

    useEffect(() => {
        async function loadUsuario() {
            const userData = await AsyncStorage.getItem(STORE_USER)
            const user: IUser = userData ? JSON.parse(userData) : undefined
            const storedToken = await AsyncStorage.getItem(STORE_TOKEN)

            if (user?.id && storedToken) {
                setUsuario(user)
                setToken(storedToken)
            }
        }
        loadUsuario()
    }, [])


    const dadosContext = { usuario, setUsuario, token, setToken }

    return (
        <MagazineContext.Provider value={dadosContext}>
            {children}
        </MagazineContext.Provider>
    )
}

export const useGlobalMagazineContext = () => {
    const MagazineShopContext = useContext(MagazineContext)
    return MagazineShopContext
}