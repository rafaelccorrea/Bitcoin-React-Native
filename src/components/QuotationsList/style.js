import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    filters: {
        width: '100%',
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly",
    },
    buttonApi: {
        width: 50,
        height: 30,
        backgroundColor: "#ffc600",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center" 
    },
    textButtonApi: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default styles;