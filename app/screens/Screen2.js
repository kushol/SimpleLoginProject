import React from 'react';
import { View, Text} from 'react-native';

function Screen2({route}) {
    return (
        <View style={{backgroundColor:"lightgray", flex:1}}>
            <Text>Screen2</Text>
            <Text>{route.params.message}</Text>
        </View>
    );
}

export default Screen2;