import { ScrollView, StyleSheet, View } from 'react-native';
import { Localizacao } from '../components/Localizacao';
import SlideShow from '../components/SlideShow';
import { Marcas } from '../components/Marcas';
import { Cabecario } from '../components/Cabecario';
import { Produtos } from '../components/Produtos';

export const Home = () => {

    return (
        <View style={styles.container}>
            <Cabecario />
            <Localizacao />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SlideShow />
                <Marcas />
                <Produtos />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
});