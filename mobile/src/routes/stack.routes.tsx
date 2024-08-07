import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Carrinho } from "../screens/Carrinho";
import { ProdutosDetalhes } from "../screens/ProdutosDetalhes";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#00A6EB' },

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
                    headerShown: true,
                    headerTitle: 'Carrinho'
                }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="ProdutosDetalhes"
                component={ProdutosDetalhes}
                options={{
                    headerShown: true,
                    headerTitle: 'Celulares'
                }}
            />

        </Stack.Navigator>
    )
}