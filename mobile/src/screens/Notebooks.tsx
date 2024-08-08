import { ScrollView, StyleSheet, View } from 'react-native';
import { ProdutosNotebooks } from '../components/ProdutosNotebooks';

export const Notebooks = () => {

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ProdutosNotebooks />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
});