import { Image, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 bg-slate-950">
      <SafeAreaView>
        <StatusBar style={"light"} />

        <View className="flex-row items-center justify-between mx-4">
          <Image source={require("../../assets/logo.png")} />

          <MagnifyingGlassIcon color="white" size={32} strokeWidth={2} onPress={() => navigation.navigate("Detailed")} />
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 10 }}></ScrollView>
    </View>
  );
};

export default Home;
