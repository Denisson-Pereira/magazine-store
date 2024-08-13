import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProdutos } from "../models/IProdutos";
import { descontos } from "../helpers/descontos";

export interface CartItem extends IProdutos {
    cartId: string;
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addCart: (item: IProdutos) => void;
    removeCart: (cartId: string) => void;
    incrementQuantity: (cartId: string) => void;
    decrementQuantity: (cartId: string) => void;
    quantidadeCart: string;
    getTotalValue: () => number;
}

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [quantidadeCart, setQuantidadeCart] = useState<string>('')

    useEffect(() => {
        const loadCart = async () => {
            const storedCart = await AsyncStorage.getItem('@Cart');
            if (storedCart) {
                const parsedCart = JSON.parse(storedCart);
                setCart(parsedCart);
                setQuantidadeCart(parsedCart.length.toString());
            }
        }
        loadCart();
    }, []);

    const updateCartAndQuantity = async (updatedCart: CartItem[]) => {
        setCart(updatedCart);
        setQuantidadeCart(updatedCart.length.toString());
        await AsyncStorage.setItem('@Cart', JSON.stringify(updatedCart));
    };

    const addCart = async (item: IProdutos) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCart = cart.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            updateCartAndQuantity(updatedCart);
        } else {
            const newItem: CartItem = { ...item, cartId: Date.now().toString(), quantity: 1 };
            const updatedCart = [...cart, newItem];
            updateCartAndQuantity(updatedCart);
        }
    };

    const removeCart = async (cartId: string) => {
        const updatedCart = cart.filter(item => item.cartId !== cartId);
        updateCartAndQuantity(updatedCart);
    };

    const incrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem => 
            cartItem.cartId === cartId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    const decrementQuantity = async (cartId: string) => {
        const updatedCart = cart.map(cartItem => 
            cartItem.cartId === cartId && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
        updateCartAndQuantity(updatedCart);
    };

    const getTotalValue = () => {
        return cart.reduce((acc, item) => {
            const valorComDesconto = parseFloat(descontos(item.valor, 15));
            return acc + (valorComDesconto * item.quantity);
        }, 0);
    };
    
    
      

    return (
        <CartContext.Provider value={{ cart, addCart, quantidadeCart, removeCart, incrementQuantity, decrementQuantity, getTotalValue }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
