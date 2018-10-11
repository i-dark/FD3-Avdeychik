"use strict";

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';


let text = "111<br>222<br/>333<br />444";


class Nl2br1 extends React.Component {

    render() {
        let text = '';
        text = this.props.text.split(/<br[^>]*>/).map(x => text = <span key={Math.random()}>{x}<br/></span>);
        return (<div>
            {text}
        </div>);
    }

}

class Nl2br2 extends React.Component {

    render() {
        const text = this.props.text;
        return (<div>
            { ReactHtmlParser(text)}
        </div>);
    }

}


ReactDOM.render(
    <div>
        <Nl2br1 text={text}/>
        <hr/>
        <Nl2br2 text={text}/>
    </div>
    , document.getElementById('container')
);

