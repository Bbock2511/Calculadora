import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Numbers(props) {
    const numbersAndSignals = ['AC', 'DEL', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '+/-',  '=',];
    const setCurrentNumber = props.setCurrentNumber
    const setLastNumber = props.setLastNumber
    const currentNumber = props.currentNumber
    const lastNumber = props.lastNumber

    function calculator(){
        const splitNumbers = currentNumber.split(' ')
        const firstNumber = parseFloat(splitNumbers[0])
        const operator = splitNumbers[1]
        const lastNumber = parseFloat(splitNumbers[2])

        if (lastNumber == null) return lastNumber = 1;

        switch (operator) {
            case '+':
                setCurrentNumber((firstNumber + lastNumber).toString())
                return currentNumber
            case '-':
                setCurrentNumber((firstNumber - lastNumber).toString())
                return currentNumber
            case 'x': 
                setCurrentNumber((firstNumber * lastNumber).toString())
                return currentNumber
            case '÷':
                setCurrentNumber((firstNumber / lastNumber).toString())
                return currentNumber
            case '%':
                setCurrentNumber((firstNumber / 100).toString())
                return currentNumber
            case '+/-':
                setCurrentNumber((parseFloat(currentNumber) * -1).toString())
                return currentNumber
        }
    }

    function handleInput(buttonPressed){
        if(buttonPressed === 'x' | buttonPressed === '÷' | buttonPressed === '+' | buttonPressed === '-' | buttonPressed === '%' | buttonPressed === '+/-'){
            setCurrentNumber(currentNumber + " " + buttonPressed + " ");
            return;
        }
        switch(buttonPressed){
          case 'DEL':
            setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
            return
          case 'AC':
            setLastNumber("")
            setCurrentNumber("")
            return
          case '=':
            setLastNumber(currentNumber + " = ")
            setLastNumber("")
            calculator()
            return
          case '+/-':
            return
        }
        setCurrentNumber(currentNumber + buttonPressed)
    }


    return (
        <View style={styles.numbers}>
            {
                numbersAndSignals.map((number) => {
                    return (
                        number === '=' ?
                        <TouchableOpacity onPress={() => handleInput(number)} key={number} style={[styles.btnNumbers, {backgroundColor: '#FFA500'}]}>
                            <Text style={[styles.text, {color: "white", fontSize: 30}]}>{number}</Text>
                        </TouchableOpacity>
                        : number === 'AC' ?
                        <TouchableOpacity onPress={() => handleInput(number)} key={number} style={[styles.btnNumbers, {backgroundColor: '#329542'}]}>
                            <Text style={[styles.text, {color: "#B7D2B6", fontSize: 30}]}>{number}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress = {() => handleInput(number)} key={number} style={styles.btnNumbers}>
                            <Text style={styles.text}>{number}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    numbers: {
        position: 'absolute',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        bottom: 0,
        backgroundColor: '#242424',
        height: '73%',
    },
    text: {
        fontSize: 26,
        color: '#9bc4e2'
    },
    btnNumbers: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 95,
        width: 95,
        borderRadius: 70,
        backgroundColor: '#2c3e50',
        textAlign: 'center',
        margin: 2,
        bottom: 0,
        alignSelf: 'flex-end',
    },
})