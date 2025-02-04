// screens/NotificationScreenView.js

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Home, Heart, User, Bell, ChevronLeft, Calendar } from "lucide-react-native";

// Importa el hook useAuth desde AuthContext
import { useAuth } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta

export default function NotificationScreenView() {
  const navigation = useNavigation();

  // Obtener el usuario desde el contexto
  const { user } = useAuth();

  // Estado para guardar la lista cruda de notificaciones
  const [notificationsList, setNotificationsList] = useState([]);

  // Estado para agrupar notificaciones por fecha { "2025-01-29": [...], "2025-01-28": [...] }
  const [groupedNotifications, setGroupedNotifications] = useState({});

  // Se ejecuta cuando cambie "user", por ejemplo, al iniciar sesión
  useEffect(() => {
    // Si tenemos un usuario con idUsuario, hacemos la petición
    if (user?.idUsuario) {
      fetchNotifications(user.idUsuario);
    }
  }, [user]);

  // Función para hacer la petición al backend
  const fetchNotifications = async (uId) => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/api/notificaciones/usuario/${uId}`);
      if (!response.ok) {
        throw new Error("Error al obtener notificaciones: " + response.status);
      }
      const data = await response.json(); // Array de notificaciones
      setNotificationsList(data);

      // Agrupar por fecha
      const grouped = groupByDate(data);
      // Ordenar las fechas (opcional, para que lo más reciente salga primero)
      const sortedGroups = sortGroupsByDateDesc(grouped);
      setGroupedNotifications(sortedGroups);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  /**
   * Agrupa las notificaciones por su fecha (YYYY-MM-DD).
   * Ejemplo:
   * [
   *   { idNotificacion: 3, timestamp: "2025-01-29T11:19:13", ... },
   *   { idNotificacion: 4, timestamp: "2025-01-29T11:19:18", ... }
   * ]
   */
  const groupByDate = (notifs) => {
    const grouped = {};
    notifs.forEach((notif) => {
      const dateOnly = new Date(notif.timestamp).toISOString().split("T")[0];
      if (!grouped[dateOnly]) {
        grouped[dateOnly] = [];
      }
      grouped[dateOnly].push(notif);
    });
    return grouped;
  };

  /**
   * Ordena las claves (fechas) de más reciente a más antigua.
   */
  const sortGroupsByDateDesc = (groups) => {
    const sortedKeys = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));
    const sortedObj = {};
    sortedKeys.forEach((key) => {
      sortedObj[key] = groups[key];
    });
    return sortedObj;
  };

  /**
   * Función para formatear la fecha. 
   * Si es hoy, retorna "Hoy", si fue ayer, retorna "Ayer", caso contrario, 
   * retorna la fecha en formato "YYYY-MM-DD" o el que tú elijas.
   */
  const formatDateLabel = (dateStr) => {
    const dateObj = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const justDateStr = dateObj.toISOString().split("T")[0];
    const justTodayStr = today.toISOString().split("T")[0];
    const justYesterdayStr = yesterday.toISOString().split("T")[0];

    if (justDateStr === justTodayStr) return "Hoy";
    if (justDateStr === justYesterdayStr) return "Ayer";

    // Si no, devuelves la fecha tal cual
    return justDateStr;
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
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <TouchableOpacity>
          <Text style={styles.markAllText}>Marcar todo</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsContainer}>
        {Object.entries(groupedNotifications).map(([dateKey, notifs]) => {
          const dateLabel = formatDateLabel(dateKey);

          return (
            <View key={dateKey} style={styles.dateSection}>
              {/* Etiqueta de la fecha */}
              <View style={styles.dateBadge}>
                <Text style={styles.dateText}>{dateLabel}</Text>
              </View>

              {/* Lista de notificaciones de esa fecha */}
              {notifs.map((notif) => (
                <View key={notif.idNotificacion} style={styles.notificationCard}>
                  <View style={styles.iconContainer}>
                    <Calendar size={24} color="#FFFFFF" />
                  </View>
                  <View style={styles.notificationContent}>
                    <Text style={styles.notificationTitle}>{notif.tipoAlerta}</Text>
                    <Text style={styles.notificationDescription}>{notif.mensaje}</Text>
                    <Text style={styles.timeText}>
                      {new Date(notif.timestamp).toLocaleTimeString()}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          );
        })}
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

// Estilos (igual que antes)
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
    backgroundColor: "#FFF0F0",
    borderRadius: 12,
  },
});
