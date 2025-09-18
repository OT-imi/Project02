import { TouchableOpacity, Text, View } from 'react-native';
import { useModalStore } from '../../state/useModalStore';
import style from './style';
import { useThemeStore } from '../../state/useThemeStore';

export default function Empty() {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;
  const handleOpenModal = useModalStore(state => state.setVisible);

  return (
    <View style={style.empCtn}>
      <Text style={style.writetxt}>📝</Text>
      <Text style={[curTextStyle, style.boldTxt]}>No Tasks yet</Text>
      <Text style={[curTextStyle, style.detailsTxt]}>
        Tap the + button to create your first task and get organized!
      </Text>
      <TouchableOpacity onPress={handleOpenModal} style={style.crtfirst}>
        <Text style={style.buttonTxt}>Create First Task</Text>
      </TouchableOpacity>
    </View>
  );
}
