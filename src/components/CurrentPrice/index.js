import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function CurrentPrice(props) {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>Cotação</Text>
            <Text style={styles.textTitle}>Bitcoin </Text>
        </View>
    )
}