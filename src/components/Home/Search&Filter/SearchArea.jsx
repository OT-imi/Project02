import { Text, TextInput } from 'react-native';
import style from './style';
import { View } from 'react-native';
import { useThemeStore } from '../../../state/useThemeStore';
import { useTaskStore } from '../../../state/useTaskStore';
export default function SearchArea() {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const userSearchVal = useTaskStore(state => state.searchQuery);
  const setSearchValue = useTaskStore(state => state.setSearchQuery);

  return (
    <View
      style={[isThemeDark ? style.darkThmSearchArea : style.lightThmSearchArea]}
    >
      <Text style={style.searchImg}>🔍</Text>
      <TextInput
        keyboardType="web-search"
        inputMode="text"
        value={userSearchVal}
        style={isThemeDark ? style.darkTextArea : style.lightTextArea}
        placeholder="Search tasks..."
        placeholderTextColor={isThemeDark ? '#D3D3D3' : '#000000'}
        onChangeText={setSearchValue}
      />
    </View>
  );
}
