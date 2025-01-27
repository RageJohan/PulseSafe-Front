import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido al Login</Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});