import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import * as Font from "expo-font";
import React from 'react';
export function UbuntuText(props: Text["props"]) {

    return (
        <Text
            {...props}
            style={[props.style, {
                fontFamily: "ubuntu"
            }]}

        />
    );
}