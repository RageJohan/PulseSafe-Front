import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Home, Heart, User, Bell, ChevronLeft, Calendar } from "lucide-react-native"

export default function NotificationScreenView() {
  const navigation = useNavigation()

  const notifications = {
    Hoy: [
      {
        title: "Tu Presión Arterial Estuvo Dentro De Los Niveles Normales Durante 5 Días.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "2 Min",
      },
      {
        title: "Realizaste 3 Mediciones Con Resultados Estables.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "2 Hr",
      },
      {
        title: "Frecuencia Cardiaca Estable: 75 BPM.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "3 Hr",
      },
    ],
    Ayer: [
      {
        title: "Nivel Alto De Presión Arterial",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "1 D",
      },
    ],
    "15 de Enero": [
      {
        title: "No Se Detectaron Anomalías En Tu Presión Arterial.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        time: "5 D",
      },
    ],
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <TouchableOpacity>
          <Text style={styles.markAllText}>Marcar todo</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsContainer}>
        {Object.entries(notifications).map(([date, items]) => (
          <View key={date} style={styles.dateSection}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateText}>{date}</Text>
            </View>

            {items.map((notification, index) => (
              <View key={index} style={styles.notificationCard}>
                <View style={styles.iconContainer}>
                  <Calendar size={24} color="#FFFFFF" />
                </View>
                <View style={styles.notificationContent}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationDescription}>{notification.description}</Text>
                  <Text style={styles.timeText}>{notification.time}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
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
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
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
    flex: 1,
    textAlign: "center",
  },
  markAllText: {
    fontSize: 14,
    color: "#FF4E4E",
  },
  notificationsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  dateSection: {
    marginBottom: 20,
  },
  dateBadge: {
    backgroundColor: "#FFE6E6",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
  },
  dateText: {
    color: "#FF4E4E",
    fontSize: 14,
    fontWeight: "500",
  },
  notificationCard: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF4E4E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: "#999999",
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
})

