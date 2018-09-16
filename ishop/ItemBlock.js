var ItemBlock = React.createClass({

        displayName: 'ItemBlock',

        propTypes: {
            item: React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                url: React.PropTypes.string,
                leftInStock: React.PropTypes.number.isRequired,
            })

        },

        render: function () {

            const url = this.props.item.url ? this.props.item.url : "http://up100.uppolice.gov.in/PublishingImages/No-Image-Basic.png"
            const img = <img src={url} />;

            return (
                <tr>
                    <td>
                        <div className="imgBlock">
                            {img}
                        </div>
                    </td>
                    <td>
                        {this.props.item.name}
                    </td>

                </tr>
            );
        }
        ,

    })
;
