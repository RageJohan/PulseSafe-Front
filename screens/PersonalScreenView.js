import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, Phone } from "lucide-react-native"
import { useState } from "react" // Importa useState

export default function PersonalScreen() {
  const navigation = useNavigation()
  const [name, setName] = useState("John Doe")
  const [emergencyNumber, setEmergencyNumber] = useState("106")
  const [email, setEmail] = useState("johndoe@gmail.com")

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: "https://i.pravatar.cc/150" }} style={styles.profileImage} />
          <TouchableOpacity style={styles.phoneButton}>
            <Phone size={16} color="#FF4E4E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombres</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.inputText}
              value={name}
              onChangeText={setName}
              placeholder="Ingresa tu nombre"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Número De Emergencia</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.inputText}
              value={emergencyNumber}
              onChangeText={setEmergencyNumber}
              placeholder="Ingresa número de emergencia"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.inputText}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Actualizar Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  placeholderText: {
    color: '#999999',
  },
  inputText: {
    fontSize: 16,
    color: "#666666",
    width: '100%', // Asegura que el TextInput ocupe todo el espacio
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  backButton: {
    marginRight: 15,
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFE6E6",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FF4E4E",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  phoneButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFE6E6",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 8,
  },
  inputField: {
    backgroundColor: "#F5F7FF",
    borderRadius: 10,
    padding: 15,
  },
  inputText: {
    fontSize: 16,
    color: "#666666",
  },
  updateButton: {
    backgroundColor: "#FF4E4E",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
})