import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Alert, ImageBackground, Dimensions, StyleSheet, StatusBar, ScrollView, Platform } from "react-native";
import { useState } from "react";
import { AntDesign, Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useGlobalMagazineContext } from "../context/MagazineContext";
import { cadastroService } from "../services/cadastroService";
import { useNavigate } from "../hooks/useNavigate";
import { IUserCadastro } from "../models/IUserCadastro";

export const Cadastro = () => {
    const { navigate } = useNavigate();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    async function handleCadastro() {
        if (!login || !senha) {
            Alert.alert("Campos de login e senha são obrigatórios!");
            return;
        }

        const usuarioCadastro: IUserCadastro = {
            nome,
            sobrenome,
            login,
            email,
            senha,
            telefone,
            endereco,
            cidade,
            estado,
        };

        try {
            const response = await cadastroService(usuarioCadastro);
            Alert.alert("Usuário cadastrado com sucesso!");
            navigate("Login");
        } catch (error) {
            console.log("Erro ao cadastrar usuário:", error);
        }
    }

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };

    return (
        <ImageBackground
            style={[styles.safe, { overflow: "hidden" }]}
            source={require("../assets/bg_cadastro.png")}
        >
            <TouchableOpacity onPress={() => navigate("Login")} style={styles.botaoBack}>
                <AntDesign name="back" color={"white"} size={30} />
            </TouchableOpacity>
            <StatusBar hidden={true} />
            <KeyboardAvoidingView style={styles.text} behavior="padding"
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
                <ScrollView style={styles.view}>
                    <View style={styles.viewCadastro}>
                        <View style={styles.viewLogin}>
                            <Ionicons name="person-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Nome"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setNome}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <Ionicons name="person-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Sobrenome"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setSobrenome}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <MaterialCommunityIcons name="account" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Login"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setLogin}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <MaterialCommunityIcons name="email-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="email-address"
                                style={styles.input}
                                placeholder="E-mail"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <TouchableOpacity onPress={mostrarSenha} style={styles.touch}>
                                <Entypo
                                    name={senhaVisivel ? "eye" : "eye-with-line"}
                                    size={15}
                                    color={"#00A6EB"}
                                />
                            </TouchableOpacity>
                            <TextInput
                                keyboardType="visible-password"
                                style={styles.input}
                                placeholder="Senha"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setSenha}
                                secureTextEntry={!senhaVisivel}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <Ionicons name="call-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="phone-pad"
                                style={styles.input}
                                placeholder="Telefone"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setTelefone}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <MaterialCommunityIcons name="home-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Endereço"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setEndereco}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <MaterialCommunityIcons name="city" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Cidade"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setCidade}
                            />
                        </View>
                        <View style={styles.viewLogin}>
                            <MaterialCommunityIcons name="map-marker-outline" size={15} color={"#00A6EB"} />
                            <TextInput
                                keyboardType="default"
                                style={styles.input}
                                placeholder="Estado"
                                placeholderTextColor="#DBDBDB"
                                onChangeText={setEstado}
                            />
                        </View>
                        <TouchableOpacity onPress={handleCadastro} style={styles.botao}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
    },
    botaoBack: {
        marginTop: 70,
        justifyContent: "flex-start",
    },
    safe: {
        height: Dimensions.get("window").height,
        gap: 20,
    },
    view: {
        gap: 20,
    },
    viewCadastro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    input: {
        width: 280,
        height: 40,
        color: "#DBDBDB",
        paddingHorizontal: 10,
    },
    viewLogin: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#E9E9E9",
        padding: 10,
    },
    touch: {
        padding: 0,
        margin: 0,
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#00A6EB",
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
    textButton: {
        color: "white",
        fontSize: 20,
    },
});
