import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Calculadora</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        alignContent: 'flex-start',
        backgroundColor: '#111',
    },
    title: {
        paddingTop: statusBarHeight,
        paddingLeft: 10,
        textAlign: 'center',
        color: '#ddd',
        fontSize: 25,
        textAlign: 'left',
    },
})
export default Header;