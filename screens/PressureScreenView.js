import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../assets/icon6.png"; // Importa el logo
import { Home, Heart, User, Bell } from "lucide-react-native"

export default function PressureScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
          {/* Logo y texto como en el Código 1 */}
          <Image source={Icon} style={styles.image} />
          <Text style={styles.textPulse}>Tu salud, al alcance de tu mano.</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>
            Conecta tu smartwatch para comenzar a medir.
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
            <Home size={24} color="#FF4E4E" onPress= {() => navigation.navigate("Main")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Heart size={24} color="#FF4E4E" onPress={() => navigation.navigate("Pressure")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <User size={24} color="#FF4E4E" onPress={() => navigation.navigate("Profile")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
            <Bell size={24} color="#FF4E4E" onPress={() => navigation.navigate("Notifications")}/>
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
  description: {
    marginTop: 20,
    textAlign: "center",
    color: "#000000",
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 20,
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
});