import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import styled from 'styled-components';


const SelectInputStyles = styled.nav`

select {
    font-family: 'IBM Plex Mono', monospace
}

.selectdiv {
  position: relative;
  /*Don't really need this just for demo styling*/
  
  float: left;
  width: 100%;
  margin: 10px 0;
}

/* IE11 hide native button (thanks Matt!) */
select::-ms-expand {
display: none;
}

.selectdiv:after {
    content: '>';
  font: 17px "Consolas", monospace;
  color: #333;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 11px;
  /*Adjust for position however you want*/
  
  top: 18px;
  padding: 0 0 2px;
  border-bottom: 1px solid #999;
  /*left line */
  
  position: absolute;
  pointer-events: none;
}

.selectdiv select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Add some styling */
  
  display: block;
  width: 100%;
  height: 50px;
  /* float: right; */
  margin: 5px 0px;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-color: #ffffff;
  background-image: none;
  border: 2px solid #8d7249;
  -ms-word-break: normal;
  word-break: normal;
}

label {
}


`;

function AdminLayout() {
    return (
        <SelectInputStyles>
            <label>White Balance</label>
            <div class="selectdiv">
                <label>
                    <select>
                        <option selected>Auto</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Last long option</option>
                    </select>
                </label>
            </div>

        </SelectInputStyles>
    );
}

export default AdminLayout;