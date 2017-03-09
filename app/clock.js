const React = require('react');

const {ApAnalogClock, ApAnalogClockStyle} =  require('apeman-react-clock');

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date()};
    // }

    // componentDidMount() {
    //     this.timerID = setInterval( 
    //         () => this.tick(), 
    //         1000
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    render() {
        return (
            <div className="clock">
                {/*<h2 className="inset">{this.state.date.toLocaleTimeString()}</h2>*/}
                
                <ApAnalogClockStyle scoped backgroundColor="#daba52"/>
                <ApAnalogClock />
            </div>
        );
    }
}

module.exports = Clock;