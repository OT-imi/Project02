import { Dimensions, StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const { width, height } = Dimensions.get('window');
const FAB_SIZE = Math.min(width, height) * 0.12; // ~12% of smaller dimension

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 25,
    borderBottomWidth: 0.2,
  },
  lightHContainer: {
    borderColor: '#180d27',
    backgroundColor: '#ffffff',
    color: '#180d27',
    textAlign: 'center',
  },
  darkHContainer: {
    borderColor: '#ffffffff',
    backgroundColor: '#000000e6',
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  lightThemeText: {
    fontWeight: 'bold',
    color: '#180d27',
    fontFamily: getFontFamily('Nunito', '700'),
    fontSize: scaleFontSize(30),
  },
  darkThemeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(30),
  },
  imageWrapperLight: {
    borderRadius: FAB_SIZE / 2,
    backgroundColor: '#d3d3d386',
    width: 40,
    height: 40,
    alignItems: 'center'
  },
  imageWrapperDark: {
    borderRadius: FAB_SIZE / 2,
    backgroundColor: '#F1F1F1',
    width: 40,
    height: 40,
  },
  themeImg: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    top: 1,
  },
});
export default style;
