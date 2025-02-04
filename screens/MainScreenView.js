import { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
  Settings,
  Home,
  Heart,
  User,
  Bell,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Apple,
  AirVent,
  Activity,
  Shield,
} from "lucide-react-native"
import { useAuth } from "../context/AuthContext"

export default function MainScreen() {
  const navigation = useNavigation()
  const { user } = useAuth()
  const [expandedSpecialty, setExpandedSpecialty] = useState(null)

  const specialties = [
    {
      id: 1,
      name: "Cardiología",
      icon: Heart,
      description:
        "Especialidad médica enfocada en el diagnóstico y tratamiento de enfermedades cardiovasculares. Monitoreo de presión arterial, evaluación de riesgos cardíacos y prevención de problemas del corazón.",
      color: "#FF6B6B",
    },
    {
      id: 2,
      name: "Medicina Interna",
      icon: Stethoscope,
      description:
        "Atención integral de adultos, enfocada en el diagnóstico y tratamiento de múltiples condiciones. Especialidad que coordina diferentes aspectos de la salud para un cuidado completo.",
      color: "#4ECDC4",
    },
    {
      id: 3,
      name: "Nutrición",
      icon: Apple,
      description:
        "Asesoramiento personalizado en alimentación y hábitos saludables. Planes nutricionales adaptados para mejorar la salud cardiovascular y el bienestar general.",
      color: "#96CEB4",
    },
    {
      id: 4,
      name: "Neumología",
      icon: AirVent,
      description:
        "Especialidad centrada en el sistema respiratorio y su relación con la salud cardiovascular. Diagnóstico y tratamiento de condiciones pulmonares que afectan al corazón.",
      color: "#5D9CEC",
    },
    {
      id: 5,
      name: "Endocrinología",
      icon: Activity,
      description:
        "Control y tratamiento de trastornos hormonales que pueden afectar la salud cardiovascular. Manejo de diabetes y otras condiciones endocrinas.",
      color: "#AC92EC",
    },
    {
      id: 6,
      name: "Medicina Preventiva",
      icon: Shield,
      description:
        "Enfoque en la prevención de enfermedades y promoción de la salud. Estrategias proactivas para mantener un sistema cardiovascular saludable.",
      color: "#48CFAD",
    },
  ]

  const toggleSpecialty = (id) => {
    setExpandedSpecialty(expandedSpecialty === id ? null : id)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: "https://i.pravatar.cc/150" }} style={styles.avatar} />
          <View style={styles.welcomeText}>
            <Text style={styles.greeting}>Hola, Bienvenido</Text>
            <Text style={styles.userName}>{user?.nombre || "johan lopez"}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate("Personal")}>
          <Settings size={24} color="#FF4E4E" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Especialistas en Salud Cardiovascular</Text>
        <View style={styles.specialtiesList}>
          {specialties.map((specialty) => (
            <View key={specialty.id} style={styles.specialtyWrapper}>
              <TouchableOpacity
                style={[styles.specialtyButton, { backgroundColor: specialty.color }]}
                onPress={() => toggleSpecialty(specialty.id)}
                activeOpacity={0.9}
              >
                <View style={styles.specialtyContent}>
                  <View style={styles.specialtyIcon}>
                    <specialty.icon size={20} color="#FFFFFF" />
                  </View>
                  <Text style={styles.specialtyText}>{specialty.name}</Text>
                </View>
                {expandedSpecialty === specialty.id ? (
                  <ChevronUp size={20} color="#FFFFFF" />
                ) : (
                  <ChevronDown size={20} color="#FFFFFF" />
                )}
              </TouchableOpacity>
              {expandedSpecialty === specialty.id && (
                <View style={[styles.specialtyDescription, { backgroundColor: `${specialty.color}15` }]}>
                  <Text style={[styles.descriptionText, { color: specialty.color }]}>{specialty.description}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
        {/* Extra padding for bottom navigation */}
        <View style={styles.bottomPadding} />
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
          <Bell size={24} color="#FF4E4E" />
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#FF4E4E",
  },
  welcomeText: {
    gap: 4,
  },
  greeting: {
    fontSize: 14,
    color: "#FF4E4E",
    fontWeight: "500",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  settingsButton: {
    padding: 8,
    backgroundColor: "#FFF0F0",
    borderRadius: 12,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20,
  },
  specialtiesList: {
    gap: 12,
  },
  specialtyWrapper: {
    marginBottom: 8,
  },
  specialtyButton: {
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  specialtyContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  specialtyIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 12,
  },
  specialtyText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  specialtyDescription: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    marginTop: 1,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
  },
  bottomPadding: {
    height: 80,
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
})

