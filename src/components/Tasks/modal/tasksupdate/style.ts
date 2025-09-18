import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../../assets/styles/scaling';
import { getFontFamily } from '../../../../assets/fonts/helper';

const style = StyleSheet.create({
  modalView:{ backgroundColor: 'rgba(0,0,0,0.59)'},
  lightModalContent: { marginTop: verticalScale(170), gap: 15, bottom:0, borderRadius: 20, height: horizontalScale(520),backgroundColor: '#FFFFFF', padding: 15 },
  darkModalContent: { marginTop: verticalScale(170), gap: 15, bottom:0, borderRadius: 20, height: horizontalScale(520),backgroundColor: '#363636ff', padding: 15 },
  brightText:{color: '#180d27'},
  darkText:{color:'#FFFFFF'},
  dashbar:{alignSelf: 'center', width: 70, height:5, borderRadius: 8, backgroundColor: '#ccc', marginVertical: verticalScale(1)},
  headerTxt:{ fontSize: scaleFontSize(28), textAlign: 'center', fontFamily: getFontFamily('Nunito', '600'), fontWeight: 'bold'},
  inputWrap: { left: 30, },
  titleInput:{borderColor: '#D3D3D3', borderWidth: 0.9, padding: 15,marginRight: 60},
  descInput:{borderColor: '#D3D3D3', borderWidth: 0.9, padding: 15,marginRight: 60},
  dateWrap: { left: 30, gap: 10 },
  date:{borderColor: '#D3D3D3', borderWidth: 0.9, padding: 15,marginRight: 60},
  label:{fontSize: scaleFontSize(15), fontWeight: 'bold'},
  btnCtn:{flexWrap: 'wrap', flexDirection: 'row', alignSelf: 'center', position: 'absolute', bottom: 30},
  cancelBtn:{backgroundColor: 'red', width: verticalScale(80), height: horizontalScale(40), paddingVertical: verticalScale(7), marginHorizontal: horizontalScale(5),borderRadius: 10},
  updBtn:{backgroundColor: '#056326ff', width: verticalScale(80), height: horizontalScale(40), paddingVertical: verticalScale(7), marginHorizontal: horizontalScale(5),borderRadius: 10},
  btnText:{ alignSelf: 'center', fontWeight: 'bold',  fontSize: scaleFontSize(18), color: '#FFFFFF'},
  dropInputWrap: { left: 42, gap: 3, position: 'absolute', top: 350 },
  dropInput:{borderColor: '#D3D3D3', borderWidth: 0.9,borderRadius: 8, padding: 15,width: 130,},
  ctgryItems:{justifyContent: 'space-between' ,flexDirection: 'row',},
  dropInputTxt:{textAlign: 'left', fontSize: scaleFontSize(14), fontWeight: 600},
  pointer:{top: 5,},
});
export default style;
                                                        