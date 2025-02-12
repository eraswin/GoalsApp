import { StyleSheet, Button, TextInput, View, Modal, Image } from "react-native";

function GoalInput ({ input, setInput, setGoals, visible, setMod }) {

    function goalInputHandler(enteredText) {
        setInput(enteredText);
    };

    function addGoalHandler() {
    setGoals(currentCourseGoals => [
        ...currentCourseGoals, 
        {text: input, id: Math.random().toString()},
    ]);
    setInput('');
    };

    return (
        <Modal visible={visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    placeholder='Your course goal!' 
                    style={styles.textInput} 
                    onChangeText={goalInputHandler} 
                    value={input} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => setMod(false)} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )

};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
});