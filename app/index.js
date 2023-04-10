import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightweight }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightweight },
        headerShadowVisible: false,
        headerLeft: () => {
          <ScreenHeaderBtn iconUel={icons.menu} dimension="60px" />;
        },
        headerRight: () => {
          <ScreenHeaderBtn iconUel={icons.profile} dimension="100px" />;
        },
        headerTitle: "",
      }}
    />
    <ScrollView>
      <view
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <Welcome />
      </view>
    </ScrollView>
  </SafeAreaView>;
};

export default Home;
