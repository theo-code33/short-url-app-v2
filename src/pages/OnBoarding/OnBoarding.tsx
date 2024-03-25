import {Button, StyleSheet, Text, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import React from "react";

type Props = {
    navigation: NavigationProp<any>;
};

export const OnBoarding: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding</Text>
            <Button
                title="Already have an account? Sign in"
                onPress={() =>
                    navigation.navigate('SignIn')
                }
            />
            <Button
                title="Don't have an account? Sign up"
                onPress={() =>
                    navigation.navigate('Register')
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
