import React from 'react';
import { View, ScrollView } from 'react-native';
import GiftVoucherItemComponent from './GiftVoucherItemComponent';
import Styles from './style/DiamondsTabStyle';

const DiamondsTab = ({ list }) => (
    <View
        style={Styles.parentContainer}
    >
        <ScrollView>
            {list.map((item) => (
                <GiftVoucherItemComponent key={item.itemID} {...item}/>
            ))}
        </ScrollView>
    </View>
);

export default DiamondsTab;
