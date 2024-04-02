import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import MovieCard from "./shared/movie-card";
import { image_url } from "../api";

const { width, height } = Dimensions.get("window");

const UpcomingMovie = ({ upcoming, title }) => {
  return (
    <View className={"mb-8 space-y-4"}>
      <Text className="text-red-700 text-xl font-semibold">{title}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-x-4">
        {upcoming?.map((item, index) => (
          <View key={index} className="space-y-1 mr-4">
            <Image source={{ uri: image_url(item?.poster_path, 200) }} className="rounded-3xl" style={{ width: width * 0.3, height: height * 0.2 }} />
            <Text className="text-white">{item?.title.length > 12 ? item?.title.slice(0, 12) + "..." : item?.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingMovie;
