import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useThemeStore } from '../../state/useThemeStore';
import style from './style';
// import profileImage from '../../assets/images/default_profile.png';
import lightThemeImage from '../../assets/images/light.png';
import darkThemeImage from '../../assets/images/nightbright.png';

export default function Header() {
  const handlePress = useThemeStore(state => state.toggleTheme);
  const theme = useThemeStore(state => state.theme);
  const darkTheme = theme === 'dark';
  return (
    <View
      style={[
        style.headerContainer,
        darkTheme ? style.darkHContainer : style.lightHContainer,
      ]}
    >
      <Text style={darkTheme ? style.darkThemeText : style.lightThemeText}>
        My Tasks
      </Text>
      <View style={style.imageContainer}>
        <View
          style={darkTheme ? style.imageWrapperDark : style.imageWrapperLight}
        >
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={darkTheme ? lightThemeImage : darkThemeImage}
              style={style.themeImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
