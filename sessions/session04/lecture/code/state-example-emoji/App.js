import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg 🌃";
  const workerName = "Luis";

  // 1. STATE ZONE: One for the text, one for the emoji
  const [currentOrder, setCurrentOrder] = useState("No orders yet..."); //Default message
  const [orderEmoji, setOrderEmoji] = useState("⏳"); // Default emoji

  // Our pricing function from exampl e2
  function getPrice(dish) {
    if (dish === "Pizza Margherita") {
      return "85 DKK";
    } else {
      return "95 DKK";
    }
  }

  // 3. HANDLER ZONE: Updates both states simultaneously
  const handleOrder = (dish, emoji) => {
    const price = getPrice(dish);

    setOrderEmoji(emoji); // Update the emoji state
    setCurrentOrder("Cooking: " + dish + "\n Cost: " + getPrice(dish)); //Updates the text

  };

  // 4. Handler for going back go default

  const clearBoard = () => {
    setCurrentOrder("No orders yet...");
    setOrderEmoji("⏳");
  };

  return (
    <View style={styles.container}>
      {/* HEADER CARD */}
      <View style={styles.card}>
        <Text style={styles.brand}>{restaurantName}</Text>
        <Text style={styles.staff}>Staff on Shift: {workerName}</Text>
      </View>

      {/* DIGITAL ORDER BOARD */}
      <View style={styles.card}>
        <Text style={styles.orderTitle}>Digital Order Board</Text>
        <View style={styles.statusBox}>
          {/* Displaying the dynamic emoji state here */}
          <Text style={styles.bigEmoji}>{orderEmoji}</Text>
          <Text style={styles.statusText}>{currentOrder}</Text>
        </View>
        <Text style={styles.clearLink} onPress={clearBoard}>
          Clear Board
        </Text>
      </View>

      {/* MENU & INTERACTION SECTION */}
      <View style={styles.card}>
        <Text style={styles.description}>Select an item to order:</Text>

        {/* PIZZA ROW */}
        <View style={styles.menuRow}>
          <Text style={styles.menuItem}>🍕 Margherita</Text>
          <Text style={styles.priceTag}>{getPrice("Pizza Margherita")}</Text>
        </View>
        <Pressable
          style={styles.pressableBtn}
          onPress={() => handleOrder("Pizza Margherita", "🍕")}
        >
          <Text style={styles.buttonLabel}>Order Pizza</Text>
        </Pressable>

        <View style={styles.divider} />

        {/* BURGER ROW */}
        <View style={styles.menuRow}>
          <Text style={styles.menuItem}>🍔 Classic Burger</Text>
          <Text style={styles.priceTag}>{getPrice("Classic Burger")}</Text>
        </View>
        <Pressable
          style={[styles.pressableBtn, { backgroundColor: "#e67e22" }]}
          onPress={() => handleOrder("Classic Burger", "🍔")}
        >
          <Text style={styles.buttonLabel}>Order Burger</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  brand: {
    fontSize: 40,
    fontWeight: "900",
    color: "#2f25b9",
    textAlign: "center",
  },
  staff: { fontSize: 14, textAlign: "center", color: "#666" },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d35400",
    textAlign: "center",
  },
  statusBox: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ddd",
  },
  bigEmoji: {
    fontSize: 80, 
    marginBottom: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 15,
    color: "#666",
    fontSize: 16,
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  menuItem: { fontSize: 18, fontWeight: "600" },
  priceTag: { fontSize: 18, fontWeight: "700", color: "#2f25b9" },
  pressableBtn: {
    width: "100%",
    backgroundColor: "#2f25b9",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonLabel: { color: "white", fontWeight: "bold", fontSize: 16 },
  clearLink: {
    color: "red",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 5,
  },
  divider: { height: 2, backgroundColor: "#eee", marginVertical: 10 },
});
