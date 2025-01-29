// screens/MainScreen.js

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Settings, Home, Heart, User, Bell, ChevronDown } from "lucide-react-native";

// Importa el hook useAuth desde AuthContext
import { useAuth } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta

export default function MainScreen() {
  const navigation = useNavigation();
  
  // Obtén el usuario del contexto
  const { user } = useAuth();

  const specialties = [
    { id: 1, name: "Cardiology", icon: Heart },
    { id: 2, name: "Dermatology", icon: Heart },
    { id: 3, name: "General Medicine", icon: Heart },
    { id: 4, name: "Gynecology", icon: Heart },
    { id: 5, name: "Odontology", icon: Heart },
    { id: 6, name: "Oncology", icon: Heart },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150" }} // URL de ejemplo
            style={styles.avatar}
          />
          <View style={styles.welcomeText}>
            <Text style={styles.greeting}>Hola, Bienvenido</Text>
            {/* Mostrar el nombre del usuario desde el contexto */}
            <Text style={styles.userName}>{user?.nombre || "Invitado"}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Personal")}>
          <Settings size={24} color="#FF4E4E" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Featured Section */}
        <TouchableOpacity style={styles.featuredCard}>
          <View style={styles.cardHeader}>
            <Heart size={20} color="#FFFFFF" />
            <Text style={styles.cardTitle}>Cardiology</Text>
            <ChevronDown size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
            tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
          </Text>
        </TouchableOpacity>

        {/* Looking Doctors Section */}
        <Text style={styles.sectionTitle}>Looking Doctors</Text>
        <View style={styles.specialtiesList}>
          {specialties.map((specialty) => (
            <TouchableOpacity key={specialty.id} style={styles.specialtyButton}>
              <View style={styles.specialtyContent}>
                <specialty.icon size={20} color="#FFFFFF" />
                <Text style={styles.specialtyText}>{specialty.name}</Text>
              </View>
              <ChevronDown size={20} color="#FFFFFF" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
          <Bell size={24} color="#FF4E4E" style={styles.activeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeText: {
    gap: 4,
  },
  greeting: {
    fontSize: 14,
    color: "#FF4E4E",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  featuredCard: {
    backgroundColor: "#FF4E4E",
    borderRadius: 15,
    padding: 20,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  cardDescription: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  specialtiesList: {
    gap: 12,
  },
  specialtyButton: {
    backgroundColor: "#FF4E4E",
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  specialtyContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  specialtyText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  navItem: {
    padding: 8,
  },
  activeIcon: {
    opacity: 1,
  },
});
