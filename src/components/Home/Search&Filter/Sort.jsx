import { View } from 'react-native';

import OtherButton from '../../custom/OtherButton';
import style from './style';
import customStyle from '../../custom/style';
import { useTaskStore } from '../../../state/useTaskStore';

export default function Sort() {
  const tasks = useTaskStore(state => state.tasks);

  const numAllTasks = tasks.length;
  const numPndTasks = tasks.filter(t => !t.completed).length;
  const numCmpTasks = tasks.filter(t => t.completed).length;
  return (
    <View style={style.buttonsContainer}>
      <OtherButton
        filterName={'All'}
        customstyle={customStyle.allBtn}
        numHeader={numAllTasks}
      />
      <OtherButton
        filterName={'Pending'}
        customstyle={customStyle.pendBtn}
        numHeader={numPndTasks}
      />
      <OtherButton
        filterName={'Completed'}
        customstyle={customStyle.cmpBtn}
        numHeader={numCmpTasks}
      />
    </View>
  );
}

Sort;
