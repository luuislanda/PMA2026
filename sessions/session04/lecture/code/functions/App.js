import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg";
  const workerName = "Luis";

  const pizzaName = "Margherita";
  const burgerName = "Classic";

  // FUNCTION: Our Recipe Machine.
  const handleOrder = (dish) => {
    Alert.alert("Order Received", "The kitchen is now preparing: " + dish);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.brand}>{restaurantName}</Text>
        <Text style={styles.staff}>Staff on Shift: {workerName}</Text>
      </View>

      <View style={styles.orderCard}>
        <Text style={styles.orderTitle}>Make an Order</Text>
        <Text style={styles.description}>We are currently serving:</Text>

        <Text style={styles.menuItem}>Pizza: {pizzaName}</Text>
        <Text style={styles.menuItem}>Burger: {burgerName}</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Pizza"
            onPress={() => handleOrder("Margherita Pizza")}
            color="#2f25b9"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Burger"
            onPress={() => handleOrder("Classic Burger")}
            color="#e67e22"
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
  menuItem: {
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#000",
    fontSize: 15,
  },
  buttonWrapper: { width: "70%", height: 50, borderRadius: 20 },
});
