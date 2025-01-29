import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../assets/icon6.png";
import { Home, Heart, User, Bell } from "lucide-react-native";

export default function PressureScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={Icon} style={styles.image} />
        
        {/* Título principal */}
        <Text style={styles.mainTitle}>Presión Arterial</Text>
        
        {/* Texto descriptivo */}
        <View style={styles.titleWrapper}>
          <Text style={styles.textPulse}>Tu Salud, Al Alcance</Text>
          <Text style={styles.textPulse}>De Tu Mano.</Text>
        </View>

        {/* Subtítulo */}
        <Text style={styles.description}>
          Conecta tu smartwatch para comenzar a medir.
        </Text>

        {/* Sección de métricas */}
        <View style={styles.metricsContainer}>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Presión Sistólica</Text>
            <Text style={styles.metricValue}>120 mmHg</Text>
          </View>
          
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Presión Diastólica</Text>
            <Text style={styles.metricValue}>80 mmHg</Text>
          </View>
          
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>Frecuencia Cardiaca</Text>
            <Text style={styles.metricValue}>75 BPM</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate("Main")}>
          <Home size={24} color="#FF4E4E" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate("Pressure")}>
          <Heart size={24} color="#FF4E4E" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate("Profile")}>
          <User size={24} color="#FF4E4E" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate("Notification")}>
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
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF4E4E",
    marginBottom: 5,
  },
  titleWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
  textPulse: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  metricsContainer: {
    width: "100%",
    gap: 10,
  },
  metricItem: {
    alignItems: "center",
    backgroundColor: "#FFF0F0",
    borderRadius: 15,
    padding: 20,
  },
  metricLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4E4E",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  navItem: {
    padding: 10,
  },
});