import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={{ flex: 1 }}>
        <View style={styles.appContainer}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
          {modalIsVisible && (
            <GoalInput
              onAddGoal={addGoalHandler}
              onCancel={endAddGoalHandler}
              visible={modalIsVisible}
            />
          )}
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              alwaysBounceVertical={false}
            />
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

  goalsContainer: {
    flex: 5,
  },
});
