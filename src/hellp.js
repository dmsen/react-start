// import logo from './logo.svg';
import './App.css';
import React from 'react';
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];

function Name(props) {
  return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
  return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
  return <h1>网站小名：{props.nickname}</h1>;
}
function FormattedDate(props) {
  return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(),
                  index:0        
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
// 默认props
class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
 
HelloMessage.defaultProps = {
  name: 'Runoob'
};
// 组合使用state 和 props
class WebSite extends React.Component {
  constructor() {
      super();
 
      this.state = {
        name: "菜鸟教程",
        site: "https://www.runoob.com"
      }
    }
  render() {
    return (
      <div>
        <Name2 name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
}
 
 
 
class Name2 extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}
 
class Link extends React.Component {
  activateLasers(){
    console.log("link button")
  }
   
  handleClick(e) {
      e.preventDefault();
      console.log('链接被点击');
  }
  render() {
    return (
      <div>
      <button onClick={this.activateLasers}>
        激活按钮
      </button>
      <a href={this.props.site}>
        {this.props.site}
      </a>
      <a href="#" onClick={this.handleClick}>  //此时便阻止了默认的行为
      点我
      </a>
      </div>
    );
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
class Popper extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop(name, e){    
      //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* 通过 bind() 方法传递参数。 */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
          </div>
      );
  }
}

//条件渲染
function UserGreeting(props) {
  return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
  return <h1>请先注册。</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
 
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
 
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
 
  render() {
    const isLoggedIn = this.state.isLoggedIn;
 
    let button = null;
    // if (isLoggedIn) {
    //   button = <button onClick={this.handleLogoutClick} >点击注销</button>;
    // } else {
    //   button = <button onClick={this.handleLoginClick} >点击注册</button>;
    // }
    {isLoggedIn?button = <button onClick={this.handleLogoutClick} >点击注销</button> : button = <button onClick={this.handleLoginClick} >点击注册</button>;}
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
// &&与运算符
const messages = ['React', 'Re: React', 'Re:Re: React'];
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          您有 {unreadMessages.length} 条未读信息。
        </h2>
      }
    </div>
  );
}
// 隐藏内容
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
 
  return (
    <div className="warning">
      警告!
    </div>
  );
}
 
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
 
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
 
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? '隐藏' : '显示'}
        </button>
      </div>
    );
  }
}
// 循环遍历 添加key
const numbers = [1, 2, 3, 4, 5];
function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) =>
  // // <li >
  // //     {number}
  // //   </li>
  //   <li key={number.toString()}>
  //     {number}
  //   </li>
  // );
  return (
    // <ul>{listItems}</ul>
    // jsx 中 使用map
    <ul>
    {numbers.map((number) =>
      <ListItem key={number.toString()}
                value={number} />

    )}
  </ul>
  );
}
let Clockindex = 1
function numadd(){
  Clockindex += 1
  return Clockindex
}

function ListItem(props) {
  // 对啦！这里不需要指定key:
  return <li>{props.value}</li>;
}

// 关于 setstate
class Counter extends React.Component{
  constructor(props) {
      super(props);
      this.state = {clickCount: 0};
  }
  
  // handleClick() {
  //   this.setState({clickCount:this.state.clickCount+1});
  // }
  handleClick=()=>{
    this.setState({clickCount:this.state.clickCount+1});
  }
  render () {
    // return (<h2 onClick={()=>{this.handleClick()}}>点我！点击次数为: {this.state.clickCount}</h2>);
    return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
}

// 组件的生命周期
class Hello extends React.Component {
 
  constructor(props) {
      super(props);
      this.state = {opacity: 1.0};
  }
 
  componentDidMount() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }
 
  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}
// 生命周期初始化数据 实例初始化 state ， setNewnumber 用于更新 state。所有生命周期在 Content 组件中
class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = {data: 0};
  }
  
  setNewNumber=()=> {
    this.setState({data: this.state.data + 1})
  }
  render() {
      return (
         <div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
    }
}
 
 
class Content extends React.Component {
  componentWillMount() {
      console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
       console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
        console.log(newProps)
  }
  shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate")
        console.log(newProps, newState)
        return true;
  }
  componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
        console.log(prevProps, prevState)
  }
  componentWillUnmount() {
         console.log('Component WILL UNMOUNT!')
  }
 
    render() {
      return (
        <div>
          <h3>{this.props.myNumber}</h3>
        </div>
      );
    }
}
// 表单  使用onChange 来监听改变
class HelloMessageForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello Runoob!'};
      this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    var value = this.state.value;
    return <div>
            <input type="text" value={value} onChange={this.handleChange} /> 
            <h4>{value}</h4>
           </div>;
  }
}
// 表单  子组件来触发更改数据
class ContentFormChild extends React.Component {
  render() {
    return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
            </div>;
  }
}
class HelloMessageFormChild extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Hello Runoob!'};
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    var value = this.state.value;
    return <div>
            <ContentFormChild myDataProp = {value} 
              updateStateProp = {this.handleChange}></ContentFormChild>
           </div>;
  }
}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value,this.state.value) //输入的数据 之前的数据 因为是异步的进行更新
  }
 
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择您最喜欢的网站
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="gg">Google</option>
            <option value="rn">Runoob</option>
            <option value="tb">Taobao</option>
            <option value="fb">Facebook</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

//多个表单 使用name属性
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
 
    this.handleInputChange = this.handleInputChange.bind(this);
  }
 
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target.name, target.checked, target.value)
    this.setState({
      [name]: value
    });
  }
 
  render() {
    return (
      <form>
        <label>
          是否离开:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          访客数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

// 父子组件都用 from
class HelloMessageChildFrom extends React.Component {
  render(){
    return <div>
      <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
      <h4>子组件显示：{this.props.myDataProp}</h4>
      </div>;
  }
}
class HelloMessageparentFrom extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: '父组件',value1:"子组件"};
      this.handleChange = this.handleChange.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
  }
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange1(event) {
    this.setState({value1: event.target.value});
  }
  render() {
    var value = this.state.value;
    var value1 = this.state.value1;
    return <div>
            <table><tbody>
            <tr>
            <td>
              <input type="text" value={value} onChange={this.handleChange} /> 
              <h4>父组件显示：{value}</h4>
            </td>
            <td>
              <HelloMessageChildFrom myDataProp = {value1} updateStateProp = {this.handleChange1} />
            </td>
            </tr>
            </tbody></table>
           </div>;
  }
}

// ref 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '456'};
    this.handleClick = this.handleClick.bind(this);
}
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
    this.refs.myInput.value = 123
    // 更改state中的值
    // this.setState({value: 1010});
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
    console.log(this.state.value)
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" value={this.state.value}/>
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

// ref newapi
class MyComponentRef extends React.Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();  
  }
handleClick() {
  // 使用原生的 DOM API 获取焦点
  this.myRef.current.focus();
}
render() {
  //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
  return (
    <div>
      <input type="text" ref={this.myRef} />
      <input
        type="button"
        value="点我输入框获取焦点"
        onClick={this.handleClick.bind(this)}
      />
    </div>
  );
}
}
function App() {
  return (
    <div>
    <h1>Hello, world!</h1>
    <h1>{ 1+1 }</h1>
    <h1>{1 == 1 ? 'True!' : 'False'}</h1>
    <div>{arr}</div>
    <Name name="菜鸟教程" />
    <Url url="http://www.runoob.com" />
    <Nickname nickname="Runoob" />
    <Clock />
    <div>
    <h1>相互独立</h1>
      <Clock key={numadd()}/>
      <Clock key={numadd()}/>
      <Clock key={numadd()}/>
    </div>
    <HelloMessage name="lunch"></HelloMessage>
    <WebSite />
    <Toggle></Toggle>
    <Popper></Popper>
    <LoginControl></LoginControl>
    <Mailbox unreadMessages={messages} />
    <Page></Page>
    <NumberList numbers={numbers} />
    <Counter />
    <Hello name="world"></Hello>
    <Button></Button>
    <HelloMessageForm></HelloMessageForm>
    <HelloMessageFormChild></HelloMessageFormChild>
    <FlavorForm></FlavorForm>
    <Reservation></Reservation>
    <HelloMessageparentFrom></HelloMessageparentFrom>
    <MyComponent></MyComponent>
    <MyComponentRef/>
    </div>
    
  );
}

export default App;
