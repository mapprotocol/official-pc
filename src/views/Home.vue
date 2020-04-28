<template>
  <div class="home">
    <my-header-mobile />
    <my-header />
    <points-waves />
    <introduce />
    <sub-core />
    <protocol />
    <census />
    <info />
    <scenarios />
    <road-map />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyHeaderMobile from '@/components/MyHeaderMobile'
import PointsWaves from '@/components/PointsWaves'
import Introduce from '@/components/Introduce'
import SubCore from '@/components/SubCore'
import Protocol from '@/components/Protocol'
import Census from '@/components/Census'
import Info from '@/components/Info'
import Scenarios from '@/components/Scenarios'
import RoadMap from '@/components/Roadmap'
import MyFooter from '@/components/Footer'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyHeaderMobile,
    PointsWaves,
    Introduce,
    SubCore,
    Protocol,
    Census,
    Info,
    Scenarios,
    RoadMap,
    MyFooter
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="less" scoped>
</style>
