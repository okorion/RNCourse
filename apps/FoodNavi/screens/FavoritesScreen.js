import { View, Text, StyleSheet } from "react-native";

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.message}>No favorites added yet!</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  message: {
    fontSize: 16,
    color: "white",
  },
});
