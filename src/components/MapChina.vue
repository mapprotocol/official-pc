<template>
  <section class="line-map" :class="'line-map-'+ $i18n.locale">
    <div class="layout-main">
      <div class="ctx-main">
        <div class="map-title">{{$t('home.roadmap._title')}}</div>
        <!-- 路线图 -->
        <div :class="{
          'map-level level1' : index === 0,
          'map-level level2' : index === 1,
          'map-level level3' : index === 2,
          'map-level level4' : index === 3
        }" v-for="(mapItem, index) in $t('home.roadmap.mcont')" :key="index">
          <span class="map-level-time">{{mapItem.stage}}</span>
          <div class="map-level-yuan"><span>&nbsp;</span></div>
          <!--<div class="map-level-line" v-if="index === 1">
            <p class="map-level-title">{{mapItem.intr}}</p>
            <p class="map-level-content" v-html="mapItem.desc.join('&lt;br/&gt;')"></p>
          </div>-->
          <p class="map-level-title">{{mapItem.intr}}</p>
          <p class="map-level-content" v-html="mapItem.desc.join('&lt;br/&gt;')"></p>
        </div>
        <div class="map-level-end">&nbsp;</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MapChina'
}
</script>

<style scoped>

</style>
