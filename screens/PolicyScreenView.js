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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
          tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque,
          sed accumsan metus.
        </Text>

        <Text style={styles.paragraph}>
          Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at malesuada eros
          semper ultrices. Vestibulum lobortis enim vel neque diam, a ultrices ex placerat. Mauris ut lacinia justo, sed
          suscipit tortor. Nam egestas nulla posuere neque tincidunt porta.
        </Text>

        <Text style={styles.sectionTitle}>Términos Y Condiciones</Text>

        <View style={styles.termsList}>
          <Text style={styles.termItem}>
            1. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum,
            nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orc. Morbi quis rhoncus mi.
            Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisi posuere risus, vel
            facilisis nisi tellus ac turpis.
          </Text>

          <Text style={styles.termItem}>
            2. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum,
            nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orc. Morbi quis rhoncus mi.
            Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisi posuere risus, vel
            facilisis nisi tellus.
          </Text>

          <Text style={styles.termItem}>
            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel
            tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
          </Text>

          <Text style={styles.termItem}>
            4. Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus
            sit, volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel
            neque diam, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere
            neque.
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

