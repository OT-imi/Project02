import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import { useModalStore } from '../../state/useModalStore';
import { useTaskStore } from '../../state/useTaskStore';
import axios from 'axios';

const mainUrl =
  'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/Tasks';

function Newtask() {
  const isVisible = useModalStore(state => state.visible);
  const setIsVisible = useModalStore(state => state.setVisible);
  const addTask = useTaskStore(state => state.addTask);
  const title = useModalStore(state => state.title);
  const description = useModalStore(state => state.description);
  const titleChange = useModalStore(state => state.setTitle);
  const descriptionChange = useModalStore(state => state.setDescription);
  const resetFields = useModalStore(state => state.resetFields);

  const addNew = async () => {
    const response = await axios.post(mainUrl, {
      title,
      description,
      completed: false,
      date: new Date().toISOString(),
      category: 'General',
    });
    const newTask = response.data;
    addTask(newTask);
    setIsVisible();
    console.log('here!!!!!!!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
      <Modal
        visible={isVisible}
        onRequestClose={setIsVisible}
        animationType="fade"
        transparent
        // style={style.modalContent}
      >
        <View style={style.modalView}>
          <View style={style.modalContent}>
            <View style={style.dashbar} />
            <Text style={style.boldText}>Create New Task</Text>
            <View style={style.titleWrap}>
              <Text style={style.titleLabel}>Task Title *</Text>
              <TextInput
                placeholder="Enter task title..."
                style={style.taskTitle}
                value={title}
                onChangeText={titleChange}
              />
            </View>
            <View style={style.descriptionWrap}>
              <Text style={style.descriptionLabel}>Description</Text>
              <TextInput
                placeholder="Add description(optional)"
                style={style.taskDescription}
                value={description}
                onChangeText={descriptionChange}
              />
            </View>
            <View style={style.buttonWrap}>
              <Pressable style={style.cancelButton} onPress={setIsVisible}>
                <Text style={style.cancelButtonText}>Cancel</Text>
              </Pressable>
              <TouchableOpacity
                style={style.createTaskButton}
                onPress={() => {
                  addNew();
                  resetFields();
                }}
              >
                <Text style={style.createTaskButtonText}>Create Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default Newtask;
