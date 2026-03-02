import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function AccessiblePrototype() {
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <View
      style={styles.container}
    >
      {/* 5. Descriptive Page Titles & 6. Heading Hierarchy */}
      <View accessibilityRole="header" accessible={true}>
        <Text style={styles.header}>React Native Accessibility 101</Text>
      </View>

      {/* 1. Alt Text for Images */}
      <Image
        source={{
          uri: "https://ahrefs.com/blog/wp-content/uploads/2020/03/00-alt-text.png",
        }}
        style={styles.heroImage}
        accessibilityLabel="Illustration of how a screenreader will read an image's filename outloud, if no proper alt-text is given to it."
      />

      <View style={styles.content}>
        {/* 6. Proper Heading Hierarchy (Sub-heading) */}
        <Text accessibilityRole="header" style={styles.subHeader}>
          Lesson: Implementing Level A
        </Text>

        {/* 4. Fix Color-only Information Indicators */}
        <View
          style={styles.statusRow}
          accessibilityLabel={`Enrollment status: ${isEnrolled ? "Enrolled" : "Not Enrolled"}`}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isEnrolled ? "#2E7D32" : "#C62828" },
            ]}
          />
          {/* We use text AND color so the information is not only color-dependent */}
          <Text style={styles.statusText}>
            Status: {isEnrolled ? "Enrolled" : "Not Enrolled"}
          </Text>
        </View>

        <Text style={styles.bodyText}>
          This example showcases the core requirements for mobile accessibility
          focus.
        </Text>

        {/* 2. Full Keyboard Accessibility & Focus */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEnrolled(!isEnrolled)}
          accessibilityRole="button"
          accessibilityHint="Toggles your enrollment status for this course"
        >
          <Text style={styles.buttonText}>
            {isEnrolled ? "Leave Course" : "Enroll Now"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FFF",
    },
  header: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 20,
    color: "#000",
    textAlign: "center",
    paddingTop: 50
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  heroImage: { 
    width: "95%", 
    height: 400, 
    borderColor: "black", 
    borderWidth: 2,
    alignSelf: "center" },
  content: { padding: 20 },
  statusRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20 },
  statusDot: { 
    width: 12, 
    height: 12, 
    borderRadius: 6, 
    marginRight: 8 },
  statusText: { 
    fontSize: 16, 
    fontWeight: "500" },
  bodyText: { 
    fontSize: 16, 
    lineHeight: 24, 
    marginBottom: 20 },
  captionText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 10,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});
