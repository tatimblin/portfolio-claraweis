<template>
  <div class="app-header container large-width">
      <div class="content">
        <h1>Simple CMS Template</h1>
        <nuxt-link exact to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['page'])
}
</script>