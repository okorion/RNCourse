import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
        <View style={styles.appContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Yor course goal!"
              value={enteredGoalText}
              onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.goalsContainer}>
            <ScrollView>
              {courseGoals.map((goal) => (
                <Text style={styles.goalItem} key={goal}>
                  {goal}
                </Text>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
