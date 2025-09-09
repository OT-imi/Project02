import { Dimensions, StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const { width, height } = Dimensions.get('window');
const FAB_SIZE = Math.min(width, height) * 0.12;

const style = StyleSheet.create({
  loadingScreen: {
    justifyContent: 'center',
    gap: 15,
  },

  loadingView: { top: 60 },
  loadingText: {
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '100'),
    fontSize: scaleFontSize(25),
    opacity: 0.6,
  },
  lightWrapCtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    gap: 10,
    paddingBottom: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkWrapCtn: {
    flex: 1,
    backgroundColor: '#000000da',
    gap: 10,
    paddingBottom: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caution: {
    bottom: 10,
    textAlign: 'center',
    fontSize: scaleFontSize(34),
  },
  boldErrTextLight: {
    fontWeight: 700,
    maxWidth: 250,
    textAlign: 'center',
    fontSize: scaleFontSize(24),
    color: '#000000',
  },
  boldErrTextDark: {
    fontWeight: 700,
    maxWidth: 250,
    textAlign: 'center',
    fontSize: scaleFontSize(24),
    color: '#ffffff',
  },
  lightErrText: {
    color: '#180d27',
    textAlign: 'center',
    fontSize: scaleFontSize(17),
    opacity: 0.5,
    fontWeight: 'bold',
    maxWidth: 300,
  },
  darkErrText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: scaleFontSize(17),
    opacity: 0.4,
    fontWeight: 'bold',
    maxWidth: 300,
  },
  lightContainer: {
    flex: 1,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#000000da',
  },
  taskContainer: {
    top: 20,
    backgroundColor: '#D3D3D3',
  },
  addTaskButton: {
    width: 80,
    height: 80,
    backgroundColor: '#4560d4ff',
    elevation: 5,
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: FAB_SIZE / 1,
  },
  addTaskButtonText: {
    color: '#F1F1F1',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: FAB_SIZE / 1.3,
    fontWeight: 'bold',
  },

  lightThemeText: {
    color: '#180d27',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
  retryBtn: {
    backgroundColor: '#0532fcaf',
    paddingHorizontal: horizontalScale(18),
    borderRadius: 10,
    alignItems: 'center',
    height: 45,
    top: 12,
  },
  retryBtnText: {
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Inter', '600'),
    borderRadius: 10,
    borderTopStartRadius: 0.5,
    paddingTop: 9,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  lightTaskCtn: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: horizontalScale(15),
    marginVertical: verticalScale(5.5),
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#fefcfcff',
  },
  darkTaskCtn: {
    backgroundColor: '#545454',
    marginHorizontal: horizontalScale(15),
    marginVertical: verticalScale(5.5),
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#545454',
  },
  textTitleStyle: {
    fontSize: scaleFontSize(24),
    lineHeight: 30,
    fontWeight: 'bold',
    left: 60,
    maxWidth: 170,
    top: 15,
  },
  catgry: {
    textAlign: 'right',
    right: 5,
    textAlignVertical: 'bottom',
    fontSize: scaleFontSize(15),
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 15,
  },
  dateStyle: {
    left: 50,
  },
  editButton: {
    width: 45,
    height: 45,
    backgroundColor: '#cee0f6ff',
    position: 'absolute',
    right: 73,
    top: 8,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: FAB_SIZE,
  },
  deleteButton: {
    width: 45,
    height: 45,
    backgroundColor: '#f8cacadc',
    position: 'absolute',
    right: 20,
    top: 8,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: FAB_SIZE,
  },
});
export default style;
