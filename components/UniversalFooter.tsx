import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styles from "../components/styles"

import Colors from '../constants/Colors';

import { Text, View } from './Themed';

export default function UniversalFooter() {
    return (
        <View>
            <Text style={styles.footerText}>PesaPulse</Text>
            <Text style={styles.footerText}>version 1.7.28.1455</Text>
            <Text style={styles.footerText}>Created by Obi Nwokogba</Text>
            <Text style={styles.footerText}>&nbsp;</Text>
        </View>
    );
}
