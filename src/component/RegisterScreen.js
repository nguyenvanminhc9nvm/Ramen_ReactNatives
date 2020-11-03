import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import IconArrow from '../resource/drawable/icon_arrow.png';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const HeaderBarRegister = () => {
  return (
    <View style={styleHeaderBar.containerHeaderBar}>
      <Image style={styleHeaderBar.headerBarImg} source={IconArrow} />
      <Text style={styleHeaderBar.headerTitle}>会員登録</Text>
      <Text style={styleHeaderBar.headerEmpty} />
    </View>
  );
};

const styleHeaderBar = StyleSheet.create({
  containerHeaderBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBarImg: {
    flex: 2,
    marginStart: 10,
    resizeMode: 'contain',
  },
  headerTitle: {
    flex: 6,
    color: '#0E114F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerEmpty: {
    flex: 2,
  },
});

const SignUpScreen = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styleRegisterScreen.container}>
          <View style={styleRegisterScreen.boxHeaderBar}>
            <HeaderBarRegister />
          </View>
          <View style={styleRegisterScreen.boxTitle}>
            <Text style={styleRegisterScreen.boxTitleContent}>
              必要事項をご記入の上、変更ボタンを押してください。
            </Text>
          </View>
          <View
            style={[
              styleRegisterScreen.boxEmail,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput />
          </View>
          <View
            style={[
              styleRegisterScreen.boxPassword,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
          <View
            style={[
              styleRegisterScreen.boxPassword,
              styleRegisterScreen.boxBorder,
            ]}>
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

          <View
            style={[
              styleRegisterScreen.boxPhoneNumber,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput />
          </View>
          <View style={styleRegisterScreen.boxLinearFullname}>
            <View
              style={[
                styleRegisterScreen.boxFirstName,
                styleRegisterScreen.boxBorder,
              ]}>
              <TextInput />
            </View>
            <View
              style={[
                styleRegisterScreen.boxLastName,
                styleRegisterScreen.boxBorder,
              ]}>
              <TextInput />
            </View>
          </View>
          <View
            style={[
              styleRegisterScreen.boxPhoneNumber,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput />
          </View>
          <View
            style={[
              styleRegisterScreen.boxPhoneNumber,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput />
          </View>
          <TouchableOpacity
            style={styleRegisterScreen.boxSelectedDate}
            onPress={() => {
              showDatepicker();
            }}>
            <Text style={styleRegisterScreen.boxGetTimeSelectedDate}>1</Text>
            <Text style={styleRegisterScreen.boxGetTimeSelectedDate}>2</Text>
            <Text style={styleRegisterScreen.boxGetTimeSelectedDate}>3</Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
          <View
            style={[
              styleRegisterScreen.boxPhoneNumber,
              styleRegisterScreen.boxBorder,
            ]}>
            <TextInput />
          </View>
            <TouchableOpacity style={styleRegisterScreen.boxButtonRegister}>
              <Text style={styleRegisterScreen.boxButtonRegisterContent}>
                Register
              </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

let margin10 = 10;

const styleRegisterScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  boxHeaderBar: {
    height: 70,
  },
  boxTitle: {
    height: 50,
    justifyContent: 'center',
  },
  boxTitleContent: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxBorder: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '7%',
  },
  boxEmail: {
    marginTop: margin10,
    height: 50,
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
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: margin10,
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
    marginTop: margin10,
  },
  boxPostalCode: {
    height: 50,
  },
  boxPrefectures: {
    height: 50,
  },
  boxSelectedDate: {
    height: 50,
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: margin10,
  },
  boxGetTimeSelectedDate: {
    flex: 3,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  boxButtonRegister: {
    height: 50,
    margin: "10%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxButtonRegisterContent: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingHorizontal: "10%",
    paddingVertical: '5%',
    color: 'white',
    fontSize: 20,
  }
});

export default SignUpScreen;
