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
        <View>
          <TextInput placeholder="Yor course goal!" />
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
    padding: 30,
  },
});
