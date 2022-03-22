import React from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';
import AppPicker from '../components/AppPicker';


const users = [
	{
		username: "user1",
		password: "password1"
	},
	{
		username: "user2",
		password: "password2"
	},
	{
		username: "user3",
		password: "password3"
	}
];

const validateUser = ({ email, password }) => {
	return (
		users.filter(
			(user) => user.username === email && user.password === password
		).length > 0
	);
};

function Screen1({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={{backgroundColor:"lightblue", flex:1}}>
            <TextInput style = {styles.input}
                name="Email"
                placeholder = "email or username"
                onChangeText={emailtext => setEmail(emailtext)}/>
            <TextInput style = {styles.input}
                name="Password"
                placeholder = "password"
                onChangeText={passtext => setPassword(passtext)}/>
            <Button title="Click here" onPress= {() => {if(validateUser({ email, password})) {navigation.navigate("screen2", {message:"Workshop6"})}}}/>
        </View>
    );
}

export default Screen1;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });