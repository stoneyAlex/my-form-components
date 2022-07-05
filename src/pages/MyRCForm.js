/*
 * @Author: shimingxia
 * @Date: 2022-06-06 10:25:38
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-05 18:47:53
 * @Description: 
 */
import React, {Component} from "react";
import Input from '../components/Input'
import createForm from "../components/my-rc-form/"

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.form.setFieldsValue({username: 'default'})
  }
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form
    console.log(getFieldsValue())
    console.log(getFieldValue('username'))
    validateFields((err, val) => {
      if(err) {
        console.log('err', err)
      } else {
        console.log('校验成功',val)
      }
    })
  }
  render() {
    // const {username, password} = this.state
    console.log("props", this.props)
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator("username", {rules: [nameRules]})(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator("password", {rules: [passworRules]})(
          <Input placeholder="Password" />
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default MyRCForm