import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Alert, ImageBackground, Dimensions, StyleSheet, StatusBar } from "react-native";
import { useRef, useState } from "react";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { useGlobalMagazineContext } from "../context/MagazineContext";
import { loginService } from "../services/loginService";

export const Login = () => {

    const { setUsuario } = useGlobalMagazineContext();

    const login = useRef<string>('');
    const senha = useRef<string>('');

    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);

    async function handleLogin() {
        const result = await loginService(login.current, senha.current, setUsuario);
        if (!result?.status) {
            return Alert.alert('Erro', `${result?.msg}`);
        }
        if (result?.usuario) {
            setUsuario(result.usuario);
            return result;
        }
    }

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    }

    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../assets/bg_login.png')}
        >
            <StatusBar hidden={true} />
            <KeyboardAvoidingView style={styles.text}>
                <View style={styles.view}>
                    <View style={styles.viewLogin}>
                        <FontAwesome5 name='user-alt' size={15} color={'#00A6EB'} />
                        <TextInput
                            keyboardType="email-address"
                            style={styles.input}
                            placeholder="Login"
                            placeholderTextColor="#DBDBDB"
                            onChangeText={(text) => login.current = text}
                        />
                    </View>
                    <View style={styles.viewLogin}>
                        <TouchableOpacity onPress={mostrarSenha} style={styles.touch}>
                            <Entypo name={senhaVisivel ? 'eye' : 'eye-with-line'} size={15} color={'#00A6EB'} />
                        </TouchableOpacity>
                        <TextInput
                            keyboardType="visible-password"
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#DBDBDB"
                            onChangeText={(text) => senha.current = text}
                            secureTextEntry={!senhaVisivel}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.esqueceu}
                    >
                        <Text style={styles.textEsqueceu}>Esqueceu a sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.botao}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safe: {
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    image: {
        objectFit: 'contain',
        width: 200,
        height: 100,
    },
    view: {
        gap: 20,
        alignItems: 'center'
    },
    input: {
        width: 280,
        height: 40,
        color: '#DBDBDB',
        paddingHorizontal: 10,
    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E9E9E9',
        padding: 10
    },
    touch: {
        padding: 0,
        margin: 0
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#00A6EB',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    textButton: {
        color: 'white',
        fontSize: 20
    },
    esqueceu: {
        marginLeft: 180
    },
    textEsqueceu: {
        fontSize: 12,
        textDecorationLine: "underline",
        color: '#DBDBDB'
    }
})