import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    textInput: {
        fontSize: 20,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        width: 300
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#d4d4d4',
        padding: 7,
        borderRadius: 10,
        marginRight: 15
    },
    upperContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    checkboxView: {
        display: 'flex',
        flexDirection: 'row'
    },
    filterText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mainText: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10
    },
    overlayContainer: {
        alignItems: 'center'
    },
    Button: {
        backgroundColor: '#43595e',
        paddingVertical: 10,
        paddingHorizontal: 40,
        margin: 10,
        borderRadius: 10
    },
    ButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default styles;