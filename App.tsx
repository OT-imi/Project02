import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainNavigation from './src/components/Navigation/MainNavigation';
import globalStyle from './src/assets/styles/globalStyles';
import { useThemeStore } from './src/state/useThemeStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  const theme = useThemeStore(state => state.theme);
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView
          style={[
            theme === 'light'
              ? globalStyle.lightContainer
              : globalStyle.darkContainer,
          ]}
        >
          <MainNavigation />
        </SafeAreaView>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
