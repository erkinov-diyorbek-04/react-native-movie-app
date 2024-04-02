import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../api";

import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import TopRatedMovie from "../components/top-rated-movie";

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  const trendingMovie = async () => await getTrendingMovies().then((data) => setTrending(data.results));
  const upcomingMovie = async () => await getUpcomingMovies().then((data) => setUpcoming(data.results));
  const topRatedMovie = async () => await getTopRatedMovies().then((data) => setTopRated(data.results));

  const popularMovie = async () => await getPopularMovies().then((data) => setPopular(data.results));

  useEffect(() => {
    trendingMovie();
    upcomingMovie();
    topRatedMovie();
    popularMovie();
  }, []);

  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        <StatusBar style={"light"} />

        <View className="flex-row items-center justify-between mx-4">
          <Image source={require("../../assets/logo.png")} />
          <MagnifyingGlassIcon color="white" size={32} strokeWidth={2} onPress={() => navigation.navigate("Detailed")} />
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {trending?.length > 0 && <TrendingMovie trending={trending} />}
        {upcoming?.length > 0 && <UpcomingMovie upcoming={upcoming} title={"Upcoming Movie"} />}
        {trending?.length > 0 && <UpcomingMovie upcoming={trending.reverse()} title={"Trending Movie"} />}
        {popular?.length > 0 && <UpcomingMovie upcoming={popular} title={"Popular Movie"} />}
        {topRated?.length > 0 && <TrendingMovie trending={topRated} />}
      </ScrollView>
    </View>
  );
};

export default Home;
