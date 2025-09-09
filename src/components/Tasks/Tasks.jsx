import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../custom/Button';
import style from './style';
import { useThemeStore } from '../../state/useThemeStore';

export default function Tasks({
  task,
  containerStyle,
  textCategoryStyle,
  textDescStyle,
  textTitleStyle,
  dateStyle,
  editButtonStyle,
  deleteButtonStyle,
}) {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;

  let completed = task.completed;
  return (
    <View style={style.container}>
      <View key={task.id} style={containerStyle}>
        <Text style={[textTitleStyle, completed && style.completed]}>
          {task.title}
        </Text>
        <TouchableOpacity style={style.checkboxCtn}>
          <View style={[style.checkbox, completed && style.checked]} />
        </TouchableOpacity>
        <View style={style.wrap}>
          <View>
            <Text style={style.calendar}>📅</Text>
            <Text style={[curTextStyle, style.cldrText]}>{'Today'}</Text>
          </View>
          <View>
            <Text style={style.clock}>⏰</Text>
            <Text style={[curTextStyle, style.clockTxt]}>{'2 hours ago'}</Text>
          </View>
        </View>
        {/* <Text style={textDescStyle}>{task.description}</Text> */}
        {/* <Text style={dateStyle}>{task.dueDate}</Text> */}
        <Button
          label={'✏️'}
          buttonStyle={editButtonStyle}
          textStyle={style.editText}
        />
        <Button
          label={'🗑️'}
          buttonStyle={deleteButtonStyle}
          textStyle={style.delText}
        />
        <Text style={textCategoryStyle}>Category: {task.category}</Text>
      </View>
    </View>
  );
}
