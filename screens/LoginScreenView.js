// screens/LoginScreenView.js
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#FF4E4E" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Iniciar Sesión</Text>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Bienvenido</Text>
        <Text style={styles.welcomeSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="abc@gmail.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
        </TouchableOpacity>

        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Main")} // Navega a MainScreenView
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4E4E",
    marginBottom: 20,
  },
  welcomeSection: {
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#FFF0F0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0F0",
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: "#FF4E4E",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#FF4E4E",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "#FF4E4E",
    fontSize: 14,
    fontWeight: "600",
  },
});