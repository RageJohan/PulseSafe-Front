import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "../assets/icon6.png";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Contenido superior (logo y texto) */}
            <View style={styles.topContent}>
                <Image source={Icon} style={styles.image} />
                <Text style={styles.textPulse}>Pulse</Text>
                <Text style={styles.textSafe}>Safe</Text>
            </View>

            {/* Botones en la parte inferior */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.registerButton]}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    topContent: {
        flex: 1, // Ocupa el espacio disponible
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    textPulse: {
        fontSize: 32, // Tamaño de fuente para "Pulse"
        fontWeight: 'bold', // Texto en negrita
        color: '#FF4E4E', // Color del texto
        paddingLeft: 10,
    },
    textSafe: {
        fontSize: 32, // Tamaño de fuente para "Safe"
        fontWeight: 'bold', // Texto en negrita
        color: '#FF4E4E', // Color del texto
        paddingLeft: 10,
    },
    buttonContainer: {
        width: '100%', // Ancho completo
        paddingHorizontal: 20, // Espacio a los lados
        paddingBottom: 30, // Espacio en la parte inferior
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15, // Espacio entre los botones
    },
    loginButton: {
        backgroundColor: '#F22121', // Color de fondo del botón de Iniciar Sesión
    },
    loginButtonText: {
        color: '#F6E6E6', // Color del texto del botón de Iniciar Sesión
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#DADFF2', // Color de fondo del botón de Registrarse
    },
    registerButtonText: {
        color: '#FF2622', // Color del texto del botón de Registrarse
        fontSize: 18,
        fontWeight: 'bold',
    },
});