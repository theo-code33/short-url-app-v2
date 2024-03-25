import { StyleSheet, Text, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<{}>;
};

export const Register: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register page</Text>
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
