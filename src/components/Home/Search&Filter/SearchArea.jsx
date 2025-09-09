import { Image, TextInput } from 'react-native';
import searchIcon from '../../../assets/images/search.png';
import style from './style';
import { View } from 'react-native';
import { useThemeStore } from '../../../state/useThemeStore';
import Sort from '../Search&Filter/Sort';

export default function SearchArea() {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';

  return (
      <View
        style={[
          isThemeDark ? style.darkThmSearchArea : style.lightThmSearchArea,
        ]}
      >
        <Image source={searchIcon} style={style.searchImg} />
        <TextInput
          keyboardType="web-search"
          inputMode="text"
          style={isThemeDark ? style.darkTextArea : style.lightTextArea}
          placeholder="Search Your tasks..."
          placeholderTextColor={isThemeDark ? '#D3D3D3' : '#000000'}
        />
      </View>
  );
}
