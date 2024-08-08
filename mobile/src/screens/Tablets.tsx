import { ScrollView, StyleSheet, View } from 'react-native';
import { ProdutosTablets } from '../components/ProdutosTablets';

export const Tablets = () => {

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <ProdutosTablets />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
    },
});