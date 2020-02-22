<template>
  <footer id="m-footer">
    <!-- 底部 -->
    <div class="layout-main">
      <div class="ctx-main">
        <div class="footer-btns">
          <a :href="btnItem.link" target="_blank" v-for="(btnItem, i) in $t('footer.fun')"
             :key="i">{{btnItem.name}}</a>
        </div>
        <div class="footer-icons">
          <a :href="iconItem.link" target="_blank" v-for="(iconItem, index) in $t('footer.icon')" :key="index" :class="'f_'+iconItem.i"></a>
        </div>
        <ul class="footer-info">
          <li v-for="(supportItem, index) in $t('footer.mSupport.list')" :key="index" v-show="$i18n.locale !== 'ko'">{{supportItem.name}}</li>
          <li>&copy; {{$t('footer.mSupport.copyright')}}</li>
          <li v-if="$i18n.locale === 'ko'"><a class="down-btn"  :href="$t('footer.download.link')" target="_blank" >{{$t('footer.download._title')}}</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SysFooter'
}
</script>

<style scoped>

</style>
