<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third is-multiline">
        <section class="hero is-fluid is-hidden-touch">
          <div class="hero-body">
            <div class="container is-fluid text-hero">
              caulfield°
              <div class="hero-lower-text">
                .dev
              </div>
              <div class="text-wrapper">
                <div class="hero-lower-text">
                  a blog
                </div>
                <div class="hero-lower-text">
                  about
                </div>
                <div class="hero-lower-text">
                  programming
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-12 carousel-wrapper"></div>
    </div>
    <h2 class="title is-3">Recent Posts</h2>
    <div id="recent-posts" class="columns is-multiline is-centered">
      <div
        class="column is-half"
        v-for="post in $page.recentPosts.edges"
        :key="post.node.id"
      >
        <g-link :to="post.node.path" :aria-label="post.node.title">
          <g-image
            :src="post.node.cover.src"
            class="cover"
            :alt="post.node.title"
          />
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 6) {
    edges {
      node {
        id
        title
        cover(width:400)
        path
      }
    }
  }
}
</page-query>

<script>
// import Search from "@/components/Search";

export default {
  components: {},
  metaInfo: {
    title: "Welcome to my website",
    meta: [
      { name: "author", content: "Dan Vega" },
      {
        name: "description",
        content: "This is the personal blog of Dan Vega."
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "The personal blog of Dan Vega" },
      { name: "twitter:title", content: "Dan Vega" },
      { name: "twitter:site", content: "@therealdanvega" },
      {
        name: "twitter:image",
        content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
      },
      { name: "twitter:creator", content: "@therealdanvega" }
    ]
  }
};
</script>

<style>
.carousel-wrapper {
  margin-top: 140px;
  margin-left: 40px;
}
.text-wrapper {
  opacity: 0.3;
}
.home-links a {
  margin-right: 1rem;
}

.post-box {
  background: #fafafa;
}

.bg-gradient {
  background: linear-gradient(45deg, #cc1d5e, #162838);
}

.text-hero {
  font-size: 9rem;
  line-height: 2rem;
  width: 100% !important;
  font-family: scto-grotesk-a-medium, sans-serif;
  letter-spacing: -0.5vw;
  font-weight: 500 !important;
  text-transform: uppercase;
  color: #6c5b7b;
  margin-bottom: 40px;
  margin-top: 40px;
}

.hero-lower-text {
  margin-top: 120px;
  margin-left: 0px;
}

.hero {
  align-items: center !important;
  z-index: 0;
}
</style>
