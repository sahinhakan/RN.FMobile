import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class MyInput extends React.Component {
    // state = {
    //     username: ''
    // }

    render() {
        return (
            <View>
                <TextInput {...this.props}
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    ref={this.props.inputRef}
                />
            </View>
        );

        // onChangeText={text => this.setState({ text })}
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        paddingHorizontal: 5,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#f1f1f1',
        color: '#999',
        marginBottom: 8,
        fontSize: 20,
        fontWeight: '600'
    }
});
