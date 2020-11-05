import React from 'react';
import {Text, Button, View} from 'react-native';
import {connect} from 'react-redux';
import {actionShowAlert} from '../redux/actions/AlertActions';

const AlertScreen = (props) => {
  const {dispatch} = props;
  return (
    <View>
      <Text style={{backgroundColor: props.colors}}>
        THIS IS MESSAGE {props.message}{' '}
      </Text>
      <Button onPress={() => dispatch(actionShowAlert.error())} title="error" />
      <Button
        onPress={() => dispatch(actionShowAlert.success())}
        title="success"
      />
      <Button
        onPress={() => dispatch(actionShowAlert.warnings())}
        title="warnings"
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  message: state.alerter.message,
  colors: state.alerter.colors,
});

export default connect(mapStateToProps)(AlertScreen);
