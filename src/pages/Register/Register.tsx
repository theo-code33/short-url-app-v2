import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any>;
};

export const Register: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register page</Text>
            <TextInput
                autoComplete={'email'}
                placeholder={'Email'}
            />
            <TextInput
                autoComplete={'given-name'}
                placeholder={'Firstname'}
            />
            <TextInput
                autoComplete={'family-name'}
                placeholder={'Lastname'}
            />
            <TextInput
                autoComplete={'password'}
                placeholder={'Password'}
                secureTextEntry={true}
            />
            <TextInput
                autoComplete={'password'}
                placeholder={'Confirm password'}
                secureTextEntry={true}
            />
            <Button
                title="Register"
                onPress={() =>
                    navigation.navigate('SignIn')
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
