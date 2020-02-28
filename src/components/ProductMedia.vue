<template>
  <section class="product-media" :class="'line-map-'+ $i18n.locale">
    <div class="layout-main">
      <div class="ctx-main">
        <div class="map-title">Marcopolo Protocol Introduction</div>
        <div class="video_box">
          <video width="1199"  poster="https://files.marcopolo.link/image/product-media.png" controls controlslist="nodownload" style="object-fit: fill; width: 100%; height: 100%">
            <source src="https://files.marcopolo.link/video/marcopolo.mp4">
            <source src="https://files.marcopolo.link/video/marcopolo.ogg">
            <p>Your browser does not support the HTML5 video tag.</p>
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductMedia.vue'
}
</script>

<style scoped>

</style>
