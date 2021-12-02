/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';

const {width: windowsWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowsWidth}
            itemWidth={300}
          />
        </View>
        {/* Popular movies */}
        <View style={{height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Popular movies</Text>
          <FlatList
            data={nowPlaying}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{height: 260}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Popular movies</Text>
          <FlatList
            data={nowPlaying}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
