"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Rainbow from "./components/Rainbow/Rainbow.js"

// let colors = ["#aabbcc", "#F00", "#0FF", "#00F","rgb(255,0,0)"];

let colors = [];

let r = 50;
let g = 0;
let b = 50;
for (let i=0; i<255; i++){
    r = r < 255 ? r+1 : r;
    g = g < 255 ? g+1 : g;
    b = b < 255 ? b+2 : b;
    colors.unshift(`rgb(${r},${g},${b})`);
}

var shopCatalog = require("./catalog");

    ReactDOM.render(
        <Rainbow colors={colors} level={5}>
            Some Text
        </Rainbow>
    , document.getElementById('container')
);

