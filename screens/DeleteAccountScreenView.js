import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DeleteAccountScreenView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
          <Text style={styles.textPulse}>Bienvenido a borrar cuenta</Text>
          <Text style={styles.textSafe}>Safe</Text>        
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate("Register")}
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
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 40,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  textPulse: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF4E4E",
    paddingLeft: 10, // Ajusta el padding para alinear el texto
  },
  buttonContainer: {
    width: "100%",
    paddingBottom: 50,
    gap: 12,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#FF4E4E",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#DADFF2",
  },
  registerButtonText: {
    color: "#FF4E4E",
    fontSize: 16,
    fontWeight: "600",
  },
});