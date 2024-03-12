import React from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback,
    Image,
} from 'react-native';
import Styles from './style/GiftVoucherItemComponentStyle';

const GiftVoucherItemComponent = ({
    itemID = 'undefined',
    itemName = 'undefined',
    itemPrice = 0,
    itemPriceSymbol = '',
    itemIcon,
    clickHandler = () => console.log(`No click handler: ${itemID}`),
}) => (
    <TouchableNativeFeedback
        onPress={() => clickHandler(itemID)}
    >
        <View style={Styles.parentContainer}>
            <View>
                {itemIcon
                    ? <Image style={Styles.iconContainer} source={itemIcon}/>
                    : <View style={Styles.iconPlaceholder}/>}
            </View>
            <View style={Styles.labelsContainer}>
                <Text style={Styles.itemName}>
                    {itemName}
                </Text>
                <View style={Styles.itemPriceContainer}>
                    <View>
                        <Text style={Styles.itemPriceSymbol}>
                            {itemPriceSymbol}
                        </Text>
                    </View>
                    <View>
                        <Text style={Styles.itemPrice}>
                            {itemPrice.toFixed(2)}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableNativeFeedback>
);
export default GiftVoucherItemComponent;
