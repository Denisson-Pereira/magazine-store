import { STORE_TOKEN, STORE_USER } from "./loginService"

export async function logoutService() {
    try {
        await localStorage.removeItem(STORE_USER)
        await localStorage.removeItem(STORE_TOKEN)
    } catch(error) {
        console.log(error)
        return
    }
}