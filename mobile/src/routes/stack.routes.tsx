import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { ProdutosDetalhes } from "../screens/ProdutosDetalhes";
import { Carrinho } from "../screens/Carrinho";
import { Celulares } from "../screens/Celulares";
import { Notebooks } from "../screens/Notebooks";
import { Tablets } from "../screens/Tablets";
import { Cadastro } from "../screens/Cadastro";

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
                name="Cadastro"
                component={Cadastro}
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

            <Stack.Screen
                name="Celulares"
                component={Celulares}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
            />

            <Stack.Screen
                name="Notebooks"
                component={Notebooks}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
            />

            <Stack.Screen
                name="Tablets"
                component={Tablets}
                options={{
                    headerShown: true,
                    headerTitle: ''
                }}
            />


        </Stack.Navigator>
    )
}