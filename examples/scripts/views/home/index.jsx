/**
 * Created by liubo on 15/3/12.
 */
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

var Waves = require('../../waves');

var Button = ReactBootstrap.Button;
var App = React.createClass({
    mixins: [ Waves ]
    ,render: function() {


        return(
            <ButtonToolbar>
                <Button href="javascript:void(0)"
                        onMouseDown={this._onMouseDown}
                        onMouseUp={this._onMouseUp}
                        onMouseLeave={this._onMouseLeave}
                        onClick={this._onClick}
                        className="waves-effect waves-light"
                    >Default</Button>
                <Button>Default</Button>
                <Button bsStyle='primary'
                        onMouseDown={this._onMouseDown}
                        onMouseUp={this._onMouseUp}
                        onMouseLeave={this._onMouseLeave}
                        onClick={this._onClick}
                        className="waves-effect waves-light"
                    >Default</Button>
                <Button bsStyle='warning'>Warning</Button>
            </ButtonToolbar>
        );

    }
    ,_onMouseDown: function(e){
        this.Effect.show(e, e.target);
    }
    ,_onMouseUp: function(e){
        this.Effect.hide(e, e.target);
    }
    ,_onMouseLeave: function(e){
        this.Effect.hide(e, e.target);
    }
    ,_onClick: function(e){
        if (this.props.onClick) this.props.onClick();
        this.Effect.hide(e, e.target);
    }

});

module.exports = App;