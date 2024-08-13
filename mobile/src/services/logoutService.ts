import AsyncStorage from "@react-native-async-storage/async-storage"
import { STORE_TOKEN, STORE_USER } from "./loginService"

export async function logoutService() {
    try {
        await AsyncStorage.removeItem(STORE_USER)
        await AsyncStorage.removeItem(STORE_TOKEN)
    } catch(error) {
        console.log(error)
        return
    }
}