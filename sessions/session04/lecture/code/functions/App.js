import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function App() {
  const restaurantName = "PizzBurg";
  const workerName = "Luis";

  const pizzaName = "Margherita";
  const burgerName = "Classic";

  // 1. A Function to calculate Price: Calculates a price but doesn't show it on screen yet
  function getPrice(dish) {
    if (dish === "Margherita Pizza") {
      return "85 DKK";
    } else {
      return "95 DKK";
    }
  }

  // 2. An Action Function: Triggered by the button
  const handleOrder = (dish) => {
    // We call our price function here and save the return on the 'price' variable
    const price = getPrice(dish);

    // This shows up in your VS Code Terminal, it's for you only
    console.log("--- New Order Received ---");
    console.log("Item: " + dish);
    console.log("Price: " + price);
    console.log("Handled by: " + workerName);

    // This shows up on the phone
    Alert.alert("Order Received", dish + " will cost " + price);
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

        <Text style={styles.menuItem}>🍕 {pizzaName}</Text>
        <Text style={styles.menuItem}>🍔 {burgerName}</Text>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Pizza"
            onPress={() => handleOrder("Margherita Pizza")}
            color="white"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Order Burger"
            onPress={() => handleOrder("Classic Burger")}
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
    justifyContent: "center"
  },
  titleCard: {
    backgroundColor: "#fff",
    padding: 30,
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
  brand: { fontSize: 30, fontWeight: "900", color: "#2f25b9", marginBottom: 5 },
  staff: { fontSize: 15, color: "#000" },
  orderTitle: { fontSize: 20, fontWeight: "bold", color: "#d35400" },
  menuItem: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "600"
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#666",
    fontSize: 14,
  },
  buttonWrapper: { 
    width: "100%", 
    marginTop: 15,
    borderRadius: 10,
    overflow: "hidden", // Helps rounded corners show on some platforms! In my case it wasnt showing
    backgroundColor: '#2f25b9'
  },
});