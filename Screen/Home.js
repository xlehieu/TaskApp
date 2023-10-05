import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import SearchIcon from '../assets/image/iconSearch.png';
import FilterIcon from '../assets/image/iconFilter.png';
const HomeScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (text) => {
        setSearchQuery(text);
        // You can add further logic here, such as filtering your data based on the searchQuery
      };
    const Screen1 = () => {
        navigation.navigate('Screen1');
    };
    const [categories, setCategories] = useState([
    {
      image: require('../assets/image/Card1.png'),
    },
    {
    image: require('../assets/image/Card1.png'),
    },
    {
        image: require('../assets/image/Card1.png'),
    },
  ]);
  const [bottomcategories, newcategories] = useState([
    {
        image: require('../assets/image/Moving.png'),
    },
    {
    image: require('../assets/image/Help.png'),
    },
  ]);
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
        <Image source={FilterIcon} style={styles.filterIcon} />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.title}>Next To You</Text>
      <TouchableOpacity onPress={Screen1}>
        <Text style={styles.pressableText}>On the map <Icon name="chevron-right" size={10} color="gray" /></Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.name}
            style={styles.category}
          >
            <Image
              style={styles.categoryImage}
              source={item.image}
            />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.textContainer}>
      <Text style={styles.title}>Categories</Text>
      <TouchableOpacity>
        <Text style={styles.pressableText2}>See all <Icon name="chevron-right" size={10} color="gray" /></Text>
      </TouchableOpacity>
      </View>
      <FlatList
        data={bottomcategories}
        renderItem={({ item }) => (
            <TouchableOpacity
                 key={item.name}
                style={styles.newcategory}
            >
            <Image
                style={styles.newcategoryImage}
                source={item.image}
            />
            <Text style={styles.newcategoryText}>{item.name}</Text>
            </TouchableOpacity>
        )}
    />
      <View style={styles.bottomBar}>
      <TouchableOpacity // Sử dụng TouchableOpacity thay thế cho Button
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/iconList.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/iconHeart.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/iconAdd.png")}
            style={styles.addButtonimage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/iconChat.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle button press
          }}
        >
          <Image
            source={require("../assets/image/iconUser.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10, // Điều chỉnh vị trí tiêu đề tùy ý
  },
  category: {
    width: 264, // Điều chỉnh kích thước nút danh mục tùy ý
    height: 326, // Điều chỉnh kích thước nút danh mục tùy ý
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginRight: 10, // Thêm khoảng cách giữa các danh mục
    alignItems: 'center', // Căn giữa nội dung ngang
  },
  categoryImage: {
    width: 264, // Điều chỉnh kích thước hình ảnh tùy ý
    height: 326, // Điều chỉnh kích thước hình ảnh tùy ý
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Thêm khoảng cách giữa hình ảnh và văn bản
},
  bottomBar: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
  addButton: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  addButtonimage: {
    width: 70,
    height: 70,
  },
  searchBarContainer: {
    width: 300,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 50,
  },
  searchIcon: {
    width: 20, // Adjust the width and height as needed
    height: 20,
    marginRight: 10,
  },
  filterIcon: {
    width: 60, // Adjust the width and height as needed
    height: 60,
    marginLeft: 220, // Add margin to separate it from the title
    marginTop: 10,
  },
  newcategory: {
    width: 390,
    height: 72,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
  },
  newcategoryImage: {
    width: 390,
    height: 72, 
    marginTop: 20,
  },
  textContainer: {
    width: 300,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  pressableText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 100,
    color: "gray",
  },
  pressableText2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 150,
    color: "gray",
  },
});

export default HomeScreen;
