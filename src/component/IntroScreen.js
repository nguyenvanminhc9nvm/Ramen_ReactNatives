import React, { useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, Image, I18nManager, Button } from 'react-native';
import IntroBacnground from '../resource/drawable/icon_intro.png';
import IntroFirst from '../resource/drawable/icon_intro_first.png';
import IntroSecond from '../resource/drawable/icon_intro_two.png';
import IntroThird from '../resource/drawable/icon_intro_three.png';
import IntroFour from '../resource/drawable/intro_4.png';
import IntroFive from '../resource/drawable/icon_start_five.png';
import IntroSix from '../resource/drawable/icon_start_six.png';
import ViewPager from '@react-native-community/viewpager';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const PageArticle = (props) => {
  const navigation = useNavigation();
  return (
    <View style={stylePageArticle.container}>
      <View style={stylePageArticle.styleCount}>
        <Text style={stylePageArticle.styleCountContent}>{props.count}</Text>
      </View>
      <View style={stylePageArticle.styleImage}>
        <Image style={stylePageArticle.styleImageContent} source={props.image} />
      </View>
      <View style={stylePageArticle.styleTitle}>
        <Text style={stylePageArticle.styleTitleContent}>{props.introContent}</Text>
      </View>
      <View style={stylePageArticle.styleContent}>
        <Text style={stylePageArticle.styleContentArticle}>{props.introTitle}</Text>
        <TouchableOpacity onPress={() => {
          navigation.dispatch(StackActions.replace("SignUpScreen"))
        }}>{props.isShow === "true" ? (<Text style={stylePageArticle.styleButton}>login</Text>) : null}</TouchableOpacity>
      </View>
    </View>
  )
}

const stylePageArticle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  styleCount: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  styleCountContent: {
    color: "white",
    fontSize: 35,
    marginStart: "4%",
    marginTop: "20%",
    fontFamily: "Bebas-Regular"
  },
  styleImage: {
    flex: 6.5,
    justifyContent: "center",
    alignItems: "center",
    padding: "15%"
  },
  styleImageContent: {
    flex: 1,
    resizeMode: "contain"
  },
  styleTitle: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  styleTitleContent: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Source-Medium"
  },
  styleContent: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  styleContentArticle: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Source-Medium"
  },
  styleButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white"
  }
})

const IntroScreen = () => {
  return (
    <SafeAreaView style={stylesIntro.containr}>
      <View style={stylesIntro.containr}>
        <ImageBackground style={stylesIntro.styleBackground} source={IntroBacnground} >
          <ViewPager style={stylesIntro.containr} initialPage="0">
            <View key="1">
              <PageArticle
                isShow="false"
                count="#01"
                image={IntroFirst}
                introContent="ポイントカード機能！"
                introTitle="油そばのご利用数に応じてランクアップするポイントカードシステム！" />
            </View>
            <View key="2">
              <PageArticle
                isShow="false"
                keyCount="2"
                count="#02"
                image={IntroSecond}
                introContent="新たな機能➊　油コイン"
                introTitle="お好きなクーポンやノベルティグッズと交換できます！" />
            </View>
            <View key="3">
              <PageArticle
                isShow="false"
                keyCount="3"
                count="#03"
                image={IntroThird}
                introContent="新たな機能➋　油マイル"
                introTitle="累計マイルに応じてお得な特典をGET！新たなランキングシステムも導入！" />
            </View>
            <View key="4">
              <PageArticle
                isShow="false"
                keyCount="4"
                count="#04"
                image={IntroFour}
                introContent="クーポンは自分で使うことは勿論友だちにプレゼントすることも可能！"
                introTitle="使用する際は「自分で使う」をタップ友だちに渡す際はQRコードを表示して読込んで完了！" />
            </View>
            <View key="5">
              <PageArticle
                isShow="false"
                keyCount="5"
                count="#05"
                image={IntroFive}
                introContent="公式アプリのリリースを記念してクーポンをプレゼント！"
                introTitle="アプリ登録後、クーポン画面を確認してください！" />
            </View>
            <View key="6">
              <PageArticle
                isShow="true"
                keyCount="6"
                count="#06"
                image={IntroSix}
                introContent="会員登録して歌志軒アプリを始めよう！"
                introTitle="" />
            </View>
          </ViewPager>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const stylesIntro = StyleSheet.create({
  containr: {
    flex: 1,
    flexDirection: 'column'
  },
  styleBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titleContainer: {
    flexDirection: "row",
  }
})

export default IntroScreen;
