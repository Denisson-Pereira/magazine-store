import axios from "axios"
import { BASE_URL } from "./connectionService"

export const marcasService = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/marcas/itens`)
        return response.data
    } catch (error) {
        console.log('Error ao consultar dados:', error)
        throw error
    }
}