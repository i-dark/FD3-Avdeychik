import React from "react";
import PropTypes from "prop-types";

class Rainbow extends React.Component {

    render() {
        let color = this.props.colors.pop();

        return (<div style={{border: "1px solid " + color}}>
            {
                this.props.colors.length>0 && <Rainbow colors={this.props.colors}>{this.props.children}</Rainbow>
            }
            {
                this.props.colors.length===0 && this.props.children
            }
        </div>);
    }

}

export default Rainbow;
