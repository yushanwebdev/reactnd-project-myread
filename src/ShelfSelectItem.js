import PropTypes from "prop-types";

const ShelfSelectItem = props => {
    const { shelf: { name, value } } = props;
    return(
        <option value={value}>{name}</option>
    )
}

ShelfSelectItem.propTypes = {
    shelf: PropTypes.object.isRequired
}

export default ShelfSelectItem;