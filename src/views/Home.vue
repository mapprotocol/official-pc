<template>
  <div class="home">
    <my-header-mobile/>
    <my-header/>
    <notice/>
    <strength/>
    <atom/>
    <road-map/>
    <new/>
    <partner/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyHeaderMobile from '@/components/MyHeaderMobile'
import Notice from '@/components/Notice'
import MyFooter from '@/components/Footer'
import Strength from "@/components/Strength";
import Atom from "@/components/Atom";
import RoadMap from "@/components/Roadmap";
import New from '@/components/New'
import Partner from '@/components/Partner'

export default {
  name: 'home',
  components: {
    Partner,
    New,
    RoadMap,
    Atom,
    Strength,
    MyHeader,
    MyHeaderMobile,
    Notice,
    MyFooter
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
  },
  destroyed() {
  }
}
</script>

<style lang="less">
.home {
  background-color: white;
}
</style>
