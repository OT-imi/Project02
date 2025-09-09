import { Text, TouchableOpacity } from 'react-native';
import customStyle from './style';
import { useTaskStore } from '../../state/useTaskStore';
import { useThemeStore } from '../../state/useThemeStore';

export default function OtherButton({ filterName, customstyle }) {
  const filterType = useTaskStore(state => state.filterType);
  const setFilterType = useTaskStore(state => state.setFilterType);
  const handleSelectFilter = filter => {
    filter = filterName;
    setFilterType(filter);
    console.log('current filter: ', filterType);
  };
  const theme = useThemeStore(state => state.theme);
  const dark = theme === 'dark';

  let selected = filterType === filterName;
  return (
    <TouchableOpacity
      style={[
        selected
          ? customStyle.activeButton
          : dark
          ? customStyle.darkFilterButton
          : customStyle.lightFilterButton,
        customstyle,
      ]}
      onPress={() => handleSelectFilter(filterName)}
    >
      <Text
        style={selected ? customStyle.activeButtonText : customStyle.buttonText}
      >
        {filterName}
      </Text>
    </TouchableOpacity>
  );
}
