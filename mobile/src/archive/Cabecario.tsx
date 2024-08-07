import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export const Cabecario = () => {

    const { quantidadeCart } = useCart()

    return (
        <View style={styles.cabecario}>
            <View style={styles.pesquisa}>
                <Feather name='search' size={20} color={'#a3a0a0'} />
                <TextInput
                    keyboardType="name-phone-pad"
                    style={styles.search}
                    placeholder="Busca no Magazine Shop"
                    placeholderTextColor="#a3a0a0"
                />
            </View>
            <View style={styles.carrinho}>
                <FontAwesome name='shopping-bag' color={'#ffffff'} size={30} />
                {parseInt(quantidadeCart) == 0 ? <></> : 
                <View style={styles.textCarrinho}>
                    <Text style={{ color: 'white' }}>{quantidadeCart}</Text>
                </View>
                }
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cabecario: {
        backgroundColor: '#00A6EB',
        height: 110,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    pesquisa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 45,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        width: '70%',
        height: 35,
        paddingHorizontal: 10,
    },
    carrinho: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 15,
        position: 'relative',
    },
    search: {
        width: '80%',
    },
    textCarrinho: {
        backgroundColor: '#d11b1b',
        justifyContent: 'center',
        alignItems: 'center',
        width: 22,
        height: 22,
        borderRadius: 11,
        position: 'absolute',
        top: 5,
        right: 0,
        zIndex: 10,
    },
});
