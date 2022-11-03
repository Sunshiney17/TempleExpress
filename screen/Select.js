import { StyleSheet, Button, SafeAreaView, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Card } from "react-native-paper";
import { Icon} from '@rneui/themed';
const { width , height } = Dimensions.get('window');

export default function Profile({ navigation }) {
  const productToday = [{
    "Screen_id": "MonksOffering",
    "Screen_name": "Monks Offering",
    "Screen_icontype": "material-community",
    "Screen_icon": "cart"
  }, {
    "Screen_id": "Donated",
    "Screen_name": "Donated",
    "Screen_icontype": "material-community",
    "Screen_icon": "currency-usd"
  }]
  return (
      <SafeAreaView style={styles.container}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatList}
                horizontal={true}
                data={productToday}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={styles.cardContainer}
                      onPress={() => {
                        console.log(item.Screen_id)
                        navigation.navigate(item.Screen_id )
                      }}
                    >
                      <Card style={styles.card}>
                        <Text style={styles.text}>{item.Screen_name}</Text>
                        <Icon containerStyle={styles.icon} name={item.Screen_icon} type={item.Screen_icontype} size={30} color="#900" />
                      </Card>
                    </TouchableOpacity>
                  );
                }}
              />
        
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 120,
    backgroundColor: "#FFFFFF",
    padding: 8,
  },
  flatList: {
    paddingLeft: width * 0.08,
    // paddingHorizontal: 0,
    paddingVertical: 16,
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
    bottom: height * 0.02,
    right: width * 0.05,
  }
});