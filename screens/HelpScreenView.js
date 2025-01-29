import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ChevronLeft, ChevronDown, Search } from "lucide-react-native"
import { useState } from "react"

export default function HelpScreenView() {
  const navigation = useNavigation()
  const [expandedQuestion, setExpandedQuestion] = useState(0)

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque elit vitae lectus ornare, at incidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Preguntas Frecuentes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Contacta Con Nosotros</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Accordion */}
      <ScrollView style={styles.faqContainer}>
        {faqData.map((item, index) => (
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
        ))}
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
    marginRight: 30,
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
  actionButtons: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#FF2622",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: "#FFE6E6",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#FF2622",
    fontSize: 14,
    fontWeight: "600",
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

