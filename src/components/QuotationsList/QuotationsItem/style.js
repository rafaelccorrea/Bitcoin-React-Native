import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerItem: {
        width: '95%',
        height: "auto",
        backgroundColor: '#000000',
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding:10
    },

    contextLeft: {
        width: "36%",
        height: "100%",
        alignItems: "flex-start"
    },

    contextRight: {
        width: "60%",
        alignItems: "flex-end"
    },

    price: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 'bold'
    },

    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: "#ffffff",
        fontWeight: "bold"
    },

    logBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2
    },

    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default styles;