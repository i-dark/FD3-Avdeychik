import React from "react";
import PropTypes from "prop-types";

import "./ShopBlock.css";
import ItemBlock from "../ItemBlock/ItemBlock";

class ShopBlock extends React.Component {

    static propTypes = {
        catalog: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string,
                leftInStock: PropTypes.number.isRequired,
            })
        )
    };

    state = {
        'catalog': this.props.catalog,
        'selectedItems': []
    };

    deleteItemCallback = (id) => {
        this.setState(
            {catalog: this.state.catalog.filter(item => item.id != id)}
        );
    }

    selectItemCallback = (itemId) => {
        this.setState({selectedItems: [itemId]});
    }

    render() {

        const listItems = this.state.catalog.map((item) =>
                <ItemBlock
                    key={item.id}
                    item={item}
                    selected={this.state.selectedItems.indexOf(item.id) > -1}
                    deleteCallback={this.deleteItemCallback}
                    selectItemCallback={this.selectItemCallback}
                />
            )
        ;

        return (<div className="ShopBlock">
            <table className="catalog" width="100%">
                <tbody>
                {listItems}
                </tbody>
            </table>
        </div>);
    }

}

export default ShopBlock;
