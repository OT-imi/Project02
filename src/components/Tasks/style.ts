import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  wrap: {
    left: 60,
    flexDirection: 'row',
    top: 20,
    gap: 20,
  },
  checkboxCtn: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  checkbox: {
    width: 40,
    height: 39,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    borderRadius: 10,
  },
  checked: {
    backgroundColor: '#2ca230ff',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  calendar: {
    fontSize: scaleFontSize(21),
    maxWidth: 70,
  },
  cldrText: { fontWeight: 700, opacity: 0.5, fontSize: scaleFontSize(17.5) },
  clock: {
    fontSize: scaleFontSize(21),
    maxWidth: 70,
  },
  clockTxt: {
    fontWeight: 700,
    fontSize: scaleFontSize(17.5),
    opacity: 0.5,
    shadowOpacity: 0.4,
  },
  lightThemeText: {
    color: '#180d27',
  },
  darkThemeText: {
    color: '#F1F1F1',
  },
  container: {
    flex: 1,
    flexGrow: 1,
  },
  editText: {
    alignSelf: 'center',
  },
  delText: {
    alignSelf: 'center',
  },
});

export default style;
