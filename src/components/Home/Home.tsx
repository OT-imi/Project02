import { useQuery } from '@tanstack/react-query';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';
import Tasks from '../../components/Tasks/Tasks';
import { useThemeStore } from '../../state/useThemeStore';
import { useModalStore } from '../../state/useModalStore';
import Newtask from '../Tasks/modal/NewTask/Newtask';
import Button from '../custom/Button';
import SearchArea from './Search&Filter/SearchArea';
import { Task, Todo, useTaskStore } from '../../state/useTaskStore';
import customStyle from '../custom/style';
import Sort from './Search&Filter/Sort';
import Empty from '../Tasks/EmptyTask';
import { useEffect } from 'react';
import UpdateTask from '../Tasks/modal/tasksupdate/UpdateTask';

const mainUrl =
  'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/Tasks/';

const fetchTasks = async () => {
  const { data } = await axios.get(mainUrl);
  console.log('data:', data);
  // useTaskStore.getState().setTasks(data);
  return data;
};

export default function Home(): React.JSX.Element {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const curTheme = isThemeDark ? style.darkWrapCtn : style.lightWrapCtn;
  const containerTheme = isThemeDark ? style.darkTaskCtn : style.lightTaskCtn;
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;
  const errTextStyle = isThemeDark ? style.darkErrText : style.lightErrText;
  const boldTextStyle = isThemeDark
    ? style.boldErrTextDark
    : style.boldErrTextLight;
  const setIsVisible = useModalStore(state => state.setVisible);
  const filterType = useTaskStore(state => state.filterType);
  const searchQuery = useTaskStore(state => state.searchQuery);
  const todos = useTaskStore(state => state.todos);
  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });
  useEffect(() => {
    if (tasks) {
      console.log('Tasks fetched:: ', tasks);
      // useTaskStore.getState().setTasks(tasks);
    }
  }, [tasks, isLoading]);

  const handleRefetchTasks = () => {
    console.log('haha, got you');
    refetch();
  };
  if (isLoading) {
    return (
      <View style={isThemeDark ? style.darkContainer : style.lightContainer}>
        <SearchArea />
        <View style={[style.loadingView, style.loadingScreen]}>
          <ActivityIndicator size={'large'} color="#3d0cedff" />
          <Text style={[style.loadingText, curTextStyle]}>
            Loading your tasks....
          </Text>
        </View>
      </View>
    );
  }

  if (isError || error) {
    console.log('Error found: ', error);
    return (
      <View style={[curTheme]}>
        <Text style={style.caution}>⚠️</Text>
        <Text style={boldTextStyle}>Oops! Something went wrong</Text>
        <Text style={errTextStyle}>
          We couldn't load your tasks. Please check your connection and try
          again.
        </Text>
        <Pressable onPress={() => handleRefetchTasks()} style={style.retryBtn}>
          <Text style={[style.retryBtnText]}> Try Again</Text>
        </Pressable>
      </View>
    );
  }
  const filteredTasks = tasks
    ?.filter(task => {
      if (filterType === 'All') return true;
      if (filterType === 'Pending') return !task.completed;
      if (filterType === 'Completed') return task.completed;
    })
    .filter(task => {
      if (!searchQuery.trim()) return true;
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  const emptyTasks = tasks?.length === 0;

  const pendingTasks = filterType === 'Pending';

  return (
    <>
      <View style={[isThemeDark ? style.darkContainer : style.lightContainer]}>
        <View style={isThemeDark ? customStyle.darkCtn : customStyle.lightCtn}>
          <SearchArea />
          <Sort />
        </View>
        <ScrollView showsVerticalScrollIndicator>
          <Newtask />
          <UpdateTask />
          {todos?.map((task: Todo) => (
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
          {emptyTasks ? (
            <Empty />
          ) : (
            filteredTasks?.length === 0 && (
              <View style={style.empCtn}>
                <Text style={[curTextStyle, style.boldEmpFilteredTask]}>
                  No {filterType} Tasks Found Here
                </Text>
                <Text style={[curTextStyle, style.extraTxt]}>
                  {pendingTasks ? 'Create' : 'Complete'} a task and don't be
                  lazy
                </Text>
              </View>
            )
          )}
          {}
        </ScrollView>
        <Button
          buttonStyle={style.addTaskButton}
          textStyle={style.addTaskButtonText}
          label={'+'}
          onPress={setIsVisible}
        />
      </View>
    </>
  );
}
