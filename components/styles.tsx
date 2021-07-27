import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        backgroundColor:"#f0f0f0"
    }, symbol: {
        color: '#68C2FF',
        fontSize: 50,
        fontWeight: "700"
    },
    priceNumber:
    {
        color: '#1872F0',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    }, dataheader: {
        fontSize: 16,
        marginBottom:-10,
        color:'#5a5a5a'
    }, 
    dataContainer:{
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
  footerText: {
        borderRadius: 3,
        paddingHorizontal: 4,
        fontFamily: 'space-mono',
        backgroundColor:"#f0f0f0",
        fontSize:13,
        color:"#b7b7b7"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});