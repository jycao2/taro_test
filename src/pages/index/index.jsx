import Nerv, { Component } from 'nervjs'
import { AtNoticebar, AtSearchBar, AtIcon } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  onChange(value) {
    this.setState({
      value: value
    }, () => {
      console.log(this.state.value)
    })
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <AtNoticebar close icon='volume-plus'>马上快要下班了</AtNoticebar>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </View>
    )
  }
}
