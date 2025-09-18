import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  buttonsContainer: {
    // flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 18,
    alignSelf: 'center',
    right: 10,
    paddingBottom: 23,
  },
  searchImg: {
    top: 9,
    left: 15,
    fontSize: scaleFontSize(25),
  },
  lightTextArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  darkTextArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  darkThmSearchArea: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#545454',
    borderRadius: 35,
    margin: 25,
  },
  lightThmSearchArea: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#d6d2d25c',
    borderRadius: 35,
    margin: 25,
  },
});
export default style;
