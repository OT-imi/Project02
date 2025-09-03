import { Text, View } from 'react-native';
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
  return (
    <View style={[isThemeDark ? style.darkContainer : style.lightContainer]}>
      <View key={task.id} style={containerStyle}>
        <Text style={textTitleStyle}>{task.title}</Text>
        <View style={style.wrap}>
          <Text style={style.calendar}>📅</Text>
          <Text style={style.clock}>⏰</Text>
        </View>
        {/* <Text style={textDescStyle}>{task.description}</Text> */}
        <Text style={dateStyle}>{task.dueDate}</Text>
        <Text style={textCategoryStyle}>Category: {task.category}</Text>
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
      </View>
    </View>
  );
}
