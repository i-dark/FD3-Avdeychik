var ShopBlock = React.createClass({

    displayName: 'ShopBlock',

    propTypes: {
        catalog: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string,
                leftInStock: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function () {
        return {
            'catalog': this.props.catalog
        };
    },

    deleteItemCallback: function (id) {
        this.setState(
            {catalog: this.state.catalog.filter(item => item.id != id)}
        );
    },

    render: function () {

        const listItems = this.state.catalog.map((item) =>
            <ItemBlock key={item.id} item={item} deleteCallback={this.deleteItemCallback}/>
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
