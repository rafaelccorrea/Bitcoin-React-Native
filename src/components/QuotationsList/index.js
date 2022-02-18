import React, {Fragment} from "react"
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native"
import QuotationsItems from "./QuotationsItem"
import styles from "./style"

export default function QuotationsList(props) {
    const daysQuery = props.filterDay
    return (
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => daysQuery(7)}
                >
                    <Text style={styles.textButtonApi}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => daysQuery(15)}
                >
                    <Text style={styles.textButtonApi}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => daysQuery(30)}
                >
                    <Text style={styles.textButtonApi}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => daysQuery(90)}
                >
                    <Text style={styles.textButtonApi}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonApi}
                    onPress={() => daysQuery(180)}
                >
                    <Text style={styles.textButtonApi}>6M</Text>
                </TouchableOpacity>
            </View>
                <FlatList
                    keyExtractor={item => item.data.toString()}
                    data={props.listTransactions}
                    renderItem={({ item }) => {
                        return <QuotationsItems valor={item.valor} data={item.data} />
                    }}
                />
        </Fragment>
    )
}