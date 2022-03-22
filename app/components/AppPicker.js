import React, {useState} from 'react';

import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function AppPicker() {
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = useState("");
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Text style={styles.text}> {item? item : "Movies"} </Text>
                    <MaterialCommunityIcons name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <View style={{marginTop:25}}>
                    <Button title="Close" onPress={() => setModalVisible(false)}/>
                        <Text 
                            onPress={()=> {
                                setModalVisible(false);
                                setItem("Marley and Me");
                                    }
                                }> Marley and Me </Text>
                        <Text 
                            onPress={()=> {
                                setModalVisible(false);
                                setItem("Star Wars");
                                    }
                                }> Star Wars </Text>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"#e0e0eb",
        flexDirection: 'row',
        borderRadius: 25, 
        padding: 10,
        marginVertical: 20,
        width:'100%',
    },
    text:{
        flex:1,
    },
})
export default AppPicker;