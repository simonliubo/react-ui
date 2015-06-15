/**
 * Created by liubo on 15/3/12.
 */
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Alert = ReactBootstrap.Alert;
var Button = ReactBootstrap.Button;

var App = React.createClass({
    getInitialState() {
        return {
            alertVisible: true
            ,alertVisible2: false
        };
    }
    ,render: function() {

        var self = this;
        function createAlert(){
            if (self.state.alertVisible) {
                return (
                    <Alert bsStyle='danger' onDismiss={self.handleAlertDismiss}>
                        <h4>Oh snap! You got an error!</h4>

                        <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.</p>

                        <p>
                            <Button bsStyle='danger'>Take this action</Button>
                            <span> or </span>
                            <Button onClick={self.handleAlertDismiss}>隐藏警告框</Button>
                        </p>
                    </Alert>
                )
            }
            return(
                <Button onClick={self.handleAlertShow}>显示警告框</Button>
            )
        }

        function createAlertAfter(){
            if (self.state.alertVisible2) {
                return (
                    <Alert bsStyle='danger' onDismiss={self.handleAlertDismiss2} dismissAfter={2000}>
                        <h4>Oh snap! You got an error!</h4>
                        <p>But this will hide after 2 seconds.</p>
                    </Alert>
                );
            }

            return (
                <Button onClick={self.handleAlertShow2}>显示警告框</Button>
            );
        }

        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='默认样式' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                默认样式
                            </ListGroupItem>
                            <ListGroupItem>
                                <Alert bsStyle='warning'>
                                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                                </Alert>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='关闭事件' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                关闭警告框触发<code> onDismiss </code>事件
                            </ListGroupItem>
                            <ListGroupItem>
                                {createAlert()}
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='自动关闭' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                设置<code> dismissAfter </code>属性自动关闭警告框
                            </ListGroupItem>
                            <ListGroupItem>
                                {createAlertAfter()}
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
    ,handleAlertDismiss: function(){
        this.setState({alertVisible: false});
    }
    ,handleAlertShow: function(){
        this.setState({alertVisible: true});
    }
    ,handleAlertDismiss2() {
        this.setState({alertVisible2: false});
    }
    ,handleAlertShow2() {
        this.setState({alertVisible2: true});
    }

});

module.exports = App;