<template>
  <section class="impare" :class="'impare-' + $i18n.locale">
    <div class="layout-main">
      <div class="ctx-main">
        <div class="impare-title">
          <span class="title-left"></span>
          <span>{{$t('home.impareInfo.title')}}</span>
          <span class="title-right"></span>
        </div>
        <ul class="layout-impare">
          <li v-for="(item, i) in $t('home.impareInfo.list')" :key="i">
            <div class="border-absoute"></div>
            <img src="../assets/images/icon_pop.png" v-if="item.icon === 'pop'"/>
            <img src="../assets/images/icon_globe.png" v-if="item.icon === 'globe'"/>
            <img src="../assets/images/icon_dev.png" v-if="item.icon === 'dev'"/>
            <h1>{{item.name}}</h1>
            <p>{{item.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImpareMod'
}
</script>

<style scoped>

</style>
