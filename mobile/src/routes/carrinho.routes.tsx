import { createStackNavigator } from "@react-navigation/stack"
import { Carrinho } from "../screens/Carrinho";

const Stack = createStackNavigator();

export default function CarrinhoRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#00A6EB' },

            }}
        >

            <Stack.Screen
                name="carrinho"
                component={Carrinho}
                options={{
                    headerShown: true,
                    headerTitle: 'Carrinho'
                }}
            />

        </Stack.Navigator>
    )
}