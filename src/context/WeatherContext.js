import {dayValuesMap} from "../constants/days.constants";
import * as React from "react";
import moment from "moment";
import {CLOUDS_OPT} from "../constants/option.constants";
import {MAP_DATA_URL} from "../constants/map.constants";

const initialValue = {
    day: dayValuesMap.TODAY,
    time: moment().get('hours'),
    param: CLOUDS_OPT,
    features: null,
    loading: false,
    errors: null,
};

const WeatherContext = React.createContext();
const {Provider} = WeatherContext;

class WeatherDataProvider extends React.Component {
    state = {...initialValue};

    setDay = day => {
        this.setState(state => ({...state, day, loading: true}));
        this.fetchFeatures()
    };

    setTime = time => {
        this.setState(state => ({...state, time, loading: true}));
        this.fetchFeatures()
    };

    setParam = param => {
        this.setState(state => ({...state, param, loading: true}));
        this.fetchFeatures();
    };

    setFeatures = features => this.setState(state => ({...state, features, loading: false}));

    setError = errors => this.setState(state => ({...state, errors, loading: false}));

    fetchFeatures = () => {
        const {state: {day, time, param}} = this;
        fetch(`${MAP_DATA_URL}${day}/${time}/${param}.json`)
            .then(data => data.json())
            .then(this.setFeatures)
            .catch(this.setError)
    };

    render() {
        return <Provider
            value={{
                state: this.state,
                mutations: {
                    setDay: this.setDay,
                    setTime: this.setTime,
                    setParam: this.setParam,
                    fetchFeatures: this.fetchFeatures,
                }
            }}
        >
            {this.props.children}
        </Provider>
    }
}

export {WeatherDataProvider, WeatherContext,};
