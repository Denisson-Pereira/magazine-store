import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { logoutService } from '../services/logoutService';
import { useGlobalMagazineContext } from '../context/MagazineContext';
import { IUser } from '../models/IUser'
import { useNavigate } from '../hooks/useNavigate';

export const Categorias = () => {
    const { setUsuario } = useGlobalMagazineContext()
    const { navigate } = useNavigate()

    const handleSair = async () => {
        await logoutService()
        setUsuario({} as IUser)
        navigate("login")
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSair}>
            <Text>Sair</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
