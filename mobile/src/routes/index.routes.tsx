import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useGlobalMagazineContext } from "../context/MagazineContext";
import { TabRoutes } from "./tab.routes";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";

const Stack = createStackNavigator();

export default function Routes() {
    const { usuario } = useGlobalMagazineContext();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {usuario?.id ? (
                    <>
                        <Stack.Screen name="home" component={TabRoutes} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Cadastro" component={Cadastro} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
