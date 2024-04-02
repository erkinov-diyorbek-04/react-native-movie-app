import { Text, View } from "react-native";

const TopRatedMovie = ({ topRated }) => {
  console.log(topRated, "top rated");
  return (
    <View>
      <Text className="text-white font-bold">Top Rated Movie</Text>
    </View>
  );
};

export default TopRatedMovie;
