export default class ItemDataEntity {
    constructor(props) {
        this.itemID = props.itemID;
        this.itemName = props.itemName;
        this.itemPrice = props.itemPrice;
        this.itemPriceSymbol = props.itemPriceSymbol;
        this.itemIcon = props.itemIcon;
        this.clickHandler = props.clickHandler;
    }
}
