<template>
  <section class="hero" :class="$route.name">
    <div class="hero__container">
      <div class="hero__container-title">
        <h1>{{ project.title }}</h1>
      </div>
      <div class="hero__container-bg">
        <nuxt-link :to="project._path">
          <img :src="project.thumbnail" :alt="`${project.title} by Clara Weisman`">
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/project/', false, /\.json$/);

    const projects = context.keys().map(key => ({
      ...context(key),
      _path: `/project/${key.replace('.json', '').replace('./', '')}`
    })).sort(function(a, b) {
      var dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    });

    return { projects };
  },
  computed: {
    ...mapGetters(['current']),
    project: function () {
      return this.projects[0];
    },
  },
}
</script>


<style lang="scss">
@import '~assets/sass/utilities/_variables.scss';

.hero {
	position: relative;
	width: 100%; height: 100vh;
	overflow: hidden;
	z-index: 1;
	
	&__container {
		position: relative;
		width: 100%; height: 100vh;
		padding: 90px;
		box-sizing: border-box;
		
		&-title {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%; height: 100%;
			top: 0; left: 0;
			text-align: center;
      z-index: 10;
      pointer-events: none;
			
			h1 {
				font-size: 5em;
			}
		}
		&-bg {
			position: relative;
      width: 100%; height: 100%;
      overflow: hidden;

			&:before, &:after {
				content: '';
				position: absolute;
				width: 33%; height: 100%;
				top: 0;
				background-color: white;
        transition: all 900ms 100ms $ease;
				z-index: 5;
			}
			&:after {
				right: 0;
			}
			img {
				width: 100%; height: 100%;
        object-fit: cover;
        transition: all 3s $ease;
        
        &:hover {
          transform: scale(1.1);
        }
			}
		}
	}
}

.project-slug {
  .hero__container {
    &-bg {
      &:before, &:after {
        width: 0 !important;
      }
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>

