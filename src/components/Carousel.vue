<template>
  <div>
    <carousel :perPage="3" :navigationEnabled="true">
      <slide v-for="(post, index) in posts" :key="post.node.id">
        <!-- Slide Content -->
        <img
          :src="post.node.cover.src"
          :alt="post.node.title"
          :width="post.node.cover.size.width"
          :height="post.node.cover.size.height"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      options: {
        slidesToScroll: 1,
        slidesToShow: 4
      }
    };
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
</style>