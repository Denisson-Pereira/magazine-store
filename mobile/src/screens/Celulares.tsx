import { ScrollView, StyleSheet, View } from 'react-native';
import { ProdutosCelulares } from '../components/ProdutosCelulares';

export const Celulares = () => {

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ProdutosCelulares />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
});