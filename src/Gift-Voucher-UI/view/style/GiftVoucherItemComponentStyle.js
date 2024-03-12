import { StyleSheet } from 'react-native';

const labelFontSize = 15;
const iconWidth = 70;
const iconHeight = 40;

export default StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    iconContainer: {
        height: iconHeight,
        width: iconWidth,
    },
    iconPlaceholder: {
        backgroundColor: '#7260c8',
        paddingVertical: iconHeight,
        paddingHorizontal: iconWidth,
        borderRadius: 10,
    },
    labelsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        position: 'absolute',
        left: 10,
        fontWeight: '500',
        fontSize: labelFontSize,
        color: 'black',
    },
    itemPriceContainer: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
    },
    itemPrice: {
        fontWeight: 'bold',
        fontSize: labelFontSize,
        color: 'black',
    },
    itemPriceSymbol: {
        fontWeight: 'bold',
        fontSize: labelFontSize,
        color: '#7260c8',
    },
});
