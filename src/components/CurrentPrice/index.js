import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function CurrentPrice () {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>Valor</Text>
            <Text style={styles.textTitle}>Ultima cotacao</Text>
        </View>
    )
}