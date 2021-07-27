import { StyleSheet } from "react-native"

export default StyleSheet.create({
    scrolllistheader: {
        color: '#dedede',
        fontSize: 30,
        fontWeight: "200"
    },
    listscrollview:{
        paddingTop:10,
        paddingBottom:300,
        lineHeight:150,
        flex:1,
        display:'flex',
    },
    homelistcontainer: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        backgroundColor: "#f0f0f0",
        flexDirection:'column'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        backgroundColor: "#f0f0f0"
    }, symbol: {
        color: '#68C2FF',
        fontSize: 50,
        fontWeight: "700"
    },
    listingBigName:
    {
        color: '#1872F0',
        fontSize: 37,
        fontFamily: 'sairaextracondensedsemibold'
    },

    priceNumber:
    {
        color: '#1872F0',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },
    greenPriceNumber: {
        color: '#10C471',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },
    redPriceNumber: {
        color: '#ff4550',
        fontSize: 45,
        fontFamily: 'sairaextracondensedsemibold'
    },

    dataheader: {
        fontSize: 16,
        marginBottom: -10,
        color: '#5a5a5a'
    },
    dataContainer: {
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
        backgroundColor: "#f0f0f0",
        fontSize: 13,
        color: "#b7b7b7"
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