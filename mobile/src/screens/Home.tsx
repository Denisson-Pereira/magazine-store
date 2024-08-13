import { ScrollView, StyleSheet, View } from 'react-native';
import { Localizacao } from '../components/Localizacao';
import SlideShow from '../components/SlideShow';
import { Marcas } from '../components/Marcas';
import { Cabecario } from '../archive/Cabecario';
import { ProdutosCelulares } from '../components/ProdutosCelulares';
import { ProdutosNotebooks } from '../components/ProdutosNotebooks';
import { ProdutosTablets } from '../components/ProdutosTablets';

export const Home = () => {

    return (
        <View style={styles.container}>
            <Localizacao />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SlideShow />
                <Marcas />
                <ProdutosCelulares />
                <ProdutosNotebooks />
                <ProdutosTablets />
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