import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { assets } from "../constants";
import NftOwns from "../Componets/NftOwns";

const Profile = ({ navigation }) => {
  return (
    <>
      <View style={{ width: "100%", height: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "rgba(52,52,52,0.2)",
                borderRadius: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={assets.left}
                style={{ width: "80%", height: "80%" }}
              />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{uri:''}} style={{ width: 45, height: 45 }} />
          </TouchableOpacity> */}
        </View>
        {/*  */}
        <ScrollView>
          <View style={{ width: "100%" }}>
            <View style={{ alignItems: "center", flexDirection: "column" }}>
              <View>
                <Image source={assets.person01} />
                <Image
                  source={assets.badge}
                  style={{ position: "absolute", bottom: -5, right: -5 }}
                />
              </View>
              <Text style={{ color: "#3493D3", opacity: 0.5 }}>
                Change the profile picture
              </Text>
            </View>
            <View>
              <View style={{ paddingVertical: 20 }}>
                <Text style={{ paddingHorizontal: 10 }}>Name</Text>
                <TextInput
                  placeholder="neosalvatore"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    height: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                />
              </View>
              {/* <View style={{ paddingVertical: 20 }}>
                <Text style={{ paddingHorizontal: 10 }}>Password</Text>
                <TextInput
                  placeholder="*******"
                  type="Password"
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "gray",
                    height: 30,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                />
              </View> */}
              <View style={{ paddingVertical: 20 }}>
                <Text style={{ paddingHorizontal: 10 }}>7 Nfts Owns</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ fontWeight: "500" }}>Your own Nfts : </Text>
          </View>
          <NftOwns />
        </ScrollView>
        {/*  */}
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
