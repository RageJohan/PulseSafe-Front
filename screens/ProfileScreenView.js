// screens/ProfileScreenView.js

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Home,
  Heart,
  User,
  Bell,
  ChevronRight,
  ChevronLeft,
  Phone,
  Lock,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react-native";

// Importa el hook useAuth desde AuthContext
import { useAuth } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta

export default function ProfileScreenView() {
  const navigation = useNavigation();

  // Obtener el usuario y la función para actualizarlo desde el contexto
  const { user, setUser } = useAuth();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que deseas cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sí",
          onPress: () => {
            setUser(null); // Limpiar el usuario del contexto
            navigation.reset({
              index: 0,
              routes: [{ name: "Welcome" }], // Asegúrate de tener una pantalla "Welcome"
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Actualizar el ítem de menú para "Cerrar Sesión" para usar la función handleLogout
  const menuItems = [
    { title: "Perfil", icon: User, screen: "Personal", bgColor: "#FFE6E6" },
    { title: "Politica De Privacidad", icon: Lock, screen: "Policy", bgColor: "#FFE6E6" },
    { title: "Ajustes", icon: Settings, screen: "Setting", bgColor: "#FFE6E6" },
    { title: "Ayuda", icon: HelpCircle, screen: "Help", bgColor: "#FFE6E6" },
    { title: "Cerrar Sesión", icon: LogOut, action: handleLogout, bgColor: "#FFE6E6" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mi Perfil</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: "https://i.pravatar.cc/150" }} style={styles.profileImage} />
          <TouchableOpacity style={styles.phoneButton}>
            <Phone size={16} color="#FF4E4E" />
          </TouchableOpacity>
        </View>
        {/* Mostrar el nombre del usuario desde el contexto */}
        <Text style={styles.profileName}>{user?.nombre || "Nombre por Defecto"}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.action) {
                item.action(); // Ejecutar la acción si existe (por ejemplo, cerrar sesión)
              } else {
                navigation.navigate(item.screen); // Navegar a la pantalla correspondiente
              }
            }}
          >
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: item.bgColor }]}>
                <item.icon size={20} color="#FF4E4E" />
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
            <ChevronRight size={20} color="#FF4E4E" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Main")}>
          <Home size={24} color="#FF4E4E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Pressure")}>
          <Heart size={24} color="#FF4E4E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Profile")}>
          <User size={24} color="#FF4E4E" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Notification")}>
          <Bell size={24} color="#FF4E4E" />
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
  profileSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
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
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#000000",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  navItem: {
    padding: 8,
  },
});
