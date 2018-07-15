<template>
    <div class="home container large-width">
        <div class="content-block">
            <h2>Home</h2>
            <project-slider></project-slider>
        </div>
    </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import ProjectSlider from '~/components/ProjectSlider.vue';

export default {
  layout: 'default',
  transition: 'fade',
  components: {
    AppLogo,
    ProjectSlider
  }
};
</script>
