import { StyleSheet, View, Text } from "react-native";

function GoalIem ( props ) {
    return (
        <View style={styles.goalIem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
};

export default GoalIem;

const styles = StyleSheet.create({
    goalIem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
    goalText: {
    color: 'white'
    }
});