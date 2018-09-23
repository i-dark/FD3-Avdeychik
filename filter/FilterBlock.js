var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        data: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        )
    },

    getInitialState: function () {
        return {
            "filteredData": this.props.data,
            "doSort": false,
            "filter": ''
        }
    },

    toggleSort: function (event) {
        this.state.doSort = event.target.checked;
        this.applySortAndFilter();
    },

    filterChange: function (event) {
        this.state.filter = event.target.value;
        this.applySortAndFilter();
    },

    applySortAndFilter: function () {
        let data = this.props.data.slice(0); //Clone array
        if (this.state.doSort) {
            data = data.sort();
        }

        if (this.state.filter) {
            data = data.filter(item => item.search(this.state.filter) >= 0);
        }

        this.setState({"filteredData": data})
    },

    render: function () {
        const listItems = this.state.filteredData.map((item) =>
            <span key={Math.random()}>{item} </span>
        );

        return (<div>
            Sort: <input checked={this.state.doSort} type="checkbox" onChange={this.toggleSort}/>
            Search: <input type="text" value={this.state.filter} onChange={this.filterChange}/>
            <br/>
            {listItems}
        </div>);
    },

});
