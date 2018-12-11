import React, { Component } from 'react';
import pic1 from './img/1.jpg';
import pic2 from './img/2.jpg';
import pic3 from './img/3.jpg';
import pic4 from './img/4.jpg';
import pic5 from './img/5.jpg';
import pic6 from './img/6.jpg';
import pic7 from './img/7.jpg';
import pic8 from './img/8.jpg';
import './app.css';
import Button from './Button';

class App extends Component {
  // 给该组件定义一个属性
  // constructor() {
  // super()
  //   this.state={
  //     ind:0
  //   }
  // }
  state = {
    ind: 0
  };
  // render 方法刷新页面的时候就会执行
  // 将刷新页面的时候执行的 setInterval 写到生命周期函数中 cdm componentDidMount(组件初次渲染完毕)
  componentDidMount() {
    // 可以允许修改 state
    // 因为cdm是首次渲染到页面才执行，只执行一次，那么获取的 ind 就一直是0
    this.run = setInterval(() => {
      this.autoPlay();
    }, 2000);
  }
  render() {
    // 由于许多地方用到了 this.state.ind,所以将它定义
    const { ind } = this.state;
    return (
      <>
        <div
          className="contain"
          onMouseEnter={() => {
            clearInterval(this.run);
          }}
          onMouseLeave={() => {
            this.run = setInterval(() => {
              this.autoPlay();
            }, 2000);
          }}
        >
          <a href="javacript:;" className={`${ind === 0 && 'active'}`}>
            <img src={pic1} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 1 && 'active'}`}>
            <img src={pic2} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 2 && 'active'}`}>
            <img src={pic3} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 3 && 'active'}`}>
            <img src={pic4} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 4 && 'active'}`}>
            <img src={pic5} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 5 && 'active'}`}>
            <img src={pic6} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 6 && 'active'}`}>
            <img src={pic7} alt="" />
          </a>
          <a href="javacript:;" className={`${ind === 7 && 'active'}`}>
            <img src={pic8} alt="" />
          </a>
          <Button txt="<" className="prev" onClick={this.clickPrev} />
          <Button txt=">" className="next" onClick={this.clickNext} />
          <ul className="list">
            <li
              onMouseEnter={() => {
                this.mouseChange(0);
              }}
              className={ind === 0 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(1);
              }}
              className={ind === 1 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(2);
              }}
              className={ind === 2 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(3);
              }}
              className={ind === 3 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(4);
              }}
              className={ind === 4 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(5);
              }}
              className={ind === 5 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(6);
              }}
              className={ind === 6 ? 'active' : ''}
            />
            <li
              onMouseEnter={() => {
                this.mouseChange(7);
              }}
              className={ind === 7 ? 'active' : ''}
            />
          </ul>
        </div>
      </>
    );
  }
  mouseChange = newInd => {
    this.setState({
      ind: newInd
    });
  };
  // 点击 prev 按钮
  clickPrev = () => {
    if (this.state.ind > 0) {
      this.setState({
        ind: this.state.ind - 1
      });
    } else {
      this.setState({
        ind: 7
      });
    }
  };
  clickNext = () => {
    if (this.state.ind < 7) {
      this.setState({
        ind: this.state.ind + 1
      });
    } else {
      this.setState({
        ind: 0
      });
    }
  };
  autoPlay = () => {
    const { ind } = this.state;
    this.setState({
      ind: ind === 7 ? 0 : ind + 1
    });
  };
  // 点击prev按钮
  // clickPrev = () => {
  // 获取真实的 dom 节点，会造成浏览器的 回流或重绘(会重新渲染浏览器的html，造成速度缓慢)
  // 获取图片的dom个数
  // var arr = document.querySelectorAll('.contain a');
  // 获取小圆点的dom
  // var liArr = document.querySelectorAll('.contain .list li');
  // console.log(arr.length);
  // 改变ind状态,每当点击prev时ind-1
  // this.setState({ ind: this.state.ind - 1 });
  // 每点击一次向前按钮ind--，当ind小于0的时候就从ind = 7开始继续--
  // if (this.state.ind < 1) {
  //   this.setState({
  //     ind: arr.length - 1
  // });
  // }
  // 可以获取到当前的数字，根据对应这个数字的图片设置显示样式
  // for (var j = 0; j < arr.length; j++) {
  //   arr[j].className = '';
  //   liArr[j].className = '';
  // }
  // arr[this.state.ind].className = 'active';
  // liArr[this.state.ind].className = 'active';
  // console.log(arr[this.state.ind]);
  // };
  // 点击next按钮
  // clickNext = () => {
  // 获取图片的dom个数
  // var arr = document.querySelectorAll('.contain a');
  // 获取小圆点的dom
  // var liArr = document.querySelectorAll('.contain .list li');
  // 改变 ind 状态,每当点击prev时ind+1
  // this.setState({ ind: this.state.ind + 1 });
  // 每点击一次向后按钮ind++，当ind大于0的时候就从ind = 0开始继续--
  // if (this.state.ind > arr.length - 2) {
  //   this.setState({
  //     ind: 0
  //   });
  // }
  // 可以获取到当前的数字，根据对应这个数字的图片设置显示样式
  // for (var j = 0; j < arr.length; j++) {
  //   arr[j].className = '';
  //   liArr[j].className = '';
  // }
  // arr[this.state.ind].className = 'active';
  // liArr[this.state.ind].className = 'active';
  // console.log(arr[this.state.ind]);
  // };
  // 自动播放模块  鼠标移入清除定时器，移出添加

  // mouseLeave = () => {
  //   var ind1 = this.state.ind;
  //   var autoPlay = function() {
  //     var arr = document.querySelectorAll('.contain a');
  //     var liArr = document.querySelectorAll('.contain .list li');
  //     ind1++;
  //     if (ind1 > arr.length - 1) {
  //       ind1 = 0;
  //     }
  //     for (var j = 0; j < arr.length; j++) {
  //       arr[j].className = '';
  //       liArr[j].className = '';
  //     }
  //     arr[ind1].className = 'active';
  //     liArr[ind1].className = 'active';
  //   };
  //   setInterval(autoPlay, 2000);
  // };
  // mouseEnter = () => {
  //   clearInterval(autoPlay);
  // };
}

export default App;
