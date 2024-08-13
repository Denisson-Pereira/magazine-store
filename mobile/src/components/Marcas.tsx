import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { IMarcas } from '../models/IMarcas';
import { marcasService } from '../services/marcasService';

export const Marcas = () => {
    const [dados, setDados] = useState<IMarcas[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await marcasService();
                setDados(response);
            } catch (error) {
                console.log('Erro ao consultar dados: ', error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: IMarcas }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} resizeMode="contain" />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.tituloCelulares}>
                <Text style={styles.textoTituloSecao}>Tem no Magazine Store</Text>
            </View>
            <FlatList
                data={dados}
                keyExtractor={item => item.nome}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: '#e9d5eb',
        borderRadius: 100,
    },
    imagem: {
        width: 30,
        height: 30,
    },
    tituloCelulares: {
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingTop: 10,
    },
    textoTituloSecao: {
        color: '#666666',
        fontWeight: '700',
        fontSize: 18,
    },
});
