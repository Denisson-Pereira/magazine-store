import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";
import { useGlobalMagazineContext } from "../context/MagazineContext";
import { Login } from "../screens/Login";

export default function Routes() {

    const { usuario } = useGlobalMagazineContext()

    return (
        <NavigationContainer>
            {usuario?.id ? <TabRoutes /> : <Login />}
        </NavigationContainer>
    )
}