<template>
  <section class="partner">
    <div class="layout-main">
      <div class="ctx-main">
        <div class="partner-title">
          <span>{{$t('home.partnerInfo.title')}}</span>
        </div>
        <div class="layout-partner">
          <a :href="item.link" target="_blank" v-for="(item, i) in $t('home.partnerInfo.list')" :key="i" :class="item.img"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerMod'
}
</script>

<style scoped>

</style>
