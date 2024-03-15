import { Button, Text, View } from 'react-native';

const Detailed = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-600">
      <Text className="text-3xl font-bold text-gray-200">Detailed Page</Text>
      <Button
        title={'Go To Home'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Detailed;
