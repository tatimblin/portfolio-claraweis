<template>
  <div class="app-header container large-width">
      <div class="content">
        <nav class="nav">
          <div class="nav__item">
            <span @click="changeProj('prev')">prev</span>
            <span @click="changeProj('next')">next</span>
          </div>
          <div class="nav__item">
            <nuxt-link exact to="/">X</nuxt-link>
          </div>
        </nav>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
      ...mapGetters(['nav']),
  },
  methods: {
    ...mapMutations(['updateProj']),

    changeProj (dir) {
      this.updateProj(dir);
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: absolute;
  width: 100%;
  top: 0; left: 0; right: 0;
  z-index: 99999;
}

.nav {
  display: flex;
  justify-content: space-between;
}
.nuxt-link-active {
  visibility: hidden;
}
</style>
