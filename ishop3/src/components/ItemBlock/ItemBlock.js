import React from "react";
import PropTypes from "prop-types";

class ItemBlock extends React.Component {

    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            url: PropTypes.string,
            leftInStock: PropTypes.number.isRequired,
            selected: PropTypes.bool
        }),
    };

    deleteItem = (event) => {
        this.props.deleteCallback(this.props.item.id);
    }

    selectItem = (event) => {
        this.props.selectItemCallback(this.props.item.id);
    }

    render() {
        const url = this.props.item.url ? this.props.item.url : "http://up100.uppolice.gov.in/PublishingImages/No-Image-Basic.png"
        const img = <img src={url}/>;

        return (
            <tr onClick={this.selectItem}
                className={this.props.selected ? "SelectedItem" : ""}>
                <td>
                    <div className="imgBlock">
                        {img}
                    </div>
                </td>
                <td>
                    {this.props.item.name}
                </td>
                <td>
                    {this.props.item.price} $
                </td>
                <td>
                    <input value={"delete"} type={"button"} onClick={this.deleteItem}/>
                </td>

            </tr>
        );
    }
}

export default ItemBlock;
