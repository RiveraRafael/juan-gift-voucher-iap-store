import { StyleSheet } from 'react-native';

const nameFontSize = 14;
const priceFontSize = 15;
const iconWidth = 68;
const iconHeight = 40;

export default StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        paddingVertical: 13.7,
        paddingHorizontal: 11.5,
        marginBottom: 2,
        marginTop: 8.5,
        backgroundColor: '#FFFFFF',
        borderRadius: 3,
    },
    iconContainer: {
        height: iconHeight,
        width: iconWidth,
    },
    iconPlaceholder: {
        backgroundColor: '#7260c8',
        paddingVertical: iconHeight,
        paddingHorizontal: iconWidth,
        borderRadius: 8,
    },
    labelsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        position: 'absolute',
        left: 8,
        fontSize: nameFontSize,
        color: 'black',
    },
    itemPriceContainer: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
    },
    itemPrice: {
        fontWeight: '500',
        fontSize: priceFontSize,
        color: 'black',
    },
    itemPriceSymbol: {
        fontWeight: '500',
        fontSize: priceFontSize,
        color: '#7260c8',
    },
});
