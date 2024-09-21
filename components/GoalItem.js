import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalIem ( props ) {
    return (
        <View style={styles.goalIem}>
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={props.onDelete.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalIem;

const styles = StyleSheet.create({
    goalIem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
        color: 'red'
    }
});