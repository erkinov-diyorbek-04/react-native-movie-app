import { StatusBar, Text, View } from 'react-native';

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-600">
      <Text className="text-3xl font-bold text-green-500">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
