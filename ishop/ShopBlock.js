var ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    propTypes: {
        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                url: React.PropTypes.string,
                leftInStock: React.PropTypes.number.isRequired,
            })
        )
    },

    render: function () {

        const listItems = this.props.catalog.map((item) =>
            <ItemBlock key={item.id} item={item}></ItemBlock>
        );

        return (<div className="ShopBlock">
            <table className="catalog" width="100%">
                <tbody>
                {listItems}
                </tbody>
            </table>
        </div>);
    },

});
