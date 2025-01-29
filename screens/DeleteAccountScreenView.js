import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronRight, Key, UserX } from "lucide-react-native"
import { useState } from "react"

export default function DeleteAccountScreenView() {
  const navigation = useNavigation()
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const settingsOptions = [
    {
      title: "Cambiar La Contraseña",
      icon: Key,
      onPress: () => navigation.navigate("ChangePassword"),
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
          <TouchableOpacity key={index} style={styles.settingItem} onPress={option.onPress}>
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
        animationType="slide"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => setShowDeleteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Eliminar Cuenta</Text>
            <Text style={styles.modalText}>¿Estás segura de que quieres borrar tu cuenta?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setShowDeleteModal(false)}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  // Add delete account logic here
                  setShowDeleteModal(false)
                }}
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
    backgroundColor: "#FFB5B5",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FF4E4E",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FFE6E6",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FF4E4E",
    fontSize: 16,
    fontWeight: "500",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FF4E4E",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
})

