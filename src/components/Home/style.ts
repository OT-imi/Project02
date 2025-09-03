import { Dimensions, StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';
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
  lightContainer: {
    flex: 1,
    // backgroundColor: '#D3D3D3',
  },
  darkContainer: {
    flex: 1,
    // backgroundColor: '#000000e6',
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
    backgroundColor: '#3d0cdeff',
    paddingVertical: 2,
    paddingHorizontal: horizontalScale(25),
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 64,
    marginTop: 20,
  },
  retryBtnText: {
    fontSize: 13,
    borderRadius: 10,
    borderTopStartRadius: 0.5,
    paddingTop: 10,
  },
  lightTaskCtn: {
    backgroundColor: '#FFFFFF',
    color: '#180d27',
    margin: 20,
    height: 'auto',
    objectFit: 'cover',
    borderRadius: 10,
  },
  darkTaskCtn: {
    backgroundColor: '#545454',
    color: 'black',
    margin: 20,
    borderRadius: 10,
    height: 'auto',
  },

  textTitleStyle: {
    fontSize: scaleFontSize(24),
    lineHeight: 30,
    fontWeight: 'bold',
    left: 50,
    maxWidth: 170,
    top: 5,
  },
  catgry: {
    textAlign: 'right',
    bottom: 5,
    right: 5,
    verticalAlign: 'bottom',
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
