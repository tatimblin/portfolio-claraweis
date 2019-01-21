<template>
    <div class="home container large-width">
        <div class="content">
            <h2>Home</h2>
            <ul>
                <li v-for="post in posts" :key="post.date">
                    <nuxt-link :to="post._path">
                        {{ post.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">

</style>