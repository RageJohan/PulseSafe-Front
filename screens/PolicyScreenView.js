import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

export default function PolicyScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#FF4E4E" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Política De Privacidad</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.updateDate}>Última Actualización: 14/08/2024</Text>

        <Text style={styles.paragraph}>
          En PulseSafe, la privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal y los datos de salud proporcionados a través de nuestra aplicación.
        </Text>

        <Text style={styles.sectionSubheader}>
        Información que Recopilamos
        </Text>
        <Text style={styles.paragraph}>
        Recopilamos Presión Sistólica, Presión Diastólica y Frecuencia Cardíaca a través de dispositivos compatibles, así como datos personales mínimos como nombre y correo electrónico (cuando sea necesario) y datos de uso de la aplicación para mejorar su rendimiento.
        </Text>

        <Text style={styles.sectionSubheader}>
        Uso de la Información
        </Text>
        <Text style={styles.paragraph}>
        Utilizamos la información recopilada exclusivamente para mostrar en tiempo real los datos de presión arterial y frecuencia cardíaca, generar alertas en caso de valores anormales y optimizar la experiencia del usuario en la aplicación.
        </Text>

        <Text style={styles.sectionSubheader}>
        Protección de Datos
        </Text>
        <Text style={styles.paragraph}>
        Aplicamos medidas de seguridad como cifrado de datos, almacenamiento seguro y acceso restringido para proteger la información de los usuarios, asegurando el cumplimiento de las normativas vigentes de protección de datos.
        </Text>

        <Text style={styles.sectionSubheader}>
        Uso de APIs de Terceros
        </Text>
        <Text style={styles.paragraph}>
        La aplicación puede integrar servicios de terceros para obtener datos de salud en tiempo real; cualquier cambio en la fuente de datos será notificado a los usuarios y manejado de acuerdo con esta política de privacidad.
        </Text>

        <Text style={styles.sectionSubheader}>
        Derechos del Usuario
        </Text>
        <Text style={styles.paragraph}>
        Los usuarios pueden acceder, modificar o eliminar sus datos, revocar su consentimiento en cualquier momento y contactarnos a través de pulsesafeinfo@gmail.com para consultas sobre privacidad y manejo de su información.
        </Text>

        <Text style={styles.sectionTitle}>Términos Y Condiciones</Text>

        <View style={styles.termsList}>
          <Text style={styles.termItem}>
            1. La aplicación PulseSafe está diseñada con fines informativos y no reemplaza asesoramiento médico profesional.
          </Text>

          <Text style={styles.termItem}>
            2. Los usuarios son responsables de verificar la exactitud de sus datos de salud y consultar a un profesional en caso de dudas.
          </Text>

          <Text style={styles.termItem}>
            3. No compartimos información personal con terceros sin el consentimiento del usuario, salvo cuando lo exija la ley.
          </Text>

          <Text style={styles.termItem}>
            4. Nos reservamos el derecho de modificar esta Política de Privacidad y notificar a los usuarios sobre cambios relevantes.
          </Text>
        </View>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  updateDate: {
    fontSize: 14,
    color: "#FF4E4E",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 15,
  },
  sectionSubheader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 15,
  },
  termsList: {
    gap: 15,
  },
  termItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,    
  },
})

