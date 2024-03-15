import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-green-600">
      <Text className="text-3xl font-bold text-red-500">Home Page</Text>

      <Button
        title={'Go To Details'}
        onPress={() => navigation.navigate('Detailed')}
      />
    </View>
  );
};

export default Home;
