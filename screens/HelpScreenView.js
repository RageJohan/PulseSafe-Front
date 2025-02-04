import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronDown, Search } from "lucide-react-native"
import { useState } from "react"

export default function HelpScreenView() {
  const navigation = useNavigation()
  const [expandedQuestion, setExpandedQuestion] = useState(0)
  const [activeSection, setActiveSection] = useState("faq")

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  const faqData = [
    {
      question: "¿Qué es PulseSafe y cómo funciona?",
      answer:
        "PulseSafe es una aplicación móvil diseñada para monitorear en tiempo real la Presión Sistólica, Presión Diastólica y Frecuencia Cardíaca. Utiliza datos obtenidos de dispositivos compatibles para ayudar a las personas a controlar su salud cardíaca y detectar posibles anomalías.",
    },
    {
      question: "¿Necesito un dispositivo especial para usar PulseSafe?",
      answer: "Sí, necesitas un smartwatch o dispositivo compatible que pueda medir la presión arterial y la frecuencia cardíaca. La app se sincroniza con estos dispositivos para mostrar los datos en tiempo real.",
    },
    {
      question: "¿PulseSafe puede hacer un diagnóstico médico?",
      answer: "No, PulseSafe es una herramienta informativa y de monitoreo. No reemplaza la evaluación de un profesional de la salud. Si notas valores anormales, consulta a un médico.",
    },
    {
      question: "¿Cómo protege PulseSafe mis datos de salud?",
      answer: "Implementamos cifrado de datos, almacenamiento seguro y acceso restringido para garantizar la privacidad y seguridad de tu información, cumpliendo con las normativas vigentes de protección de datos.",
    },
    {
      question: "¿Puedo ver mi historial de mediciones en PulseSafe?",
      answer: "Sí, la aplicación guarda un registro de tus mediciones de presión arterial y frecuencia cardíaca para que puedas consultarlas en cualquier momento desde la sección de notificaciones.",
    },
    {
      question: "¿Qué hago si la aplicación no muestra mis datos correctamente?",
      answer: "Asegúrate de que tu dispositivo está bien sincronizado con PulseSafe, revisa la conexión y verifica que los sensores del smartwatch estén limpios y funcionando correctamente. Si el problema persiste, contacta nuestro soporte técnico.",
    },
    {
      question: "¿Cómo puedo contactar al soporte de PulseSafe?",
      answer: "Puedes comunicarte con nuestro equipo de soporte enviando un correo a pulsesafeinfo@gmail.com o accediendo a la sección 'Contacta con nosotros' dentro del Centro de Ayuda, donde también encontrarás más información de contacto.",
    },
  ]

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Centro De Ayuda</Text>
          <Text style={styles.headerSubtitle}>¿Cómo Podemos Ayudarle?</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#999999" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#999999" />
      </View>

      {/* Action Buttons Container */}
      <View style={styles.actionButtonsWrapper}>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.sectionButton, activeSection === "faq" && styles.activeSectionButton]}
            onPress={() => handleSectionChange("faq")}
          >
            <Text style={[styles.sectionButtonText, activeSection === "faq" && styles.activeSectionButtonText]}>
              Preguntas Frecuentes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sectionButton, activeSection === "contact" && styles.activeSectionButton]}
            onPress={() => handleSectionChange("contact")}
          >
            <Text style={[styles.sectionButtonText, activeSection === "contact" && styles.activeSectionButtonText]}>
              Contacta Con Nosotros
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.contentContainer}>
        {activeSection === "contact" ? (
          <View style={styles.contactContainer}>
            <Text style={styles.contactTitle}>Información de Contacto</Text>
            <Text style={styles.contactText}>Correo General: pulsesafeinfo@gmail.com</Text>
            <Text style={styles.contactText}>Teléfono principal: +51 948 426 917</Text>
            <Text style={styles.contactText}>Teléfono alternativo: +51 956 782 413</Text>
            
            <View style={styles.contactHours}>
              <Text style={styles.contactSubtitle}>Horario de Atención</Text>
              <Text style={styles.contactText}>Lunes a Viernes: 9:00 AM - 6:00 PM</Text>
              <Text style={styles.contactText}>Sábados: 9:00 AM - 1:00 PM</Text>
            </View>
            
            <View style={styles.contactSupport}>
              <Text style={styles.contactSubtitle}>Soporte Técnico</Text>
              <Text style={styles.contactText}>Para asistencia técnica inmediata:</Text>         
              <Text style={styles.contactText}>Email: soporte@pulsesafe.com</Text>
            </View>
          </View>
        ) : (
          faqData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => setExpandedQuestion(expandedQuestion === index ? -1 : index)}
            >
              <View style={styles.faqHeader}>
                <Text style={styles.faqQuestion}>{item.question}</Text>
                <ChevronDown
                  size={20}
                  color="#FF2622"
                  style={[styles.faqIcon, expandedQuestion === index && styles.faqIconExpanded]}
                />
              </View>
              {expandedQuestion === index && <Text style={styles.faqAnswer}>{item.answer}</Text>}
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
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
    backgroundColor: "#FF2622",
    padding: 30,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  backButton: {
    marginRight: 20,
  },
  backButtonCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    gap: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  actionButtonsWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButtons: {
    flexDirection: "row",
    backgroundColor: "#FFE6E6",
    borderRadius: 25,
    padding: 4,
  },
  sectionButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 25,
  },
  activeSectionButton: {
    backgroundColor: "#FF2622",
  },
  sectionButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF2622",
  },
  activeSectionButtonText: {
    color: "#FFFFFF",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contactContainer: {
    backgroundColor: "#FFE6E6",
    borderRadius: 12,
    padding: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FF2622",
    marginBottom: 15,
  },
  contactSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF2622",
    marginTop: 20,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 24,
  },
  contactHours: {
    marginTop: 20,
  },
  contactSupport: {
    marginTop: 20,
  },
  faqContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  faqItem: {
    backgroundColor: "#FFE6E6",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: 14,
    color: "#000000",
    flex: 1,
  },
  faqIcon: {
    transform: [{ rotate: "0deg" }],
  },
  faqIconExpanded: {
    transform: [{ rotate: "180deg" }],
  },
  faqAnswer: {
    marginTop: 10,
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
})

