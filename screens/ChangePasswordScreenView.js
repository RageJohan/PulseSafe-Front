// screens/ChangePasswordScreen.js

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, Eye, EyeOff } from "lucide-react-native";
import { useAuth } from "../context/AuthContext"; // Importar el hook useAuth

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const { user } = useAuth(); // Obtener el usuario desde el contexto

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSaveChanges = async () => {
    const { current, new: newPassword, confirm } = passwords;

    // Validaciones básicas
    if (!current || !newPassword || !confirm) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (newPassword !== confirm) {
      Alert.alert("Error", "La nueva contraseña y la confirmación no coinciden.");
      return;
    }

    try {
      // Realizar la solicitud al backend para actualizar la contraseña
      const response = await fetch(`http://10.0.2.2:8080/api/usuarios/${user.idUsuario}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Agrega encabezados de autenticación si los tienes (por ejemplo, token JWT)
        },
        body: JSON.stringify({
          password: newPassword, // Solo enviamos la nueva contraseña
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Contraseña actualizada exitosamente.");
        // Opcional: Navegar de regreso o limpiar los campos
        navigation.goBack();
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.mensaje || "Error al cambiar la contraseña.");
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      Alert.alert("Error", "Ocurrió un error al cambiar la contraseña. Inténtalo de nuevo.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cambiar Contraseña</Text>
      </View>

      {/* Password Fields */}
      <View style={styles.formContainer}>
        {/* Contraseña Actual */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña Actual</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="************"
              placeholderTextColor="#999"
              secureTextEntry={!showPasswords.current}
              value={passwords.current}
              onChangeText={(text) => setPasswords((prev) => ({ ...prev, current: text }))}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => togglePasswordVisibility("current")}>
              {showPasswords.current ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Nueva Contraseña */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nueva Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="************"
              placeholderTextColor="#999"
              secureTextEntry={!showPasswords.new}
              value={passwords.new}
              onChangeText={(text) => setPasswords((prev) => ({ ...prev, new: text }))}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => togglePasswordVisibility("new")}>
              {showPasswords.new ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirmar Nueva Contraseña */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirmar Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="************"
              placeholderTextColor="#999"
              secureTextEntry={!showPasswords.confirm}
              value={passwords.confirm}
              onChangeText={(text) => setPasswords((prev) => ({ ...prev, confirm: text }))}
            />
            <TouchableOpacity style={styles.eyeButton} onPress={() => togglePasswordVisibility("confirm")}>
              {showPasswords.confirm ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Botón para Guardar Cambios */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE6E6",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: "#000000",
  },
  eyeButton: {
    padding: 10,
  },
  saveButton: {
    backgroundColor: "#FF4E4E",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
