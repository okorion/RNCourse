export const TestButton = () => {
  return (
    <Button
      title="Test"
      onPress={() => {
        console.log("Test button pressed");
      }}
    />
  );
};
