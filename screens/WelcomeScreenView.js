import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../assets/icon6.png"; // Importa el logo

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
          {/* Logo y texto como en el Código 1 */}
          <Image source={Icon} style={styles.image} />
          <Text style={styles.textPulse}>Pulse</Text>
          <Text style={styles.textSafe}>Safe</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
            Bienvenido a PulseSafe, tu compañero de salud en tiempo real.
        </Text>
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
  logoWrapper: {
    alignItems: "center", // Centra el logo y el texto
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
  textSafe: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF4E4E",
    paddingLeft: 10, // Ajusta el padding para alinear el texto
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    color: "#000000",
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 20,
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