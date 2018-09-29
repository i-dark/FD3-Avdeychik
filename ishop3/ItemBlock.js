var ItemBlock = React.createClass({

        displayName: 'ItemBlock',

        propTypes: {
            item: React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string,
                leftInStock: React.PropTypes.number.isRequired,
                selected: React.PropTypes.bool
            }),
        },

        deleteItem: function (event) {
            this.props.deleteCallback(this.props.item.id);
        },

        selectItem: function (event) {
            this.props.selectItemCallback(this.props.item.id);
        },

        render: function () {

            const url = this.props.item.url ? this.props.item.url : "http://up100.uppolice.gov.in/PublishingImages/No-Image-Basic.png"
            const img = <img src={url} />;

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
        ,

    })
;
