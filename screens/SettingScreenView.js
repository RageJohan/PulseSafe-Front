import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronRight, Key, UserX } from "lucide-react-native"
import { useState } from "react"

export default function SettingScreen() {
  const navigation = useNavigation()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

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
      onPress: () => setShowDeleteModal(true),
      bgColor: "#FFE6E6",
    },
  ]

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <View style={styles.backButtonCircle}>
            <ChevronLeft size={24} color="#FF4E4E" />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajustes</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsContainer}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.settingItem} 
            onPress={option.onPress || (() => navigation.navigate(option.screen))}
            activeOpacity={0.7}
          >
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

      {/* Delete Account Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Eliminar Cuenta</Text>
            
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>¿Estás seguro de que quieres borrar</Text>
              <Text style={styles.modalText}>tu cuenta?</Text>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]} 
                onPress={() => setShowDeleteModal(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.deleteButton]}
                onPress={() => {
                  // Lógica para eliminar cuenta
                  setShowDeleteModal(false)
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.deleteButtonText}>Sí, Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  backButton: {
    marginRight: 16,
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
    fontWeight: "700",
    color: "#FF4E4E",
  },
  settingsContainer: {
    paddingHorizontal: 24,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  settingText: {
    fontSize: 17,
    color: "#333333",
    fontWeight: "500",
  },
  // Estilos del modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    width: "85%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FF4E4E",
    marginBottom: 12,
  },
  modalTextContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#F5F5F5",
  },
  cancelButtonText: {
    color: "#FF4E4E",
    fontSize: 16,
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: "#FF4E4E",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})