<template>
  <div class="animate-bg-mod" v-if="randomXyList.length > 0">
    <div class="animate-ele el1" :id="randomXyList[0].uuid">
      <span>&nbsp;<i></i></span>
    </div>
    <div class="animate-ele el2" :id="randomXyList[1].uuid">
      <span>&nbsp;<i></i></span>
    </div>
    <div class="animate-ele el3" :id="randomXyList[2].uuid">
      <span>&nbsp;<i></i></span>
    </div>
    <div class="animate-ele el4" :id="randomXyList[3].uuid">
      <span>&nbsp;<i></i></span>
    </div>
    <div class="animate-ele el5" :id="randomXyList[4].uuid">
      <span>&nbsp;<i></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimateBg',
  props: {
    randomCount: {
      type: Number,
      default: 5 // 随机生成例子位置个数
    },
    vWidth:  {
      type: Number,
      default: 0 // 作图宽度区域
    },
    vHeight:  {
      type: Number,
      default: 581 // 作图高度区域
    }
  },
  data() {
    return {
      randomXyList: [], // 生成个数的集合
    }
  },
  created () {
    let modView = document.querySelector('.animate-bg-mod')
    if (modView && (this.vWidth === 0 || this.vHeight === 0)) {
      this.vWidth = modView.clientWidth
      this.vHeight = modView.clientHeight
    }
  },
  mounted () {
    this.createXYList();
  },
  destoryed () {
    this.randomXyList = [];
  },
  methods: {
    // 四位随机数字
    ctUUID () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    },
    // 随机数拼接
    concatTagUUID (sys) {
      // 格式串串 aaaa-bbbb-ccccdddd-eeee-ffffgggghhhh
      return sys + (this.ctUUID() + '-' + this.ctUUID() + '-' + this.ctUUID() + this.ctUUID() + '-' + this.ctUUID() + '-' + this.ctUUID() + this.ctUUID() + this.ctUUID())
    },
    randomTop () {
      /** 可操作范围：
       * 1、 vHeight 范围内变动，最多不能超过当前 vHeight-64-8 ;
       * 2、 元素出现的坐标点不能跟 数组内任意一个元素重合 **/
      let mxHeight = this.vHeight-8-64;
      return Math.ceil(Math.random()* mxHeight)
    },
    randomLeft () {
      /** 可操作范围：
       * 1、 vWidth 范围内变动，最多不能超过当前 vWidth-8 ;
       * 2、 元素出现的坐标点不能跟 数组内任意一个元素重合 **/
      let mxWidth = this.vWidth-8;
      return Math.ceil(Math.random()* mxWidth)
    },
    createXYList () {
      /** if (this.randomXyList.length < this.randomCount) {
       for (let i = 0; i<this.randomCount; i++) {
       let topVal = this.randomTop()
       let leftVal = this.randomLeft()
       let uuidVal = this.concatTagUUID('polo')
       this.randomXyList.push({
       topVal: topVal,
       leftVal: leftVal,
       uuid: uuidVal
       })
       }
       } **/
      this.randomXyList = [
        {
          topVal: 300,
          leftVal: 20,
          uuid: this.concatTagUUID('polo')
        },
        {
          topVal: 360,
          leftVal: 150,
          uuid: this.concatTagUUID('polo')
        },
        {
          topVal: 500,
          leftVal: 260,
          uuid: this.concatTagUUID('polo')
        },
        {
          topVal: 700,
          leftVal: 500,
          uuid: this.concatTagUUID('polo')
        },
        {
          topVal: 300,
          leftVal: 700,
          uuid: this.concatTagUUID('polo')
        }
      ];
      /** this.$nextTick(function(){
        this.randomXyList.forEach(item => {
          let excuteDom = document.querySelector('#'+item.uuid);
          excuteDom.style.top = item.topVal + 'px'
          excuteDom.style.left = item.leftVal + 'px'
        })
      }) **/
    }
  }
}
</script>

<style lang="less" scoped>
  .animate-bg-mod {
    width: 100%;
    height: 581px;
    color: #fff;
    position: relative;
  }
  .animate-ele {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 64px;
    span {
      display: block;
      width: 8px;
      height: 8px;
      background-color: #3C4973;
      border-radius: 50%;
      position: relative;
      i {
        display: block;
        position: absolute;
        top: 8px;
        left: 3px;
        width: 2px;
        height: 64px;
        background: linear-gradient(to bottom, #3C4973, #2A3452);
      }
    }
  }
  .el1 {
    top: 300px;
    left: 20px;
    animation: moveTo1Top 3s infinite;
    -webkit-animation: moveTo1Top 3s infinite; /*Safari and Chrome*/
    @keyframes moveTo1Top
    {
      to {top: 0; opacity: 0;}
    }
    @-webkit-keyframes moveTo1Top /*Safari and Chrome*/
    {
      to {top: 0; opacity: 0;}
    }
  }
  .el2 {
    top: 360px;
    left: 150px;
    animation: moveTo2Top 6s infinite;
    -webkit-animation: moveTo2Top 6s infinite; /*Safari and Chrome*/
    @keyframes moveTo2Top
    {
      to {top: 0; opacity: 0;}
    }
    @-webkit-keyframes moveTo2Top /*Safari and Chrome*/
    {
      to {top: 0; opacity: 0;}
    }
  }
  .el3 {
    top: 500px;
    left: 260px;
    animation: moveTo3Top 5s infinite;
    -webkit-animation: moveTo3Top 5s infinite; /*Safari and Chrome*/
    @keyframes moveTo3Top
    {
      to {top: 0; opacity: 0;}
    }
    @-webkit-keyframes moveTo3Top /*Safari and Chrome*/
    {
      to {top: 0; opacity: 0;}
    }
  }
  .el4 {
    top: 700px;
    left: 500px;
    animation: moveTo4Top 5s infinite;
    -webkit-animation: moveTo4Top 5s infinite; /*Safari and Chrome*/
    @keyframes moveTo3Top
    {
      to {top: 0; opacity: 0;}
    }
    @-webkit-keyframes moveTo4Top /*Safari and Chrome*/
    {
      to {top: 0; opacity: 0;}
    }
  }
  .el5 {
    top: 300px;
    left: 700px;
    animation: moveTo5Top 7s infinite;
    -webkit-animation: moveTo5Top 7s infinite; /*Safari and Chrome*/
    @keyframes moveTo55Top
    {
      to {top: 0; opacity: 0;}
    }
    @-webkit-keyframes moveTo5Top /*Safari and Chrome*/
    {
      to {top: 0; opacity: 0;}
    }
  }
</style>
