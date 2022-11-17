import { StyleSheet, Button, SafeAreaView, Text, FlatList, TouchableOpacity, Dimensions, View, ScrollView } from 'react-native';
import { Card } from "react-native-paper";
import { Icon, Tab, TabView } from '@rneui/themed';
import HeaderTemple from '../components/HeaderTemple';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');

export default function Select({ navigation }) {
  const [index, setIndex] = useState(0);
  const templeName = 'วัดบวรนิเวศราชวรวิหาร';
  const productToday = [{
    "Screen_id": "MonksOffering",
    "Screen_name": "Monks Offering",
    "Screen_icontype": "material-community",
    "Screen_icon": "cart-outline"
  }, {
    "Screen_id": "Donated",
    "Screen_name": "Donated",
    "Screen_icontype": "material-community",
    "Screen_icon": "currency-usd"
  }]
  
  return (
      <>
        <HeaderTemple temple={templeName} />
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: '#A7A5A6',
            height: 3,
            width: 0,
          }}
        >
          <Tab.Item
            title="    Monks Offering    "
            titleStyle={(active) => ({
            color: active ? "#FFFFFF" : "#FF780C",
            backgroundColor: active ? "#FF780C" : "#FFF5EC", 
            fontSize: 14 ,
            borderRadius: height * 0.04,
            marginTop:20 
          })}
            containerStyle={{
              backgroundColor: "#FFFFFF",
              height:80,
              borderTopLeftRadius:10,
              
          }}
          />
          <Tab.Item
            title="          Donated          "
            titleStyle={(active) => ({
            color: active ? "#FFFFFF" : "#FF780C",
            backgroundColor: active ? "#FF780C" : "#FFF5EC",
            fontSize: 14,
            borderRadius: height * 0.04, 
            marginTop: 20 
            })}
          containerStyle={{
            backgroundColor: "#FFFFFF",
            height:80,
            borderTopRightRadius: 10,

          }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "#FFFFFF", width: '100%' }}>
            <ScrollView style={styles.flatListBox} horizontal={true} showsHorizontalScrollIndicator={false}>
              {productToday.map((item, id) => {
                return (<Card style={styles.flatList} key={id}>
                  <TouchableOpacity
                    style={styles.cardContainer}
                    onPress={() => {
                      console.log(item.Screen_id)
                      navigation.navigate(item.Screen_id)
                    }}
                  >
                    <LinearGradient style={styles.card}
                      colors={['#FCA973', '#EC8948']}
                      start={{ x: 0.7, y: 0 }}
                    >
                      <Text style={styles.text}>{item.Screen_name}</Text>
                      <Icon reverse containerStyle={styles.icon} name={item.Screen_icon} type={item.Screen_icontype} size={height * 0.03} color="rgba(255, 248, 241,0.3)" />
                    </LinearGradient>
                  </TouchableOpacity>

                </Card>
                )
              })}
            </ScrollView>
          </TabView.Item>
        <TabView.Item style={{ backgroundColor: "#FFFFFF", width: '100%' }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
        </TabView>
      </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.05,
    padding: 8,
  },
  flatListBox: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flatList: {
    paddingLeft: width * 0.08,
    // paddingHorizontal: 0,
    paddingVertical: 16,
    paddingTop: height * 0.05,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
  cardContainer: {
    height: height * 0.35,
    width: width * 0.55,
    marginRight: width * 0.08, //gap ความห่าง
  },
  card: {
    height: height * 0.35,
    width: width * 0.55,
    borderRadius: height * 0.04,
    padding: 10,
    backgroundColor: "#FFA646",


    elevation: 8,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: '500',
    fontSize: 18,
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.03,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  }
});