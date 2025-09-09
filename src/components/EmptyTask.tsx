import { Pressable, Text, View } from 'react-native';

export default function Empty() {
  return (
    <View>
      <Text>📝</Text>
      <Text>No Tasks yet</Text>
      <Text>Tap the + button to create your fiirst task and get organized</Text>
      <Pressable>
        <Text>Create First Task</Text>
      </Pressable>
    </View>
  );
}
