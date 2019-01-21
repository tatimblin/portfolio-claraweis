<template>
  <section>
    <a :href="post._path">
      <h2>{{ post.title }}</h2>
    </a>
  </section>
</template>

<script>
export default {
  props: ['post'],
}
</script>
