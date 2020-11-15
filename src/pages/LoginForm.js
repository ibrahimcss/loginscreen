import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

const LoginForm = () => {
    return (
        <View>
            <Text style={styles.signInText}>Sign In</Text>
            <Input
                returnKeyType={"next"}
                autoCapitalize="none"
                placeholder="Username"
            />
            <Input
                returnKeyType={"go"}
                secureTextEntry={true}
                placeholder="Password"
            />
            <MyButton
             text={"Sign In Now"}
            bgColor={"#0065e0"}
            textColor={"#f1f1f1"}/>
        </View>
    );
};
const styles = StyleSheet.create({
    signInText: {
        marginVertical: 10,
        fontSize: 14,
        color: '#333',

    },
});
export default LoginForm;
