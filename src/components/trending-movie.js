import Carousel from "react-native-snap-carousel";
import { Dimensions, Text, View } from "react-native";

import MovieCard from "./shared/movie-card";

const { width, height } = Dimensions.get("window");

const TrendingMovie = ({ trending }) => {
  return (
    <View>
      <Carousel data={trending} renderItem={({ item }) => <MovieCard movie={item} />} firstItem={1} inactiveSlideOpacity={0.5} sliderWidth={width} itemWidth={width * 0.7} slideStyle={{ display: "flex", alignItems: "center" }} />
    </View>
  );
};

export default TrendingMovie;
