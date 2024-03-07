import { StyleSheet, Text, View } from 'react-native';

export default function Visor(props) {
    return (
        <View style={styles.visor}>
            <Text style={styles.text}>{props.currentNumber} {props.operation} {props.lastNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    visor: {
        position: 'absolute',
        top: '20%',
        justifyContent: 'flex-end',
        width: '100%',
        height: '8%',
        backgroundColor: '#292929',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        elevation: 5,
    },
    text: {
        color: '#ddd',
        textAlign: 'right',
        fontSize: 30,
        paddingRight: 15,
        paddingBottom: 5
    },
})