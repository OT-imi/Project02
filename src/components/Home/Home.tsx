import { useQuery } from '@tanstack/react-query';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';
// import cautionImg from '../../assets/images/warning.png';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import style from './style';
import Tasks from '../../components/Tasks/Tasks';
import { useThemeStore } from '../../state/useThemeStore';
import globalStyle from '../../assets/styles/globalStyles';
import { useModalStore } from '../../state/useModalStore';
import Newtask from '../NewTask/Newtask';
import Button from '../custom/Button';
import SearchArea from './Search&Filter/SearchArea';
import { useTaskStore } from '../../state/useTaskStore';

const mainUrl =
  'https://taskmanager-api.graydune-340b2a35.eastus.azurecontainerapps.io/api/Tasks';

const fetchTasks = async () => {
  const { data } = await axios.get(mainUrl);
  useTaskStore.getState().setTasks(data);
  return data;
};

export default function Home(): React.JSX.Element {
  const theme = useThemeStore(state => state.theme);
  const isThemeDark = theme === 'dark';
  const curTheme = isThemeDark
    ? globalStyle.darkContainer
    : globalStyle.lightContainer;

  const containerTheme = isThemeDark ? style.darkTaskCtn : style.lightTaskCtn;
  const curTextStyle = isThemeDark ? style.darkThemeText : style.lightThemeText;
  const setIsVisible = useModalStore(state => state.setVisible);

  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  const handleRefetchTasks = () => {
    console.log('haha, got you');
    refetch();
  };
  const { tasks } = useTaskStore();
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

  if (isError) {
    console.log(error);
    return (
      <View style={curTheme}>
        <Text style={curTextStyle}>⚠️</Text>
        {/* <Image source={cautionImg} /> */}
        <Text style={curTextStyle}>Oops! Something went wrong</Text>
        <Text style={curTextStyle}>Error loading Tasks{error.message}</Text>
        <Text style={curTextStyle}>
          We couldn't load your tasks. Please check your connection and try
          again.
        </Text>
        <Pressable onPress={() => handleRefetchTasks()} style={style.retryBtn}>
          <Text style={[curTextStyle, style.retryBtnText]}> Try Again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[isThemeDark ? style.darkContainer : style.lightContainer]}>
      <SearchArea />
      <ScrollView
      // contentContainerStyle={globalStyle.contentContainer} //tag****
      >
        <Newtask />
        {/* <View style={style.taskContainer} ></View> */}
        {tasks?.map((task: any) => (
          <Tasks
            task={task}
            containerStyle={containerTheme}
            textCategoryStyle={[curTextStyle, style.catgry]}
            textDescStyle={style.desc}
            dateStyle={style.dateStyle}
            textTitleStyle={[curTextStyle, style.textTitleStyle]}
            editButtonStyle={style.editButton}
            deleteButtonStyle={style.deleteButton}
            key={task.id}
          />
        ))}
      </ScrollView>
      <Button
        buttonStyle={style.addTaskButton}
        textStyle={style.addTaskButtonText}
        label={'+'}
        onPress={setIsVisible}
      />
    </View>
  );
}
