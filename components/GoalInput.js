import { StyleSheet, Button, TextInput, View } from "react-native";

function GoalInput ({ input, setInput, setGoals }) {

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
    <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={input} />
        <Button title='Add Goal' onPress={addGoalHandler}/>
    </View>
    )

};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBlockColor: '#cccccc'
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
});