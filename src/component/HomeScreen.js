import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button
  } from 'react-native';
import { connect } from "react-redux";
import { actionCreators } from "../redux/actions/CounteraActions";


const HomeScreen = (props) => {
    const {dispatch} = props;
    return(
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
                accessibilityLabel="Learn more about this purple button"
                />
        </View>
    );
}


const mapStateToProps = (state) => ({
    count: state.counter.count
})

export default connect(mapStateToProps)(HomeScreen);