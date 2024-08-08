import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const images = [
  { id: '1', uri: require('../assets/slide1.png') },
  { id: '2', uri: require('../assets/slide2.png') },
  { id: '3', uri: require('../assets/slide3.png') },
];

export const SlideShow: React.FC = () => {
  const renderItem = ({ item }: { item: { uri: string | any } }) => (
    <View style={styles.imageContainer}>
      <Image source={item.uri} style={styles.image} />
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 10, 
  },
  imageContainer: {
    width: 390,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, 
    overflow: 'hidden', 
    marginRight: 15, 
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SlideShow;
