import { StyleSheet, Text, View } from 'react-native';
import { useGlobalMagazineContext } from '../context/MagazineContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { maiusculas } from '../helpers/maiusculas';

export const Localizacao = () => {
    const { usuario } = useGlobalMagazineContext()
    const nome = maiusculas(usuario.nome)
  return (
    <View style={styles.container}>
        <FontAwesome5 name='map-marker-alt' size={20} />
        <Text>Enviar para {nome} - {usuario.cidade} / {usuario.estado
        }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#47baeb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 32,
    gap: 10
  }
});
