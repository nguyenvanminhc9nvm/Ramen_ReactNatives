import React, {useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BackgroundSplash from '../resource/drawable/iconbghistory.png';
import IconSplash from '../resource/drawable/image_splash_icon.png';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundStyle} source={BackgroundSplash}>
        <View style={styles.styleViewLogin}>
          <Image style={styles.styleLogo} source={IconSplash} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  styleViewLogin: {
    alignItems: 'center',
  },

  styleLogo: {
    height: 120,
    width: 100,
  },
});

export default SplashScreen;
