import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ViewSlider from './ViewSlider';
const {width, height} = Dimensions.get('window');
import Image1 from '../assets/images/ngo10.jpg';
import Image2 from '../assets/images/ngo9.jpg';
import Image4 from '../assets/images/ngo8.jpg';
import {DARK_BLACK, SOCIAL_WHITE} from '../assets/colors';

function BannerSlider() {
  return (
    <ViewSlider
      renderSlides={
        <>
          <View style={styles.viewBox}>
            <TouchableOpacity>
              <Image
                style={{...styles.bannerImage, ...styles.moreStyles}}
                source={Image1}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewBox}>
            <TouchableOpacity>
              <Image
                style={{...styles.bannerImage, ...styles.moreStyles}}
                source={Image2}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewBox}>
            <TouchableOpacity>
              <Image
                style={{...styles.bannerImage, ...styles.moreStyles}}
                source={Image4}
              />
            </TouchableOpacity>
          </View>
        </>
      }
      style={styles.slider} //Main slider container style
      height={200} //Height of your slider
      slideCount={3} //How many views you are adding to slide
      dots={true} // Pagination dots visibility true for visibile
      dotActiveColor={DARK_BLACK} //Pagination dot active color
      dotInactiveColor={SOCIAL_WHITE} // Pagination do inactive color
      dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
      autoSlide={true} //The views will slide automatically
      slideInterval={3000} //In Miliseconds
    />
  );
}
const styles = StyleSheet.create({
  viewBox: {
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    // margin: 20,
  },
  slider: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
    // backgroundColor: 'red',
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  moreStyles: {
    height: 200,
    width: width,
    // padding: 20,
    // borderRadius: 10,
    // resizeMode: 'contain',
  },
});

export default BannerSlider;
