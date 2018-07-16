<template>
  <div class="post container large-width">
      <div class="content-block post-head">
        <h1>{{ title }}</h1>
        <img :src="thumbnail">
      </div>
      <div class="content-block post-body">
        <p v-observe-visibility="visibilityChanged">{{ body }}</p>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, id. Obcaecati alias qui, asperiores sint soluta laboriosam. Vitae eius, ex error maiores et mollitia in suscipit fugiat ea. At, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab pariatur obcaecati natus? Adipisci pariatur sit totam, asperiores porro, vitae a, nemo repudiandae deserunt earum nam dolores vero omnis velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi eligendi, quis quia adipisci, dolorem quae vel veniam quasi, optio rem incidunt neque molestiae dolor numquam quam illo? Eum, perferendis?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, id. Obcaecati alias qui, asperiores sint soluta laboriosam. Vitae eius, ex error maiores et mollitia in suscipit fugiat ea. At, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab pariatur obcaecati natus? Adipisci pariatur sit totam, asperiores porro, vitae a, nemo repudiandae deserunt earum nam dolores vero omnis velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi eligendi, quis quia adipisci, dolorem quae vel veniam quasi, optio rem incidunt neque molestiae dolor numquam quam illo? Eum, perferendis?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, id. Obcaecati alias qui, asperiores sint soluta laboriosam. Vitae eius, ex error maiores et mollitia in suscipit fugiat ea. At, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab pariatur obcaecati natus? Adipisci pariatur sit totam, asperiores porro, vitae a, nemo repudiandae deserunt earum nam dolores vero omnis velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi eligendi, quis quia adipisci, dolorem quae vel veniam quasi, optio rem incidunt neque molestiae dolor numquam quam illo? Eum, perferendis?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, id. Obcaecati alias qui, asperiores sint soluta laboriosam. Vitae eius, ex error maiores et mollitia in suscipit fugiat ea. At, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab pariatur obcaecati natus? Adipisci pariatur sit totam, asperiores porro, vitae a, nemo repudiandae deserunt earum nam dolores vero omnis velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus commodi eligendi, quis quia adipisci, dolorem quae vel veniam quasi, optio rem incidunt neque molestiae dolor numquam quam illo? Eum, perferendis?</p>
  </div>
</template>

<script>
import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)

export default {
  layout: 'default',
  transition: 'fade',
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  },
  methods: {
    visibilityChanged (isVisible) {
      console.log('visible?')
    }
  }
};
</script>

<style lang="scss" scoped>

p {
  line-height: 4em;
}
.post {
  &-head {
    img {
      transform-origin: top 10%;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  .post-head {
    img {
      transition: all 600ms ease;
    }
    h1 {
      transition: all 600ms 300ms ease;
    }
  }
}
.fade-enter, .fade-leave-active {
  .post-head {
    img {
      opacity: 0;
      transform: translateY(120px) translateX(-60px) rotateZ(15deg);
    }
    h1 {
      opacity: 0;
      transform: translateY(30px);
    }
  }
}
</style>
