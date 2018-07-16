<template>
<div class="component-slider">
    <div class="container medium-width">
        <div class="slider_wrap content-block">
            <div class="main-slider slider">
                
                    <div class="nullmain-slider-cell nullslider-cell" v-for="post in posts" :key="post.date">
                        <nuxt-link :to="post._path">
                            {{ post.title }}
                        </nuxt-link>
                    </div>
                
            </div>
            <div class="second-slider slider">
                
                    <div class="nullsecond-slider-cell nullslider-cell" v-for="post in posts" :key="post.date">
                        <nuxt-link :to="post._path">
                            {{ post.title }}
                        </nuxt-link>
                    </div>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  layout: 'default',
  transition: 'fade',
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/blog/posts/', false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));

    return { 
        posts
    };
  }
};
</script>