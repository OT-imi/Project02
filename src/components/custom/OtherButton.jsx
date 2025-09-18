import { Text, TouchableOpacity, View } from 'react-native';
import customStyle from './style';
import { useTaskStore } from '../../state/useTaskStore';
import { useThemeStore } from '../../state/useThemeStore';

export default function OtherButton({ filterName, customstyle, numHeader }) {
  const filterType = useTaskStore(state => state.filterType);
  const setFilterType = useTaskStore(state => state.setFilterType);
  const handleSelectFilter = filter => {
    filter = filterName;
    setFilterType(filter);
  };
  const theme = useThemeStore(state => state.theme);
  const dark = theme === 'dark';

  let selected = filterType === filterName;
  return (
    <View style={customStyle.btnWrp}>
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
          style={[
            selected
              ? customStyle.activeButtonText
              : dark
              ? [customStyle.buttonText, customStyle.darkThemeText]
              : [customStyle.buttonText, customStyle.lightThemeText],
          ]}
        >
          {filterName}
        </Text>
        <TouchableOpacity style={customStyle.numberWrap}>
          <Text style={[customStyle.numTxt]}>{numHeader}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
