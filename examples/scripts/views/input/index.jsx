/**
 * Created by liubo on 15/3/12.
 */
//var Waves = require('../../mixins/waves');
var Navigator = require('../home/nav.jsx'); //导航
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var Input = ReactBootstrap.Input;
var ButtonInput = ReactBootstrap.ButtonInput;
var FormControls = ReactBootstrap.FormControls;
var Glyphicon = ReactBootstrap.Glyphicon;
var Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var App = React.createClass({
    getInitialState() {
        return {
            value: '',
            disabled: true,
            style: null
        };
    }
    ,render: function() {

        //附件
        const innerGlyphicon = <Glyphicon glyph='music' />;
        const innerButton = <Button>Before</Button>;
        const innerDropdown = (
            <DropdownButton title='Action'>
                <MenuItem key='1'>Item</MenuItem>
            </DropdownButton>
        );
        const innerRadio = <input type='radio' aria-label='...' />;
        const innerCheckbox = <input type='checkbox' aria-label='...' />;

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

                    <Panel collapsible defaultExpanded header='类型' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                输入框组件，支持<code>select, textarea</code>通过<code>getValue()</code>获取多选数组
                            </ListGroupItem>
                            <ListGroupItem>
                                <form>
                                    <Input type='text' label='Text' placeholder='请输入文字' />
                                    <Input type='email' label='Email Address' placeholder='请输入电子邮件' />
                                    <Input type='password' label='Password' />
                                    <Input type='file' label='File' help='[Optional] Block level help text' />
                                    <Input type='checkbox' label='Checkbox' checked readOnly />
                                    <Input type='radio' label='Radio' checked readOnly />
                                    <Input type='select' label='Select' placeholder='select'>
                                        <option value='select'>select</option>
                                        <option value='other'>...</option>
                                    </Input>
                                    <Input type='select' label='Multiple Select' multiple>
                                        <option value='select'>select (multiple)</option>
                                        <option value='other'>...</option>
                                    </Input>
                                    <Input type='textarea' label='Text Area' placeholder='textarea' />
                                    <ButtonInput value='Button Input' />
                                    <ButtonInput type='reset' value='Reset Button' />
                                    <ButtonInput type='submit' value='Submit Button' />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='表单文字' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过<code>FormControls.Static</code>设置表单文字
                            </ListGroupItem>
                            <ListGroupItem>
                                <form className="form-horizontal">
                                    <FormControls.Static className="col-xs-10 col-xs-offset-2" value="I'm in a form" />
                                    <FormControls.Static label="First Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10" value="Bo" />
                                    <FormControls.Static label="Last Name" labelClassName="col-xs-2" wrapperClassName="col-xs-10">Liu</FormControls.Static>
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='表单按钮' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                表单按钮通过<code>&lt;ButtonInput/&gt;</code>生成，可以按需求设置类型<code>type="reset" or type="submit"</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <form>
                                    <Input type="text" ref="inputButton" onChange={this.handleChangeForInputButton} />
                                    <ButtonInput bsSize="small">Child Text</ButtonInput>
                                    <ButtonInput type="reset" bsStyle="primary" onClick={this.resetValidationForInputButton} />
                                    <ButtonInput type="submit" value="提交您输入的内容" bsStyle={this.state.style} bsSize="large" disabled={this.state.disabled} />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>


                    <Panel collapsible defaultExpanded header='附件' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                表单按钮通过<code>&lt;ButtonInput/&gt;</code>生成，可以按需求设置类型<code>type="reset" or type="submit"</code>
                            </ListGroupItem>
                            <ListGroupItem>
                                <form>
                                    <Input type='text' addonBefore='@' />
                                    <Input type='text' addonAfter='.00' />
                                    <Input type='text' addonBefore='$' addonAfter='.00' />
                                    <Input type='text' addonAfter={innerGlyphicon} />
                                    <Input type='text' buttonBefore={innerButton} />
                                    <Input type='text' buttonAfter={innerDropdown} />
                                    <Input type='text' addonBefore={innerRadio} />
                                    <Input type='text' addonBefore={innerCheckbox} />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='尺寸' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过<code>bsSize</code>属性设置输入框尺寸
                            </ListGroupItem>
                            <ListGroupItem>
                                <form>
                                    <Input type='text' bsSize="large" placeholder='Large text' />
                                    <Input type='text' bsSize="medium" placeholder='Normal text' />
                                    <Input type='text' bsSize="small" placeholder='Small text' />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='验证' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过<code>bsStyle</code>属性设置输入框样式，包括<code>success, warning or error</code>，添加<code>hasFeedback</code>属性用来显示图标
                            </ListGroupItem>
                            <ListGroupItem>
                                <form>
                                    <Input type='text' bsStyle='success' label='Success' hasFeedback />
                                    <Input type='text' bsStyle='warning' label='Warning' hasFeedback />
                                    <Input type='text' bsStyle='error' label='Error' hasFeedback />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='水平表单' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                通过设置<code>labelClassName 和 wrapperClassName</code>属性设置表单列样式，<code>checkbox 和 radio</code>不需要特别处理
                            </ListGroupItem>
                            <ListGroupItem>
                                <form className='form-horizontal'>
                                    <Input type='text' label='Text' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                                    <Input type='textarea' label='Textarea' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                                    <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-10' help='Offset is applied to wrapper.' />
                                </form>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>

                    <Panel collapsible defaultExpanded header='作为容器使用' bsStyle='info'>
                        <ListGroup fill>
                            <ListGroupItem>
                                如果没有设置type属性，子元素将被展示，但不是一个input组件，不支持<code>getValue()</code>方法
                            </ListGroupItem>
                            <ListGroupItem>
                                <Input label='Input wrapper' help='Use this when you need something other than the available input types.' wrapperClassName='wrapper'>
                                    <Row>
                                        <Col xs={6}>
                                            <input type='text' className='form-control' />
                                        </Col>
                                        <Col xs={6}>
                                            <input type='text' className='form-control' />
                                        </Col>
                                    </Row>
                                </Input>
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
    ,resetValidationForInputButton() {
        this.setState({
            disabled: true,
            style: null
        });
    }
    ,validationStateForInputButton() {
        let length = this.refs.inputButton.getValue().length;
        let style = 'danger';

        if (length > 10) { style = 'success'; }
        else if (length > 5) { style = 'warning'; }

        let disabled = style !== 'success';

        return { style, disabled };
    }
    ,handleChangeForInputButton() {
        this.setState( this.validationStateForInputButton() );
    }
});

module.exports = App;