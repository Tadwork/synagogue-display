const React = require('react');
const Entry = require('./entry')
const Clock = require('./clock');
const EditButton = require('./editButton');
const ReactGridLayout = require('react-grid-layout');

require("../css/board.css");
require("react-grid-layout/css/styles.css");
require("react-resizable/css/styles.css");


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            updating: !this.state.updating
        });
    }

	render() {
          // layout is an array of objects, see the demo for more complete usage
        var layout = [
        {i: 'Clock', x: 3, y: 0, w: 6, h: 2,static:true},
        {i: 'Edit', x: 11, y: 0, w: 1, h: 1,static:true},
        {i: 'Shachris', x: 3, y: 1, w: 6, h: 2},
        {i: 'Mincha', x: 3, y: 2, w: 6, h: 2},
        {i: 'Maariv', x: 3, y: 3, w: 6, h: 2},

        ];
        return (
            <ReactGridLayout className="layout" layout={layout} cols={12} rows={12} rowHeight={75} width={1200} margin={[30, 30]}>
                
                <div  key={'Clock'}>
                    <Clock/>
                </div>
                <div  key={'Shachris'}>
                    <Entry updating={this.state.updating} title="Shachris" />
                </div>

                <div  key={'Mincha'}>
                    <Entry updating={this.state.updating} title="Mincha" />
                </div>

                <div  key={'Maariv'}>
                    <Entry updating={this.state.updating} title="Maariv" />
                </div>

                <div  key={'Edit'}>
                    <EditButton updating={this.state.updating} handleClick={this.toggle} />
                </div>
            </ReactGridLayout>
        )
    }
}

/*function Board() {
    let updating = localStorage.getItem('updating') || 'false';

    function toggle() {
        updating = localStorage.getItem('updating') === 'true' ? 'false' : 'true';
        localStorage.setItem('updating', updating);
    }

    return (
        <div>
            <Clock />
            <Entry updating={updating} title="Shachris" />
            <Entry updating={updating} title="Mincha" />
            <Entry updating={updating} title="Maariv" />
            <EditButton updating={updating} handleClick={toggle} />
        </div> 
    )
}*/

module.exports = Board;