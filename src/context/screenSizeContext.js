import * as React from "react";
import throttle from "lodash/throttle";

const ScreenSizeContext = React.createContext();
const {Provider} = ScreenSizeContext;
const MAX_MOBILE_SCREEN_WIDTH = 768;

class ScreenSizeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: document.documentElement.clientWidth <= MAX_MOBILE_SCREEN_WIDTH}
    }

    componentDidMount() {
        const onResize = (e) => {
            const screenSize = e.target.document.documentElement.clientWidth;
            this.setState({isMobile: screenSize <= MAX_MOBILE_SCREEN_WIDTH})
        };
        window.addEventListener("resize", throttle(onResize, 100))
    }

    state = {isMobile: false};

    render() {
        return <Provider
            value={this.state}
        >
            {this.props.children}
        </Provider>
    }
}

export {ScreenSizeProvider, ScreenSizeContext,};
