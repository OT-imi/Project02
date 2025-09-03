import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  wrap: {
    left: 50,
    flexDirection: 'row',
    top: 10,
    gap: 50,
  },
  calendar: {
    fontSize: scaleFontSize(21),
  },
  clock: {
    fontSize: scaleFontSize(21),
  },
  lightThemeText: {
    color: '#180d27',
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(30),
  },
  darkThemeText: {
    color: '#e5d9f1',
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(30),
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#e5e2e2ff',
  },
  darkContainer: {
    flexGrow: 1,
    backgroundColor: '#000000e4',
  },
  editText: {
    alignSelf: 'center',
  },
  delText: {
    alignSelf: 'center',
  },
});

export default style;
