import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronRight, Key, UserX } from "lucide-react-native"

export default function SettingScreen() {
  const navigation = useNavigation()

  const settingsOptions = [
    {
      title: "Cambiar La Contraseña",
      icon: Key,
      screen: "ChangePassword",
      bgColor: "#FFE6E6",
    },
    {
      title: "Eliminar Cuenta",
      icon: UserX,
      screen: "DeleteAccount",
      bgColor: "#FFE6E6",
    },
  ]

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.settingItem} onPress={() => navigation.navigate(option.screen)}>
            <View style={styles.settingItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: option.bgColor }]}>
                <option.icon size={20} color="#FF4E4E" />
              </View>
              <Text style={styles.settingText}>{option.title}</Text>
            </View>
            <ChevronRight size={20} color="#FF4E4E" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
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
  settingsContainer: {
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingItemLeft: {
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
  settingText: {
    fontSize: 16,
    color: "#000000",
  },
})