import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { assets, NFTData } from "../constants";

const NftOwns = () => {
  return (
    <>
      <FlatList
        data={NFTData}
        renderItem={({ item }) => (
          <>
            <View
              style={{
                width: "100%",
                height: 70,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 10,
                backgroundColor: "rgba(52,52,52,0.2)",
                marginHorizontal: 6,
                marginVertical: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={item.image}
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                />
                <View
                  style={{
                    alignItems: "flex-start",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{item.price}</Text>
                    <Image
                      source={assets.eth}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 60,
                  height: 30,
                  backgroundColor: "#3493D3",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  //   marginEnd: 10,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Sell</Text>
              </View>
            </View>
          </>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default NftOwns;
