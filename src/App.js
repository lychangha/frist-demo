import React, { Component } from 'react';
import { Clock } from './Clock';
import { Toggle } from './Toggle';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // input中的值
      list: ['lisi', 'xiaohong'], // 初始列表
      inputValue1: '', // input中的值
      list1: ['sdfsdf'] ,// 初始列表
      checked:false
    }
    
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  //增加的按钮响应方法
  addList = () => {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue] //把list数组进行了分解，形成了新的数组，然后再进行组合
    })
  }
  
  deleteItem = (index) => {
    let list = this.state.list;
    const result = list.splice(index, 1);
    this.setState({
      list: list
    })
    return result;
  }
  deleteItem1 = (index) => {
    let list1 = this.state.list1;
    list1.splice(index, 1);
    this.setState({
      list1: list1
    })
  }

  inputList = (index) =>{
    const reslut = this.deleteItem(index);
    this.setState({
      list1: [...this.state.list1, reslut] //把list数组进行了分解，形成了新的数组，然后再进行组合
    })
   
  }

 

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}> 增加</button>
        </div>
        <ul>
          <div>未完成事项</div>
          {
            this.state.list.map((item, index) => {
              return <li key={index}><input type="checkbox" checked={this.state.checked} onChange={this.inputList.bind(this,index)}/> {item} <input type="button" value="删除" onClick={this.deleteItem.bind(this,index)}/></li>
            })
          }
          <div>已完成事项</div>
          {
            this.state.list1.map((item, index) => {
              return <li key={index}><input type="checkbox" name="checkbox" checked="checked"/> {item} <input type="button" value="删除" onClick={this.deleteItem1.bind(this,index)}/></li>
            })
          }
        </ul>
        <Clock></Clock>
        <Toggle></Toggle>
      </div>
    );
  }
}
export default Test;





