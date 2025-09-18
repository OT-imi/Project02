import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../custom/Button';
import style from './style';
import { useThemeStore } from '../../state/useThemeStore';
import { useDeleteTask, useToggleTaskStatus } from '../mutations/useModifyTask';
import tickIcon from '../../assets/images/tickVectorImg.png';
import { useModalStore } from '../../state/useModalStore';

export default function Tasks({
  task,
  containerStyle,
  textCategoryStyle,
  textTitleStyle,
  editButtonStyle,
  deleteButtonStyle,
}) {
  const deleteTask = useDeleteTask();
  function confirmDelete() {
    Alert.alert(
      'Delete Task?',
      `Are you sure you want to delete?"${task.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteTask.mutate(task.id),
        },
      ],
    );
  }

  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;
  const toggleTask = useToggleTaskStatus();

  function parseBackendDate(raw) {
    if (!raw) return null;
    return new Date(raw.replace('OT', ' ').replace(/\.vy$/, ''));
  }
  function formatDueDate(date) {
    if (!date) return 'Tomorrow';
    const today = new Date();
    const tomorrow = new Date();
    const yesterday = new Date();

    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
  function formatDateCreated(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1)
      return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
    if (diffDays < 1)
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  }

  const dueDate = parseBackendDate(task?.dueDate);
  const dateCreated = parseBackendDate(task?.createdAt);
  const personalTask = task.category === 'Personal';
  const workTask = task.category === 'Work';
  let completed = task.completed;

  const editVisiblity = useModalStore(state => state.setIsVisible);
  return (
    <View style={style.container}>
      <View key={task.id} style={containerStyle}>
        <Text style={[textTitleStyle, completed && style.completed]}>
          {task.title}
        </Text>
        <TouchableOpacity
          style={style.checkboxCtn}
          onPress={() => toggleTask.mutate(task.id)}
        >
          <View style={[style.checkbox, completed && style.checked]}>
            {completed && <Image source={tickIcon} style={style.tickStyle} />}
          </View>
        </TouchableOpacity>
        <View style={style.wrap}>
          {completed ? (
            <View>
              <Text style={style.calendar}>{'✅'}</Text>
              <Text style={[curTextStyle, style.complete]}>{'Completed'}</Text>
            </View>
          ) : (
            <View>
              <Text style={style.calendar}>📅</Text>
              <Text style={[curTextStyle, style.cldrText]}>
                {formatDueDate(dueDate)}
              </Text>
            </View>
          )}
          <View>
            <Text style={style.clock}>⏰</Text>
            <Text style={[curTextStyle, style.clockTxt]}>
              {formatDateCreated(dateCreated)}
            </Text>
          </View>
        </View>
        <Button
          label={'✏️'}
          buttonStyle={editButtonStyle}
          textStyle={style.editText}
          onPress={() => editVisiblity()}
        />
        <Button
          label={'🗑️'}
          buttonStyle={deleteButtonStyle}
          textStyle={style.delText}
          onPress={() => confirmDelete()}
        />
        <Text style={textCategoryStyle}>{`${
          personalTask ? '📌' : workTask ? '💼' : '🏷️'
        }  ${task.category}`}</Text>
      </View>
    </View>
  );
}
