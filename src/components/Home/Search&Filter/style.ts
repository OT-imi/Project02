import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  buttonsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 18,
    alignSelf: 'center',
    right: 20,
  },
  searchImg: {
    maxWidth: 22,
    maxHeight: 22,
    top: 17,
    left: 15,
  },
  lightTextArea: {
    flex: 1,
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    fontSize: scaleFontSize(19),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  darkTextArea: {
    flex: 1,
    color: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    fontSize: scaleFontSize(19),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  darkThmSearchArea: {
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#545454',
    borderRadius: 35,
    margin: 19,
  },
  lightThmSearchArea: {
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#d3d3d3ff',
    borderRadius: 35,
    margin: 19,
  },
});
export default style;
