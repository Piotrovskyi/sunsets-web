import React from 'react';
import './Navigation.styles.css';

const Navigation = () => (
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn" id="mapbutton">
        Map: Low
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="javascript:;" onclick="myCustomModule.changeMap('low');">
          Low Clouds
        </a>
        <a href="javascript:;" onclick="myCustomModule.changeMap('medium');">
          Medium Clouds
        </a>
        <a href="javascript:;" onclick="myCustomModule.changeMap('high');">
          High Clouds
        </a>
        <a href="javascript:;" onclick="myCustomModule.changeMap('sunset');">
          Sunset beauty
        </a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn" id="daybutton">
        Day:0
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="javascript:;" onclick="myCustomModule.changeDay(0);">
          Today
        </a>
        <a href="javascript:;" onclick="myCustomModule.changeDay(1);">
          Tomorrow
        </a>
        <a href="javascript:;" onclick="myCustomModule.changeDay(2);">
          After Tomorrow
        </a>
      </div>
    </div>
  </div>
);

export default Navigation;
