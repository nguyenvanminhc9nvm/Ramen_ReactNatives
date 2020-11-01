import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native';
import { IconArrow } from '../resource/drawable/icon_arrow.png';


const HeaderBarRegister = () => {
  return (
    <View style={styleHeaderBar.containerHeaderBar}>
      <Image style={styleHeaderBar.headerBarImg} source={IconArrow} />
      <Text style={styleHeaderBar.headerTitle}>会員登録</Text>
      <Text style={styleHeaderBar.headerEmpty}></Text>
    </View>
  )
}

const styleHeaderBar = StyleSheet.create({
  containerHeaderBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center'
  },
  headerBarImg: {
    flex: 2,
    resizeMode: "cover"
  },
  headerTitle: {
    flex: 6,
    color: "#0E114F",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,

  },
  headerEmpty: {
    flex: 2
  }
})
const SignUpScreen = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <SafeAreaView >
      <ScrollView >
        <View style={styleRegisterScreen.container}>
          <View style={styleRegisterScreen.boxHeaderBar}>
            <HeaderBarRegister />
          </View>
          <View style={styleRegisterScreen.boxTitle}>
            <Text style={styleRegisterScreen.boxTitleContent}>必要事項をご記入の上、変更ボタンを押してください。</Text>
          </View>
          <View style={[styleRegisterScreen.boxEmail, styleRegisterScreen.boxBorder]}>
            <TextInput />
          </View>
          <View style={[styleRegisterScreen.boxPassword, styleRegisterScreen.boxBorder]}>
            <TextInput
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <View style={[styleRegisterScreen.boxPassword, styleRegisterScreen.boxBorder]}>
            <TextInput />
          </View>
          <View style={styleRegisterScreen.boxLinearFullname}>
            <View style={[styleRegisterScreen.boxFirstName]}>
              <TextInput />
            </View>
            <View style={[styleRegisterScreen.boxLastName]}>
              <TextInput />
            </View>
          </View>

          <View style={[styleRegisterScreen.boxPhoneNumber, styleRegisterScreen.boxBorder]}>

          </View>
          <View style={styleRegisterScreen.boxLinearFullname}>
            <View style={[styleRegisterScreen.boxFirstName, styleRegisterScreen.boxBorder]}>

            </View>
            <View style={[styleRegisterScreen.boxLastName, styleRegisterScreen.boxBorder]}>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

var margin10 = 10;

const styleRegisterScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxHeaderBar: {
    height: 70
  },
  boxTitle: {
    height: 50,
    justifyContent: "center"
  },
  boxTitleContent: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  boxBorder: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: "7%"
  },
  boxEmail: {
    marginTop: margin10,
    height: 50
  },
  boxPassword: {
    flex: 1,
    marginTop: margin10,
  },
  boxRepassword: {
    backgroundColor: 'white',
    height: 50,
    marginTop: margin10,
  },
  boxLinearFullname: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    marginTop: margin10
  },
  boxFirstName: {
    flex: 1,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 5,
    marginStart: '7%',
  },
  boxLastName: {
    flex: 1,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginStart: 5,
    marginRight: '7%',
  },
  boxPhoneNumber: {
    height: 50,
    marginTop: margin10
  },
  boxPostalCode: {
    height: 50
  },
  boxPrefectures: {
    height: 50
  },
  boxEditText: {

  }
})


export default SignUpScreen;