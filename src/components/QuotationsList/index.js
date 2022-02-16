import React from "react"
import { View, ScrollView, Text, TouchableOpacity } from "react-native"
import styles from "./style"

export default function QuotationsList() {
    return (
        <>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonApi}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonApi}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonApi}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonApi}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => {}}
                >
                    <Text style={styles.textButtonApi}>6M</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}