import React from 'react';
import { connect } from 'dva';
import { Drawer, List, NavBar } from 'antd-mobile';
import styles from './IndexPage.css';

class IndexPage extends React.Component {
  state = {
    open: false,
    position: 'left',
    a: [{
      b: 1
    }, {
      c: 1
    }]
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const sidebar = (
    <List>
      { [...Array(20).keys()].map((i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={ index }
                thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'
                multipleLine>
                Category
              </List.Item>);
          }
          return (
            <List.Item
              key={ index }
              thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'>
              Category
              { index }
            </List.Item>);
        }) }
    </List>
    );


    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (
      <div>
        <NavBar
          iconName='ellipsis'
          onLeftClick={ this.onOpenChange }>
          Basic
        </NavBar>
        <Drawer
          className='my-drawer'
          style={ { minHeight: document.documentElement.clientHeight - 200 } }
          dragHandleStyle={ { display: 'none' } }
          contentStyle={ { color: '#A6A6A6', textAlign: 'center', paddingTop: 42 } }
          sidebar={ sidebar }
          {...drawerProps}>
          Click upper-left corner icon
        </Drawer>
      </div>
      );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);