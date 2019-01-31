<template>
  <div class="app">
    <app-header></app-header>
    <project-hero></project-hero>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import ProjectHero from '~/components/ProjectHero.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    ProjectHero
  },
}
</script>

<style lang="scss">

</style>
