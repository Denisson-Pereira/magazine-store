import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const images = [
  { id: '1', uri: 'https://via.placeholder.com/270x170.png?text=Image+1' },
  { id: '2', uri: 'https://via.placeholder.com/270x170.png?text=Image+2' },
  { id: '3', uri: 'https://via.placeholder.com/270x170.png?text=Image+3' },
];

export const SlideShow: React.FC = () => {
  const renderItem = ({ item }: { item: { uri: string } }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
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
    width: 380,
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
