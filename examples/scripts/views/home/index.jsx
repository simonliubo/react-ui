/**
 * Created by liubo on 15/3/12.
 */
var Waves = require('../../mixins/waves');
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

var App = React.createClass({
    mixins: [ Waves ]
    ,render: function() {

        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">
                    <Panel collapsible defaultExpanded header='按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button>Default</Button>
                                    <Button bsStyle='primary'>Primary</Button>
                                    <Button bsStyle='success'>Success</Button>
                                    <Button bsStyle='info'>Info</Button>
                                    <Button bsStyle='warning'>Warning</Button>
                                    <Button bsStyle='danger'>Danger</Button>
                                    <Button bsStyle='link'>Link</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                通过修改bsStyle属性可以设置按钮类型。
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='Materialize-按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-light"
                                        >Default</Button>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-green"
                                        >Default</Button>
                                    <Button href="javascript:void(0)"
                                            onMouseDown={this._onMouseDown}
                                            onMouseUp={this._onMouseUp}
                                            onMouseLeave={this._onMouseLeave}
                                            onClick={this._onClick}
                                            className="waves-effect waves-teal"
                                            bsStyle='primary'
                                        >Primary</Button>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>引入Waves,可设置动态水波纹效果。</ListGroupItem>
                            <ListGroupItem>
                                默认的样式：waves-light、waves-teal、waves-red、waves-yellow、waves-orange、waves-purple、waves-green
                            </ListGroupItem>
                            <ListGroupItem>展示效果：this.Effect.show(e, e.target);</ListGroupItem>
                            <ListGroupItem>关闭效果：this.Effect.hide(e, e.target);</ListGroupItem>
                            <ListGroupItem>
                                <code>&lt;Button href="javascript:void(0)"
                                    onMouseDown={this._onMouseDown}
                                    onMouseUp={this._onMouseUp}
                                    onMouseLeave={this._onMouseLeave}
                                    onClick={this._onClick}
                                    className="waves-effect waves-light"
                                    &gt;Default&lt;/Button&gt;
                                </code>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='按钮尺寸' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <Button bsSize='large'>Default Button</Button>
                                    <Button bsStyle='primary' bsSize='large'>large Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button>Default Button</Button>
                                    <Button bsStyle='primary'>Default Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button bsSize='small'>Default Button</Button>
                                    <Button bsStyle='primary' bsSize='small'>Default Button</Button>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button bsSize='xsmall'>Default Button</Button>
                                    <Button bsStyle='primary' bsSize='xsmall'>Default Button</Button>
                                </ButtonToolbar>

                            </ListGroupItem>
                            <ListGroupItem>
                                通过添加bsSize属性设置按钮尺寸;预定义的尺寸有：bsSize="large", bsSize="small", or bsSize="xsmall"
                            </ListGroupItem>
                            <ListGroupItem>
                                如果你想在一行输出多个内联按钮，它们应该放在<code>&lt;ButtonToolbar&gt;</code>组件之中
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>
                </div>
                <div className="col-xs-6 col-md-4">

                </div>

            </div>

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
        this.Effect.hide(e, e.target);
    }

});

module.exports = App;