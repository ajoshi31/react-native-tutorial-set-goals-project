import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, TextInput, StyleSheet, Modal } from 'react-native';

const GoatInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter Your Course Goal"
                    onChangeText={goalInputHandler}
                ></TextInput>
                <View style={styles.buttonContainer}>

                    <View style={styles.buttonWrapper}>
                        <Button title="CANCLE" style={styles.button} color="red" onPress={props.onCancle}></Button>

                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button title="Add Your Goal" style={styles.button} onPress={addGoalHandler}></Button>

                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </Modal>
    );
}
//onPress={props.onAddGoal.bind(this, enteredGoal)}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        color: '#88ee55',
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    myText: {
        color: '#88ee55'
    },
    input: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%'
    },
    button: {
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    buttonWrapper: {
        padding: 20,
        width: '50%'
    }
});

export default GoatInput;