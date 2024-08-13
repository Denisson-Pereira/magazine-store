import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { logoutService } from '../services/logoutService';
import { useGlobalMagazineContext } from '../context/MagazineContext';
import { IUser } from '../models/IUser';
import { useNavigate } from '../hooks/useNavigate';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export const Conta = () => {
    const { usuario, setUsuario } = useGlobalMagazineContext();
    const { navigate } = useNavigate();

    const handleSair = async () => {
        await logoutService();
        setUsuario({} as IUser);
        navigate("Login");
    }

    return (
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {usuario && (
                    <>
                        <View style={styles.profileSection}>
                            <Image source={{ uri: usuario.foto }} style={styles.avatar} />
                            <Text style={styles.name}>{usuario.nome} {usuario.sobrenome}</Text>
                            <Text style={styles.email}>{usuario.email}</Text>
                        </View>
                        <View style={styles.infoSection}>
                            <View style={styles.infoItem}>
                                <MaterialIcons name="phone" size={24} color="#1e90ff" />
                                <Text style={styles.infoText}>{usuario.telefone}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <MaterialIcons name="location-on" size={24} color="#ff6347" />
                                <Text style={styles.infoText}>{usuario.endereco}, {usuario.cidade}, {usuario.estado}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <MaterialIcons name="person" size={24} color="#32cd32" />
                                <Text style={styles.infoText}>{usuario.login}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <MaterialIcons name="access-time" size={24} color="#ffa500" />
                                <Text style={styles.infoText}>Conta criada em: {new Date(usuario.created_at).toLocaleDateString()}</Text>
                            </View>
                        </View>
                        <View style={styles.actionsSection}>
                            <TouchableOpacity style={styles.actionItem} onPress={() => navigate("carrinho")}>
                                <MaterialIcons name="shopping-cart" size={24} color="#ff1493" />
                                <Text style={styles.actionText}>Meus Pedidos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionItem} onPress={() => navigate("TrocasCancelamentos")}>
                                <Entypo name="cycle" size={24} color="#32cd32" />
                                <Text style={styles.actionText}>Trocas e Cancelamentos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionItem} onPress={() => navigate("home")}>
                                <FontAwesome name="history" size={24} color="#1e90ff" />
                                <Text style={styles.actionText}>Últimos Produtos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionItem} onPress={() => navigate("FaleComAtendente")}>
                                <MaterialIcons name="support-agent" size={24} color="#ffa500" />
                                <Text style={styles.actionText}>Fale com Atendente</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                <TouchableOpacity style={styles.logoutButton} onPress={handleSair}>
                    <MaterialIcons name="logout" size={24} color="#fff" />
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 18,
        color: '#888',
        marginBottom: 10,
    },
    infoSection: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
    },
    actionsSection: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    actionText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#ff6347',
        borderRadius: 5,
        marginTop: 10,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default Conta;
