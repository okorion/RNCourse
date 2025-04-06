import { StyleSheet } from "react-native";
import { Text } from "react-native";

function GoalItem(props) {
  return <Text style={styles.goalItem}>{props.text}</Text>;
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
