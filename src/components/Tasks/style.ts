import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  wrap: {
    left: 60,
    flexDirection: 'row',
    top: 20,
    gap: 20,
    paddingBottom: 25,
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
    backgroundColor: '#109514ff',
  },
  tickStyle: {
    top: 10,
    height: 12,
    width: 15,
    // alignSelf: 'center',
    left: 8,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  calendar: {
    fontSize: scaleFontSize(21),
    maxWidth: 70,
  },
  cldrText: {
    fontWeight: 700,
    opacity: 0.5,
    fontSize: scaleFontSize(17.5),
    maxWidth: 120,
  },
  complete: {
    fontWeight: 700,
    opacity: 0.5,
    fontSize: scaleFontSize(17.5),
  },
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
  empCtn: {
    alignItems: 'center',
    paddingTop: 150,
    gap: 10,
  },
  writetxt: {
    fontSize: scaleFontSize(70),
  },
  boldTxt: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(21),
    textAlign: 'center',
  },
  detailsTxt: {
    fontSize: scaleFontSize(16),
    fontWeight: 500,
    opacity: 0.5,
    maxWidth: 240,
    paddingBottom: 10,
    textAlign: 'center',
    lineHeight: 20,
  },
  crtfirst: {
    backgroundColor: '#0532fcaf',
    borderRadius: 10,
    width: 133,
  },
  buttonTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 800,
    fontSize: scaleFontSize(16),
  },
});

export default style;
