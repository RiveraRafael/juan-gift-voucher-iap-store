import React from 'react';
import { View, ScrollView } from 'react-native';
import GiftVoucherItemComponent from '../../Gift-Voucher-Item-Component/controller/GiftVoucherItemComponent';
import Styles from './style/DiamondsTabStyle';
import ItemDataEntity from '../model/ItemDataEntity';

const icon1 = require('../../../lib/resources/icon_1.png');
const icon2 = require('../../../lib/resources/icon_2.png');
const icon3 = require('../../../lib/resources/icon_3.png');
const icon4 = require('../../../lib/resources/icon_4.png');
const icon5 = require('../../../lib/resources/icon_5.png');

const CoinsTab = () => {
    const clickHandler = (id) => console.log(id);
    const giftVoucherProp = [
        new ItemDataEntity({
            itemID: 'diamond_giftcard_1',
            itemName: 'Small gift card',
            itemPrice: 100,
            itemPriceSymbol: '₱',
            itemIcon: icon1,
            clickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_2',
            itemName: 'Medium gift card',
            itemPrice: 250,
            itemPriceSymbol: '₱',
            itemIcon: icon2,
            clickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_3',
            itemName: 'Large gift card',
            itemPrice: 500,
            itemPriceSymbol: '₱',
            itemIcon: icon3,
            clickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_4',
            itemName: 'X-Large gift card',
            itemPrice: 750,
            itemPriceSymbol: '₱',
            itemIcon: icon4,
            clickHandler,
        }),
        new ItemDataEntity({
            itemID: 'diamond_giftcard_5',
            itemName: 'X-L Card gift card',
            itemPrice: 1500,
            itemPriceSymbol: '₱',
            itemIcon: icon5,
            clickHandler,
        }),
    ];

    return (
        <View
            style={Styles.parentContainer}
        >
            <ScrollView>
                {giftVoucherProp.map((item) => (
                    <GiftVoucherItemComponent key={item.itemID} {...item}/>
                ))}
            </ScrollView>
        </View>
    );
};

export default CoinsTab;
