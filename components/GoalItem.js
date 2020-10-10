import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={props.onDelete.bind(this, props.delId)}>
            <View style={styles.listItem}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        color: "gray",
        borderBottomColor: "#a4a4a4",
        borderBottomWidth: 1
    }
});

export default GoalItem;  