import { View } from 'react-native';

import OtherButton from '../../custom/OtherButton';
import style from './style';
import customStyle from '../../custom/style';

export default function Sort() {
  
  return (
    <View style={style.buttonsContainer}>
      <OtherButton filterName={'All'} customstyle={customStyle.allBtn} />
      <OtherButton filterName={'Pending'} customstyle={customStyle.pendBtn} />
      <OtherButton filterName={'Completed'} customstyle={customStyle.cmpBtn} />
    </View>
  );
}

Sort;
