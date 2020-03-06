import React from 'react';
import './MapSettings.styles.css';
import {useSelector} from "react-redux";
import {selectActiveMapTab} from "../../store/ui/ui.selectors";
import PhotoSpotsContent from "../PhotoSpotsContent";
import WeatherContent from "../WetherContent";
import {MAP_PHOTO_SPOTS_TAB_KEY} from "../../constants/map.constants";

const MapSettings = () => {
    const activeTab = useSelector(selectActiveMapTab);
    const content = activeTab === MAP_PHOTO_SPOTS_TAB_KEY ? <PhotoSpotsContent/> : <WeatherContent/>;
    return <div className="bg-white h-100 py-0 py-md-4" style={{overflowY: 'auto'}}>
            {content}
        </div>
};

export default MapSettings;
