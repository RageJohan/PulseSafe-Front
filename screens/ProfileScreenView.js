import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Heart, User, Bell } from "lucide-react-native"

export default function ProfileScreenView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a Profile</Text>

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
            <Bell size={24} color="#FF4E4E" onPress={() => navigation.navigate("Notification")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 40,
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4E4E',
  },
});