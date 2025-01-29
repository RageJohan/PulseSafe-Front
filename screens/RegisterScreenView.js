import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"


const API_URL = "http://10.0.2.2:8080/api/usuarios"

export default function RegisterScreen() {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  /**
   * Llamada al endpoint de registro en Spring Boot
   */
  const handleRegister = async () => {
    // Validaciones básicas (puedes mejorarlas a tu gusto)
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios.")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.")
      return
    }

    try {
      // Construimos el body con las propiedades que tu backend espera
      // En tu backend, el atributo se llama "nombre", así que enviamos "nombre" en lugar de "name".
      const body = {
        nombre: formData.name,
        email: formData.email,
        password: formData.password,
        // telefonoEmergencia: si lo tuvieras, etc.
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      if (!response.ok) {
        // Si el servidor responde con 4XX o 5XX, aquí puedes manejar el error
        throw new Error("Error al registrar el usuario. Código: " + response.status)
      }

      const data = await response.json()
      // data debería ser el usuario creado, según tu controlador

      Alert.alert("Registro exitoso", `Bienvenido, ${data.nombre}!`)
      
      // Navegar a otra pantalla, por ejemplo al login
      // navigation.navigate("Login")
    } catch (error) {
      Alert.alert("Error", error.message)
      console.error("Error al registrar:", error)
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#FF4E4E" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Registrarse</Text>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombres</Text>
        <TextInput
          style={styles.input}
          placeholder="juan perez"
          placeholderTextColor="#999"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="abc@gmail.com"
          placeholderTextColor="#999"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            placeholderTextColor="#999"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="************"
            placeholderTextColor="#999"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Al continuar, aceptas los{" "}
            <Text style={styles.termsLink} onPress={() => navigation.navigate("Policy")}>
              Términos de uso
            </Text>{" "}
            y{" "}
            <Text style={styles.termsLink} onPress={() => navigation.navigate("Policy")}>
              Política de privacidad
            </Text>
            .
          </Text>
        </View>

        {/* Llamamos a handleRegister aquí */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
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
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 15,
  },
  termsContainer: {
    marginBottom: 30,
  },
  termsText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  termsLink: {
    color: "#FF4E4E",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#FF4E4E",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    color: "#FF4E4E",
    fontSize: 14,
    fontWeight: "600",
  },
})
