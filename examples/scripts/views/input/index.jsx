/**
 * Created by liubo on 15/3/12.
 */
var Waves = require('../../mixins/waves');
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Input = ReactBootstrap.Input;

var App = React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    }
    ,render: function() {
        return(
            <div className="row">
                <div className="col-xs-12 col-md-8">

                    <Panel collapsible defaultExpanded header='输入框' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                输入框组件，支持<code>label, help, text input add-ons, placeholder, validation</code>通过<code>getValue() or getChecked()</code>获取当前状态，<code>getInputDOMNode()</code>方法返回当前输入框dom对象
                            </ListGroupItem>
                            <ListGroupItem>
                                <Input
                                    type='text'
                                    value={this.state.value}
                                    placeholder='请输入内容'
                                    label='表单验证'
                                    help='请输入字符串，验证长度'
                                    bsStyle={this.validationState()}
                                    hasFeedback
                                    ref='input'
                                    groupClassName='group-class'
                                    labelClassName='label-class'
                                    onChange={this.handleChange} />
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                </div>
                <div className="col-xs-6 col-md-4">

                </div>

            </div>

        );

    }
    //验证state数据
    ,validationState() {
        let length = this.state.value.length;
        if (length > 10) { return 'success'; }
        else if (length > 5) { return 'warning'; }
        else if (length > 0) { return 'error'; }
    }
    //change事件
    ,handleChange() {
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            value: this.refs.input.getValue()
        });
    }
});

module.exports = App;