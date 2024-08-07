import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { ProdutosDetalhes } from "../screens/ProdutosDetalhes";
import { Carrinho } from "../screens/Carrinho";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#00A6EB',
                headerStyle: {
                    backgroundColor: '#ffffff',
                    elevation: 0,
                    shadowOpacity: 0, 
                },
            }}
        >

            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="carrinho"
                component={Carrinho}
                options={{
                    headerShown: false,
                    headerTitle: 'Carrinho'
                }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="ProdutosDetalhes"
                component={ProdutosDetalhes}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
            />

        </Stack.Navigator>
    )
}