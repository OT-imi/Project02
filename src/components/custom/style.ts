import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

const customStyle = StyleSheet.create({
  allBtn: {
    maxWidth: 70,
  },
  pendBtn: {
    maxWidth: 110,
  },
  cmpBtn: {
    maxWidth: 120,
  },
  lightFilterButton: {
    backgroundColor: '#d6d2d25c',
    borderRadius: 35,
    width: 125,
    height: 41,
  },
  darkFilterButton: {
    backgroundColor: '#54545481',
    borderRadius: 35,
    width: 125,
    height: 41,
  },
  buttonText: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#545454',
    borderRadius: 4,
    paddingTop: 8,
  },
  lightThemeText: {
    color: '#180d27',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
  activeButton: {
    backgroundColor: '#067ad8ff',
    borderRadius: 35,
    width: 125,
    height: 41,
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#545454',
    borderRadius: 4,
    paddingTop: 8,
    fontFamily: 'Roboto',
  },
  darkCtn: {
    // backgroundColor: '#000000e6',
  },
  lightCtn: {
    backgroundColor: '#FFFFFF',
  },
  numTxt: {
    textAlign: 'center',
    color: '#ffffff',
  },
  numberWrap: {
    backgroundColor: '#e40808fc',
    alignSelf: 'flex-end',
    width: 38,
    height: 20,
    borderRadius: 12,
    bottom: 40,
    left: 10,
  },
  btnWrp: {
    // flexDirection: 'row',
  },
});
export default customStyle;
