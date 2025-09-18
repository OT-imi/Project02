import {
  View,
  TextInput,
  Modal,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useModalStore } from '../../../../state/useModalStore';
import style from './style';
import { useThemeStore } from '../../../../state/useThemeStore';
import Button from '../../../custom/Button';
import { useStore } from '../../../../state/useStore';
import pointerDown from '../../../../assets/images/pointerdown.png';
import pointerUp from '../../../../assets/images/pointerup.png';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function UpdateTask() {
  const {
    isVisible,
    title,
    description,
    setIsVisible,
    setField,
    showCategory,
    setShowCategory,
  } = useModalStore();
  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Your task needs to have a title');
      return;
    }
    setIsVisible();
  };
  const categories = [
    { name: 'Personal', ctg: 'P' },
    { name: 'Work', ctg: 'W' },
    { name: 'Design', ctg: 'D' },
    { name: 'General', ctg: 'G' },
  ];
  const {
    category: categoryType,
    setCategory,
    dueDate,
    setDueDate,
    showDatePicker,
    setShowDatePicker,
  } = useStore();

  function formatDate(date: Date) {
    const formatted = date.toISOString().split('T')[0];
    return formatted;
  }
  const theme = useThemeStore(state => state.theme);
  const dark = theme === 'dark';
  const close = useModalStore(state => state.setIsVisible);
  const curTextStyle = dark ? style.darkText : style.brightText;
  const toggleCategory = (ctgry: string) => {
    setCategory(ctgry);
    setShowCategory();
  };
  const filteredCTG = categories.filter(c => {
    return c.name !== categoryType;
  });
  return (
    <Modal visible={isVisible} animationType="fade" transparent>
      <View style={style.modalView}>
        <View style={dark ? style.darkModalContent : style.lightModalContent}>
          <View style={style.dashbar} />
          <Text style={[style.headerTxt, curTextStyle]}>Edit Task</Text>
          <View style={style.inputWrap}>
            {title.trim() && (
              <Text style={[curTextStyle, style.label]}>Title</Text>
            )}
            <TextInput
              placeholder="Title"
              placeholderTextColor={dark ? '#FFFFFF' : '#180d27'}
              value={title}
              onChangeText={text => setField('title', text)}
              style={style.titleInput}
              maxLength={40}
            />
          </View>
          <View style={style.inputWrap}>
            {description.trim() && (
              <Text style={[curTextStyle, style.label]}>Description</Text>
            )}
            <TextInput
              placeholder="Description"
              placeholderTextColor={dark ? '#FFFFFF' : '#180d27'}
              value={description}
              onChangeText={text => setField('description', text)}
              style={[style.descInput, curTextStyle]}
              multiline
            />
          </View>

          <TouchableOpacity style={style.inputWrap} onPress={setShowDatePicker}>
            {dueDate && (
              <Text style={[curTextStyle, style.label]}>Due Date</Text>
            )}
            <TextInput
              placeholder="Due Date"
              placeholderTextColor={dark ? '#FFFFFF' : '#180d27'}
              style={[style.date, curTextStyle]}
              onChangeText={text => setField('dueDate', text)}
              editable={false}
              pointerEvents="none"
              value={formatDate(dueDate)}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dueDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShowDatePicker();
                if (selectedDate) {
                  setDueDate(selectedDate);
                }
              }}
            />
          )}
          <View style={style.dropInputWrap}>
            <Text style={[curTextStyle, style.label]}>Category</Text>
            <TouchableOpacity
              style={[style.dropInput, style.ctgryItems]}
              onPress={setShowCategory}
            >
              <Text style={[style.dropInputTxt, curTextStyle]}>
                {categoryType}
              </Text>
              {showCategory ? (
                <Image
                  source={pointerUp}
                  alt="Close drop-down"
                  style={style.pointer}
                />
              ) : (
                <Image
                  source={pointerDown}
                  alt="Open drop-down"
                  style={style.pointer}
                />
              )}
            </TouchableOpacity>
            {showCategory &&
              filteredCTG.map(c => (
                <TouchableOpacity
                  key={c.ctg}
                  onPress={() => toggleCategory(c.name)}
                  style={style.dropInput}
                >
                  <Text style={[style.dropInputTxt, curTextStyle]}>
                    {c.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
          <View style={style.btnCtn}>
            <Button
              label={'Update Task'}
              buttonStyle={style.updBtn}
              textStyle={style.btnText}
              onPress={handleSave}
            />
            <Button
              label={'Cancel'}
              buttonStyle={style.cancelBtn}
              textStyle={style.btnText}
              onPress={close}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
