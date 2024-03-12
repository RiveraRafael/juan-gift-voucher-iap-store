const TabLabelStyle = (Styles, focused) => {
    if (focused) return Styles.tabLabel;
    if (!focused) return Styles.tabLabelSelected;
    return Styles.tabLabel;
};

export default TabLabelStyle;
