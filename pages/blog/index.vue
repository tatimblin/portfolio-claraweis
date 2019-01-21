<template>
    <div class="home container large-width">
        <div class="content">
            <h2>Blog</h2>
            <ul>
                <li v-for="post in posts" :key="post.date">
                    <blog-item :post="post"></blog-item>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BlogItem from '~/components/BlogItem.vue';

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    BlogItem
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    })).sort(function(a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });

    return { posts };
  }
};
</script>

<style lang="scss">

</style>