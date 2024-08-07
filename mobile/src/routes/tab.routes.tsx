import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Categorias } from '../screens/Categorias';
import { Favoritos } from '../screens/Favoritos';
import { Conta } from '../screens/Conta';
import CarrinhoRoutes from './carrinho.routes';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                },
                tabBarActiveTintColor: '#00A6EB',
            }}
        >
            <Tab.Screen
                name='Início'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Categorias'
                component={Categorias}
                options={{
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name='list' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Favoritos'
                component={Favoritos}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Carrinho'
                component={CarrinhoRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='shopping-cart' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Conta'
                component={Conta}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name='user-alt' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}