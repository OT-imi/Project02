import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import { useModalStore } from '../../../../state/useModalStore';
import { useCreateTask } from '../../../mutations/useModifyTask';
import { useThemeStore } from '../../../../state/useThemeStore';

function Newtask() {
  const {
    visible: isVisible,
    setVisible: setIsVisible,
    title,
    description,
    setTitle: titleChange,
    setDescription: descriptionChange,
    resetFields,
  } = useModalStore();

  const { mutate: handleCreateTask, isPending } = useCreateTask();
  const addNew = async () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Your new task needs a title!');
      return;
    }
    handleCreateTask({
      title,
      description,
      category: 'General',
    });
    setIsVisible();
  };
  const theme = useThemeStore(state => state.theme);
  const dark = theme === 'dark';
  const curTextStyle = dark ? style.darkThemeText : style.lightThemeText;
  const handleClickCancel = () => {
    setIsVisible();
    resetFields();
  };
  const handleClickCreate = () => {
    addNew();
    resetFields();
  };
  return (
    <ScrollView showsVerticalScrollIndicator>
      <Modal
        visible={isVisible}
        onRequestClose={setIsVisible}
        animationType="fade"
        transparent
      >
        <View style={style.modalView}>
          <View style={dark ? style.darkModalContent : style.lightModalContent}>
            <View style={[style.dashbar]} />
            <Text style={[curTextStyle, style.boldText]}>Create New Task</Text>
            <View style={style.titleWrap}>
              <Text style={[curTextStyle, style.titleLabel]}>Task Title *</Text>
              <TextInput
                placeholder="Enter task title..."
                style={[curTextStyle, style.taskTitle]}
                value={title}
                onChangeText={titleChange}
                placeholderTextColor={dark ? '#FFFFFF' : '#000000'}
              />
            </View>
            <View style={style.descriptionWrap}>
              <Text style={[curTextStyle, style.descriptionLabel]}>
                Description
              </Text>
              <TextInput
                placeholder="Add description(optional)"
                style={[curTextStyle, style.taskDescription]}
                value={description}
                onChangeText={descriptionChange}
                placeholderTextColor={dark ? '#FFFFFF' : '#000000'}
              />
            </View>
            <View style={style.buttonWrap}>
              <Pressable
                style={style.cancelButton}
                onPress={() => handleClickCancel()}
              >
                <Text style={style.cancelButtonText}>Cancel</Text>
              </Pressable>
              <TouchableOpacity
                style={style.createTaskButton}
                onPress={() => handleClickCreate()}
              >
                <Text style={style.createTaskButtonText}>
                  {isPending ? 'Creating ...' : 'Create Task'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default Newtask;
