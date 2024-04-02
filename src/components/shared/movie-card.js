import { Dimensions, Image, View } from "react-native";
import { image_url } from "../../api";

const { width, height } = Dimensions.get("window");
const MovieCard = ({ movie }) => {
  return (
    <View>
      <Image source={{ uri: image_url(movie?.poster_path, 500) }} className="rounded-3xl" style={{ width: width * 0.6, height: height * 0.5 }} />
    </View>
  );
};

export default MovieCard;
