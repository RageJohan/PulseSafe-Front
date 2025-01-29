// screens/PersonalScreen.js

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, Phone } from "lucide-react-native";

// Importa el hook useAuth desde AuthContext
import { useAuth } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta

export default function PersonalScreen() {
  const navigation = useNavigation();

  // Obtén el usuario y el token desde el contexto
  const { user, token, setUser } = useAuth();

  // Estado para los campos editables
  const [perfil, setPerfil] = useState({
    nombre: user?.nombre || "",
    email: user?.email || "",
    telefonoEmergencia: user?.telefonoEmergencia || "",
  });

  // Función para manejar cambios en los campos de texto
  const handleChange = (field, value) => {
    setPerfil({
      ...perfil,
      [field]: value,
    });
  };

  // Función para enviar la actualización al backend
  const handleActualizarPerfil = async () => {
    // Validaciones básicas
    if (!perfil.nombre.trim() || !perfil.email.trim() || !perfil.telefonoEmergencia.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(perfil.email)) {
      Alert.alert("Error", "Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Validación del número de emergencia (solo números y longitud mínima)
    const phoneRegex = /^[0-9]{3,}$/;
    if (!phoneRegex.test(perfil.telefonoEmergencia)) {
      Alert.alert("Error", "Por favor, ingresa un número de emergencia válido.");
      return;
    }

    try {
      // Realizar la solicitud al backend para actualizar el perfil
      const response = await fetch(`http://10.0.2.2:8080/api/usuarios/${user.idUsuario}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Agrega el token si es necesario
        },
        body: JSON.stringify({
          nombre: perfil.nombre,
          email: perfil.email,
          telefonoEmergencia: perfil.telefonoEmergencia,
          // password: perfil.password, // No incluimos password aquí
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        Alert.alert("Éxito", "Perfil actualizado exitosamente.");

        // Actualizar el contexto con los nuevos datos del usuario
        setUser({
          ...user,
          nombre: updatedUser.nombre,
          email: updatedUser.email,
          telefonoEmergencia: updatedUser.telefonoEmergencia,
        });

        // Opcional: Navegar de regreso o realizar otra acción
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.mensaje || "Error al actualizar el perfil.");
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      Alert.alert("Error", "Ocurrió un error al actualizar el perfil. Inténtalo de nuevo.");
    }
  };

  // Actualizar el estado local cuando el usuario en el contexto cambie
  useEffect(() => {
    setPerfil({
      nombre: user?.nombre || "",
      email: user?.email || "",
      telefonoEmergencia: user?.telefonoEmergencia || "",
    });
  }, [user]);

  return (
    <ScrollView style={styles.container}>
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
          <Image
            source={{ uri: "https://i.pravatar.cc/150" }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.phoneButton} onPress={() => Alert.alert("Llamar", "Funcionalidad no implementada.")}>
            <Phone size={16} color="#FF4E4E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.formContainer}>
        {/* Nombres */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombres</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Nombres"
            placeholderTextColor="#999999"
            value={perfil.nombre}
            onChangeText={(text) => handleChange("nombre", text)}
          />
        </View>

        {/* Número De Emergencia */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Número De Emergencia</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Número De Emergencia"
            placeholderTextColor="#999999"
            value={perfil.telefonoEmergencia}
            onChangeText={(text) => handleChange("telefonoEmergencia", text)}
            keyboardType="phone-pad"
          />
        </View>

        {/* Correo */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Correo Electrónico"
            placeholderTextColor="#999999"
            value={perfil.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Botón para Actualizar Perfil */}
        <TouchableOpacity style={styles.updateButton} onPress={handleActualizarPerfil}>
          <Text style={styles.updateButtonText}>Actualizar Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    paddingBottom: 40,
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
    fontSize: 16,
    color: "#000000",
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
});
