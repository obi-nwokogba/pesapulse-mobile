import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import styles from "../components/styles"

import Colors from '../constants/Colors';


import { Text, View } from './Themed';

export default function UniversalFooter() {
    return (
        <View>
            <Text style={styles.footerText}>PesaPulse version 1.7.27.0057</Text>
            <Text style={styles.footerText}>Created by Obi Nwokogba</Text>
        </View>
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    );
}
