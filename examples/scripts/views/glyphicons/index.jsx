/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var Alert = ReactBootstrap.Alert;
var Glyphicon = ReactBootstrap.Glyphicon;

var App = React.createClass({
    render: function() {

        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='字体图标' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                可以把它们应用到按钮、工具条中的按钮组、导航或输入框等地方。
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button><Glyphicon glyph='align-left' /></Button>
                                        <Button><Glyphicon glyph='align-center' /></Button>
                                        <Button><Glyphicon glyph='align-right' /></Button>
                                        <Button><Glyphicon glyph='align-justify' /></Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button bsSize='large'><Glyphicon glyph='star' /> Star</Button>
                                        <Button><Glyphicon glyph='star' /> Star</Button>
                                        <Button bsSize='small'><Glyphicon glyph='star' /> Star</Button>
                                        <Button bsSize='xsmall'><Glyphicon glyph='star' /> Star</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Alert bsStyle='danger'>
                                    <Glyphicon glyph='glyphicon glyphicon-exclamation-sign' />
                                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                                </Alert>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                </div>
                <div className="col-xs-6 col-md-4">
                    <Navigator />
                </div>

            </div>

        );
    }

});

module.exports = App;