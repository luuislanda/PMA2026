import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg";
  const workerName = "Luis";

  // State
  const [currentOrder, setCurrentOrder] = useState("No orders yet...");

  // FUNCTION: Includes a timer (setTimeout)
  const handleOrder = (dish, emoji) => {
    setCurrentOrder("Cooking " + dish + " " + emoji + "...");

    // Timer: After 2000ms (2 seconds), it finishes
    setTimeout(() => {
      setCurrentOrder("Ready: " + dish + " " + emoji + " ✅");
    }, 2000);
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
          <Text style={styles.statusText}>{currentOrder}</Text>
        </View>

        <Text style={styles.description}>Select an item to start cooking:</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Pizza"
            onPress={() => handleOrder("Margherita", "🍕")}
            color="#2f25b9"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Burger"
            onPress={() => handleOrder("Classic", "🍔")}
            color="#e67e22"
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

// ... styles remain the same as your previous version ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    justifyContent: "center",
  },
  titleCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    margin: 20,
  },
  orderCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  brand: { fontSize: 30, fontWeight: "900", color: "#2f25b9", marginBottom: 5 },
  staff: { fontSize: 15, color: "#000" },
  orderTitle: { fontSize: 20, fontWeight: "bold", color: "#d35400" },
  statusBox: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2f25b9",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
    fontSize: 14,
  },
  buttonWrapper: { width: "80%", marginBottom: 10 },
  clearLink: {
    marginTop: 15,
    color: "red",
    textDecorationLine: "underline",
    fontSize: 14,
  },
});
