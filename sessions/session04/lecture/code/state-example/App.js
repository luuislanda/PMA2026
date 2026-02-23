import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg";
  const workerName = "Luis";

  // State
  const [currentOrder, setCurrentOrder] = useState("No orders yet...");

  // Handler function
  const handleOrder = (dish, emoji) => {
    setCurrentOrder("Cooking " + dish + " " + emoji);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.brand}>{restaurantName}</Text>
        <Text style={styles.staff}>Staff on Shift: {workerName}</Text>
      </View>

      <View style={styles.orderCard}>
        <Text style={styles.orderTitle}>Digital Order Board</Text>
        <View style={styles.statusBox}>
          {/* HERE WE DISPLAY THE ORDER */}
          <Text style={styles.statusText}>{currentOrder}</Text>
        </View>

        <Text style={styles.description}>Select an item to start cooking:</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Pizza"
            onPress={() => handleOrder("Margherita", "🍕")}
            color="white"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Burger"
            onPress={() => handleOrder("Classic", "🍔")}
            color="white"
          />
        </View>

        <Text
          style={styles.clearLink}
          onPress={() => setCurrentOrder("No orders yet...")}
        >
          Clear Board
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    justifyContent: "center",
  },
  titleCard: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  brand: { 
    fontSize: 40, // Increased size from previous design
    fontWeight: "900", 
    color: "#2f25b9", 
    marginBottom: 5 
  },
  staff: { fontSize: 14, color: "#666" },
  orderTitle: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#d35400" 
  },
  statusBox: {
    backgroundColor: "#fdf2e9", // Receipt-style background
    padding: 20,
    borderRadius: 10,
    marginVertical: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#d35400",
    borderStyle: "dashed", // Dashed border for the "Board" look
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
    fontSize: 14,
  },
  buttonWrapper: { 
    width: "100%", 
    backgroundColor: "#2f25b9", // Wrapped button for consistent rounded corners
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  clearLink: {
    marginTop: 15,
    color: "red",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "600",
  },
});