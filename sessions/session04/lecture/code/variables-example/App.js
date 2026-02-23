import { View, Text, StyleSheet } from "react-native";

export default function App() {

  const restaurantName = "PizzBurg";
  const workerName = "Luis";
  const status = "UNDER CONSTRUCTION 🚧";

  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>

        {/* Here we use the variable we declared above */}
        <Text style={styles.brand}>{restaurantName}</Text>

        {/* We can also use text variables inside Components   */}
        <Text style={styles.staff}>Staff on Shift: {workerName}</Text>

      </View>

      <View style={styles.warningCard}>


        <Text style={styles.warning}>{status}</Text>


        <Text style={styles.description}>
          This App is still under construction, soon you'll be able to make
          orders through it.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    padding: 20,
  },
  titleCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
    margin: 20,
  },
  warningCard: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  brand: { fontSize: 30, fontWeight: "900", color: "#2f25b9", marginBottom: 5 },
  staff: { fontSize: 16, color: "#000000" },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#eee",
    marginBottom: 20,
  },
  warning: { fontSize: 20, fontWeight: "bold", color: "#d35400" },
  description: { textAlign: "center", marginTop: 10, color: "#000000" },
});
