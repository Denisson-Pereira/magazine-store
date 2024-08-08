import axios from "axios"
import { BASE_URL } from "./connectionService"

export const produtosIDService = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/produtos/itens/${id}`)
        return response.data
    } catch (error) {
        console.log('Erro ao consultar dados: ', error)
        throw error
    }
}