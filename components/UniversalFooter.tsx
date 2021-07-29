import React from 'react';
import styles from "../components/styles"
import { Text, View } from './Themed';

export default function UniversalFooter() {
    return (
        <View>
            <Text style={styles.footerText}>PesaPulse</Text>
            <Text style={styles.footerText}>version 1.7.17.46</Text>
            <Text style={styles.footerText}>Created by Obi Nwokogba</Text>
            <Text style={styles.footerText}>&nbsp;</Text>
        </View>
    );
}
