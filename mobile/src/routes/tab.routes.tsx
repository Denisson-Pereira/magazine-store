import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import StackRoutes from './stack.routes';
import { Categorias } from '../screens/Categorias';
import { Favoritos } from '../screens/Favoritos';
import { Conta } from '../screens/Conta';
import { Carrinho } from '../screens/Carrinho';
import { useCart } from '../context/CartContext';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    const { quantidadeCart } = useCart()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#00A6EB',
                },
                headerTintColor: '#fff',
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                    backgroundColor: '#ffffff',
                },
                tabBarActiveTintColor: '#00A6EB',
            }}
        >
            <Tab.Screen
                name='Magazine'
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
                component={Carrinho}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.iconContainer}>
                            <FontAwesome name='shopping-cart' color={color} size={size} />
                            {parseInt(quantidadeCart) == 0 ? <></> : <View style={styles.badgeContainer}>
                                <Text style={styles.badgeText}>{quantidadeCart}</Text>
                            </View>}
                        </View>
                    ),
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
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: 'relative',
    },
    badgeContainer: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#1dc525',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
