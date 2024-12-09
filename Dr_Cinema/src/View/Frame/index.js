import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

    return (
        <View style={styles.header}>
            <Text>This is the header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        height: 100,
        paddingTop: 60,
        paddingLeft: 40,
        width: '100%',
        backgroundColor: 'lightgray'
    },
    pageTitle: {

    },
    miniBlocks: {

    },
    bigBlocks: {

    }
});

export default Header;