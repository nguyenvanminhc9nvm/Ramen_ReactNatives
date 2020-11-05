import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {actionCreators} from '../redux/actions/CounteraActions';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
  const navigation = useNavigation();
  const {dispatch} = props;
  return (
    <View>
      <Text>{props.count}</Text>
      <Button
        onPress={() => dispatch(actionCreators.increment())}
        title="Increment"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => dispatch(actionCreators.decrement())}
        title="Decrement"
        color="#841584"
        access
        ibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          navigation.navigate('AlertScreen');
        }}
        title="show alert"
      />
      <Button
        onPress={() => {
          navigation.navigate('ListScreen');
        }}
        title="List"
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

export default connect(mapStateToProps)(HomeScreen);
