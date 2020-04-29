<style scoped lang="less">
  #pointWaves{
    margin: 54px auto 41px auto;
   /* position: relative;*/
  }
  .waves-logo {
    position: absolute;
    width: 100%;
    left: 0;
    top: 164px;
    z-index: 20;
    img {
      display: block;
      width: 230px;
      height: 205px;
      margin: 0 auto 46px auto;
    }
    p {
      max-width:567px;
      word-break: break-all;
      font-size:60px;
      font-family:Helvetica-Bold,Helvetica;
      font-weight:bold;
      color: #000000;
      line-height:72px;
      margin: 0 auto;
      text-align: center;
      &:last-child {
        font-size:20px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        line-height:28px;
        margin-top: 21px;
      }
    }
  }
  @media(max-width: 1200px) {
    .waves-logo{
      position: relative;
    }
  }
  @media(max-width: 480px) {
    .waves-logo{
      position: relative;
      top: 0;
      p {
        font-size: 30px;
        line-height: 36px;
        &:last-child {
          font-size:14px;
          line-height:20px;
          margin-top: 13px;
        }
      }
    }
    #pointWaves {
      position: relative;
    }
    #points_canvas {
      position: absolute;
      top: 213px;
    }
  }
</style>
<template>
  <div id="pointWaves" :style="'width: '+ this.renderX + 'px;'">
    <div class="waves-logo">
      <img src="../assets/image/pointsWaves/banner.png" />
      <p>{{$t('PointsWaves.title')}}</p>
      <p>{{$t('PointsWaves.subTitle')}}</p>
    </div>
    <div id="points_canvas"></div>
  </div>
</template>

<script>
export default {
  name: 'PointsWaves.vue',
  data: function () {
    return {
      container: null,
      stats: null,
      camera: null,
      scene: null,
      renderer: null,
      particles: null,
      count: 0,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: 1506 / 2,
      windowHalfY: 571 / 2,
      renderX: 1506,
      renderY: 571
    }
  },
  created() {
    let xio = 1506 / 571;
    let clientWidth = document.body.clientWidth - 30; // 分辨率宽度 - 减去30滚动条宽度
    if(clientWidth < 1500) {
      this.renderX = clientWidth;
      this.renderY = clientWidth / xio
    }
  },
  mounted: function () {
    this.SEPARATION = 100;
    this.AMOUNTX = 50;
    this.AMOUNTY = 50;
    this.container = null;
    this.stats = null;
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.particles = null;
    this.count = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.windowHalfX = this.renderX / 2;
    this.windowHalfY = this.renderY / 2;
    this.init();
    this.animate();
  },
  methods: {
    init () {
      this.container = document.querySelector('#points_canvas');
      // 照相机参数
      this.camera = new this.THREE.PerspectiveCamera(80, this.renderX / this.renderY, 1, 10000);
      // 将相机向后（即屏幕外）移
      this.camera.position.z = 2700;
      this.scene = new this.THREE.Scene();
      // 创建粒子
      this.numParticles = this.AMOUNTX * this.AMOUNTY;
      this.positions = new Float32Array(this.numParticles * 3 );
      this.scales = new Float32Array(this.numParticles );
      let i = 0, j = 0;
      for ( let ix = 0; ix < this.AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < this.AMOUNTY; iy ++ ) {
          this.positions[ i ] = ix * this.SEPARATION - ( ( this.AMOUNTX * this.SEPARATION ) / 2 ); // x
          this.positions[ i + 1 ] = 0; // y
          this.positions[ i + 2 ] = iy * this.SEPARATION - ( ( this.AMOUNTY * this.SEPARATION ) / 2 ); // z
          this.scales[ j ] = 1;
          i += 3;
          j ++;
        }
      }
      this.geometry = new this.THREE.BufferGeometry();
      this.geometry.setAttribute( 'position', new this.THREE.BufferAttribute( this.positions, 3 ) );
      this.geometry.setAttribute( 'scale', new this.THREE.BufferAttribute( this.scales, 1 ) );
      // 修改粒子颜色
      this.material = new this.THREE.ShaderMaterial( {
        uniforms: {
          color: { value: new this.THREE.Color( '#EEEEEE' )},
        },
        vertexShader: document.querySelector( '#vertexshader').textContent,
        fragmentShader: document.querySelector( '#fragmentshader').textContent
      } );
      this.particles = new this.THREE.Points( this.geometry, this.material );
      this.scene.add( this.particles );
      // 渲染
      this.renderer = new this.THREE.WebGLRenderer( { antialias: true ,alpha:true} );
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( this.renderX, this.renderY ); // 设定渲染尺寸
      this.container.appendChild( this.renderer.domElement );
      /**
       *  显示帧数
      this.stats = new this.ThreeStats.Stats();
      this.container.appendChild(this.stats.dom );
       **/
      document.querySelector('#points_canvas').addEventListener( 'mousemove', this.onDocumentMouseMove, false );
      document.querySelector('#points_canvas').addEventListener( 'touchstart', this.onDocumentTouchStart, false );
      document.querySelector('#points_canvas').addEventListener( 'touchmove', this.onDocumentTouchMove, false );
      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    onWindowResize () {
      let xio = 1506 / 571;
      let clientWidth = document.body.clientWidth - 30; // 分辨率宽度 - 减去30滚动条宽度
      if(clientWidth < 1500) {
        this.renderX = clientWidth;
        this.renderY = clientWidth / xio
      }
      this.windowHalfX = this.renderX / 2;
      this.windowHalfY = this.renderY / 2;
      this.camera.aspect = this.renderX / this.renderY;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( this.renderX, this.renderY ); // 设定渲染尺寸
    },
    onDocumentMouseMove (event) {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    },
    onDocumentTouchStart (event) {
      if ( event.touches.length === 1 ) {
        event.preventDefault();
        this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
        this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
      }
    },
    onDocumentTouchMove (event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      } else {
      }
    },
    animate () {
      requestAnimationFrame(this.animate);
      this.render();
      // 帧数刷新 this.stats.update();
    },
    render () {
      // 设置照相机的位置
      this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
      if (this.mouseY > 0) {
        this.camera.position.y += (-this.mouseY - this.camera.position.y) * .05;
      } else {
        this.camera.position.y  = 371;
      }
      this.camera.lookAt(this.scene.position);
      this.positions = this.particles.geometry.attributes.position.array;
      this.scales = this.particles.geometry.attributes.scale.array;
      let i = 0, j = 0;
      for ( let ix = 0; ix < this.AMOUNTX; ix ++ ) {
        for ( let iy = 0; iy < this.AMOUNTY; iy ++ ) {
          this.positions[ i + 1 ] = ( Math.sin( ( ix + this.count ) * 0.3 ) * 50 ) +
            ( Math.sin( ( iy + this.count ) * 0.5 ) * 50 );
          this.scales[ j ] = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 8 +
            ( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * 8;

          i += 3;
          j ++;
        }
      }

      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.geometry.attributes.scale.needsUpdate = true;
      this.renderer.render(this.scene, this.camera );
      this.count += 0.1;
    }
  }
}
</script>
