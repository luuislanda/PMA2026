import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg";
  const workerName = "Luis";

  // --- JS ZONE: The Logic Tool ---
  function getPrice(dish) {
    if (dish === "Margherita Pizza") {
      return "85 DKK";
    } else {
      return "95 DKK";
    }
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.card}>
        <Text style={styles.brand}>{restaurantName}</Text>
        <Text style={styles.staff}>Staff on Shift: {workerName}</Text>
      </View>

      {/* MENU SECTION */}
      <View style={styles.card}>
        <Text style={styles.orderTitle}>Menu & Ordering</Text>

        {/* PIZZA ITEM */}
        <View style={styles.menuRow}>
          <Text style={styles.menuItem}>🍕 Margherita</Text>
          <Text style={styles.priceTag}>{getPrice("Margherita Pizza")}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Order Pizza"
            onPress={() =>
              Alert.alert("Order Received", "Total: " + getPrice("Margherita Pizza"))
            }
            color="white"
          />
        </View>

        <View style={styles.divider} />

        {/* BURGER ITEM */}
        <View style={styles.menuRow}>
          <Text style={styles.menuItem}>🍔 Classic Burger</Text>
          <Text style={styles.priceTag}>{getPrice("Classic Burger")}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Order Burger"
            onPress={() =>
              Alert.alert("Order Received", "Total: " + getPrice("Classic Burger"))
            }
            color="white"
          />
        </View>
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
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
  },
  brand: { fontSize: 30, fontWeight: "900", color: "#2f25b9", textAlign: "center" },
  staff: { fontSize: 14, textAlign: "center", color: "#666", marginBottom: 5 },
  orderTitle: { fontSize: 22, fontWeight: "bold", color: "#d35400", marginBottom: 20 },
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  menuItem: { fontSize: 18, fontWeight: "600", color: "#333" },
  priceTag: { fontSize: 18, fontWeight: "700", color: "#2f25b9" },
  buttonWrapper: {
    backgroundColor: "#2f25b9",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
    overflow: "hidden",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
});