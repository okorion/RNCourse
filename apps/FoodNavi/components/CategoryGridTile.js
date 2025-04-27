import { Pressable, View, Text } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
