import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Yor course goal!" />
          <Button title="Add Goal" />
        </View>
        <View>
          <Text>List of Goals</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
