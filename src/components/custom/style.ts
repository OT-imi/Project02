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
  filterButton: {
    backgroundColor: '#f1f1f1',
    borderRadius: 35,
    width: 115,
    height: 41,
  },
  buttonText: {
    color: '#545454d9',
    fontSize: scaleFontSize(19),
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#545454',
    borderRadius: 4,
    paddingTop: 8,
  },
  activeButton: {
    backgroundColor: '#067ad8ff',
    borderRadius: 35,
    width: 115,
    height: 41,
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(19),
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#545454',
    borderRadius: 4,
    paddingTop: 8,
    fontFamily: 'Roboto',
  },
});
export default customStyle;
