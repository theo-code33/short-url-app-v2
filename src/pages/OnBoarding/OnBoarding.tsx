import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

export const OnBoarding = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Onboarding</Text>
            <StatusBar style="auto" />
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
    }
});
