const ShelfSelectItem = props => {
    const { name, value } = props;
    return(
        <option value={value}>{name}</option>
    )
}

export default ShelfSelectItem;