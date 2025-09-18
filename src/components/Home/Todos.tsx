import { View } from 'react-native';
import SearchArea from './Search&Filter/SearchArea';
import Sort from './Search&Filter/Sort';
import { useThemeStore } from '../../state/useThemeStore';
import style from './style';
import { Todo, useTaskStore } from '../../state/useTaskStore';
import Tasks from '../Tasks/Tasks';
import UpdateTask from '../Tasks/modal/tasksupdate/UpdateTask';
import Button from '../custom/Button';
import { useModalStore } from '../../state/useModalStore';
import Newtask from '../Tasks/modal/NewTask/Newtask';

export default function Todos() {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';

  const containerTheme = isThemeDark ? style.darkTaskCtn : style.lightTaskCtn;
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;

  const { todos: filteredTasks } = useTaskStore();
  const setIsVisible = useModalStore(state => state.setVisible);
  return (
    <>
      <View style={[isThemeDark ? style.darkContainer : style.lightContainer]}>
        {/* <View style={isThemeDark ? customStyle.darkCtn : customStyle.lightCtn}> */}
        <SearchArea />
        <Sort />
        <UpdateTask />
        <Newtask />
      </View>
      {/* // <ScrollView
        //   showsVerticalScrollIndicator
        //   // contentContainerStyle={globalStyle.contentContainer} //tag****
        // >
        //   <Newtask /> */}
      {filteredTasks?.map((task: Todo) => (
        <Tasks
          task={task}
          containerStyle={containerTheme}
          textCategoryStyle={[curTextStyle, style.catgry]}
          textTitleStyle={[curTextStyle, style.textTitleStyle]}
          editButtonStyle={style.editButton}
          deleteButtonStyle={style.deleteButton}
          key={task.id}
        />
      ))}
      {/*   //   {emptyTasks ? (
        //     <Empty />
        //   ) : (
        //     filteredTasks?.length === 0 && (
        //       <View style={style.empCtn}>
        //         <Text style={[curTextStyle, style.boldEmpFilteredTask]}>
        //           No {filterType} Tasks Found Here
        //         </Text>
        //         <Text style={[curTextStyle, style.extraTxt]}>
        //           {pendingTasks ? 'Create' : 'Complete'} a task and don't be
        //           lazy
        //         </Text>
        //       </View>
        //     )
        //   )}
        //   {}
        // </ScrollView>*/}
      <Button
        buttonStyle={style.addTaskButton}
        textStyle={style.addTaskButtonText}
        label={'+'}
        onPress={setIsVisible}
      />
      {/* </View>  */}
    </>
  );
}
