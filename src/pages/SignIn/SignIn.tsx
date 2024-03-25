import { NavigationProp } from "@react-navigation/native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type Props = {
    navigation: NavigationProp<any>;
}
export const SignIn: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign in page test</Text>
            <TextInput
                autoComplete={'email'}
                placeholder={'Email'}
            />
            <TextInput
                autoComplete={'password'}
                placeholder={'Password'}
                secureTextEntry={true}
            />
            <Button
                title="Sign in"
                onPress={() =>
                    navigation.navigate('Onboarding')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e7060',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        width: '80%',
    },
});
