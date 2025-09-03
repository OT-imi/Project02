import { Text, TouchableOpacity } from 'react-native';

export default function Button({
  label,
  onPress,
  buttonStyle,
  textStyle,
  ...props
}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
