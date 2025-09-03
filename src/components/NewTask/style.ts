import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.59)',
    bottom: 0,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    marginTop: verticalScale(240),
    gap: 20,
    bottom: 0,
    borderRadius: 20,
    height: horizontalScale(500),
  },
  boldText: {
    fontSize: scaleFontSize(30),
    fontFamily: getFontFamily('Nunito', '700'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  createTaskButton: {
    backgroundColor: '#5a74f5ff',
    width: verticalScale(115),
    height: horizontalScale(55),
    paddingVertical: verticalScale(10),
    marginHorizontal: horizontalScale(5),
    borderRadius: 10,
  },
  createTaskButtonText: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scaleFontSize(22),
  },
  cancelButton: {
    backgroundColor: '#D3D3D3',
    backfaceVisibility: 'visible',
    width: verticalScale(115),
    height: horizontalScale(55),
    paddingVertical: verticalScale(10),
    marginHorizontal: horizontalScale(5),
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#000000',
    alignSelf: 'center',
    fontWeight: 'bold',
    opacity: 0.55,
    fontSize: scaleFontSize(22),
  },
  titleLabel: { opacity: 0.6, fontWeight: 'bold', fontSize: scaleFontSize(15) },
  taskTitle: {
    borderColor: '#D3D3D3',
    borderWidth: 0.9,
    borderRadius: 9,
    marginRight: 60,
    height: verticalScale(40),
    padding: 15,
    fontSize: scaleFontSize(16.5),
    fontWeight: 'condensedBold',
  },
  descriptionLabel: {
    opacity: 0.6,
    fontWeight: 'bold',
    fontSize: scaleFontSize(15),
  },
  taskDescription: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 9,
    marginRight: 60,
    height: verticalScale(75),
    fontSize: scaleFontSize(16.5),
    fontFamily: getFontFamily('Nunito', '200'),
    verticalAlign: 'top',
    padding: 15,
  },
  buttonWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    top: 15,
  },
  descriptionWrap: { left: 30, gap: 10 },
  titleWrap: { left: 30, gap: 10 },
  dashbar: {
    alignSelf: 'center',
    width: 50,
    height: 5,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginVertical: verticalScale(7),
  },
});
export default style;
