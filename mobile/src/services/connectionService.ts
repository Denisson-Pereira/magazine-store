
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const BASE_URL = "http://10.0.0.206:8080";


export const connectionService = axios.create({
    baseURL: BASE_URL
});

export const setAuthToken = () => {
    const token = AsyncStorage.getItem('@Magazine:token');
    if (token) {
        connectionService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete connectionService.defaults.headers.common['Authorization'];
    }
};