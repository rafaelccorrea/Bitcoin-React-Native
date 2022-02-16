import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from "./style"

export default function QuotationsItems() {
    return (
        <View style={styles.containerItem}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style={styles.logBitcoin}
                        source={require('../../../img/bitcoinong.png')}
                    />
                    <Text style={styles.dayCotation}> Data </Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>valor</Text>
            </View>
        </View>
    )
}