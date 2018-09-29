"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ShopBlock from "./components/ShopBlock/ShopBlock";

var shopCatalog = require("./catalog");

    ReactDOM.render(
    <ShopBlock catalog={shopCatalog}/>
    , document.getElementById('container')
);

