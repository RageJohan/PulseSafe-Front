import { Image, StyleSheet,View, Text } from "react-native"
import Icon from "../assets/icon6.png";

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Image source={Icon}  style={styles.image} />
                <Text style={styles.textPulse}>Pulse</Text>
                <Text style={styles.textSafe}>Safe</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        flexDirection: 'row', // Coloca el logo y el texto en una fila
        alignItems: 'center', // Centra verticalmente el contenido
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    textContainer: {
        marginLeft: 20, // Espacio entre el logo y el texto
    },
    textPulse: {
        fontSize: 32, // Tamaño de fuente para "Pulse"
        fontWeight: 'bold', // Texto en negrita
        color: '#000', // Color del texto
        paddingLeft: 60,
        color: '#FF4E4E', // Color del texto
    },
    textSafe: {
        fontSize: 32, // Tamaño de fuente para "Safe"
        fontWeight: 'bold', // Texto en negrita
        color: '#000', // Color del texto
        paddingLeft: 66,
        color: '#FF4E4E', // Color del texto
    },      
});
