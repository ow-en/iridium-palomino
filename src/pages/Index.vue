<template>
  <Layout>
    <div class="columns">
      <div class="column is-one-third is-multiline">
        <section class="hero is-fluid">
          <div class="hero-body text-hero">
            <p class="text">
              <span class="text__first">
                <span class="text__word lower-text">
                  caulfield°
                </span>
                <span class="text__first-bg"></span>
              </span>
              <br />
              <span class="text__second">
                <span class="text__word lower-text text-turquoise">
                  .dev
                </span>
                <span class="text__second-bg"> </span>
              </span>
              <br />
              <span class="text__third">
                <span class="text__word lower-text">
                  a
                </span>
                <span class="text__third-bg"> </span>
              </span>
              <br />
              <span class="text__fourth">
                <span class="text__word lower-text">
                  blog
                </span>
                <span class="text__fourth-bg"> </span>
              </span>
              <br />
              <span class="text__fifth">
                <span class="text__word lower-text">
                  about
                </span>
                <span class="text__fifth-bg"> </span>
              </span>
              <br />
              <span class="text__sixth">
                <span class="text__word lower-text">
                  programming
                </span>
                <span class="text__sixth-bg"> </span>
              </span>
            </p>
          </div>
        </section>
      </div>
      <div class="column is-two-thirds"></div>
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
import { TweenMax, TimelineLite } from "gsap";

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
  },
  methods: {
    animateText() {
      console.log("animate");
      var tl = new TimelineLite({ delay: 1 }),
        firstBg = document.querySelectorAll(".text__first-bg"),
        secBg = document.querySelectorAll(".text__second-bg"),
        thirdBg = document.querySelectorAll(".text__third-bg"),
        fourthBg = document.querySelectorAll(".text__fourth-bg"),
        fifthBg = document.querySelectorAll(".text__fifth-bg"),
        sixthBg = document.querySelectorAll(".text__sixth-bg"),
        word = document.querySelectorAll(".text__word");

      tl.to(firstBg, 0.2, { scaleX: 1 })
        .to(secBg, 0.2, { scaleX: 1 })
        .to(thirdBg, 0.2, { scaleX: 1 })
        .to(fourthBg, 0.2, { scaleX: 1 })
        .to(fifthBg, 0.2, { scaleX: 1 })
        .to(sixthBg, 0.2, { scaleX: 1 })
        .to(word, 0.1, { opacity: 1 }, "-=0.1")

        .to(firstBg, 0.2, { scaleX: 0 })
        .to(secBg, 0.2, { scaleX: 0 })
        .to(thirdBg, 0.2, { scaleX: 0 })
        .to(fourthBg, 0.2, { scaleX: 0 })
        .to(fifthBg, 0.2, { scaleX: 0 })
        .to(sixthBg, 0.2, { scaleX: 0 });
    }
  },
  mounted() {
    this.animateText();
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

body,
html {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 900;
  color: #353535;
  position: relative;
}

.text {
  display: inline-block;
  font-size: 9rem;
  line-height: 2rem;
  width: 100% !important;
  font-family: scto-grotesk-a-medium, sans-serif;
  letter-spacing: -0.5vw;
  font-weight: 500 !important;
  text-transform: uppercase;
  color: #6c5b7b;
}

.text__first,
.text__second,
.text__third,
.text__fourth,
.text__fifth,
.text__sixth {
  position: relative;
  float: left;
}

.text__word {
  opacity: 0;
}

.lower-text {
  margin-top: 5rem;
  float: left;
}

.text__first-bg,
.text__second-bg,
.text__third-bg,
.text__fourth-bg,
.text__fifth-bg,
.text__sixth-bg {
  display: block;
  width: 110%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  transform-origin: left;
  transform: scaleX(0);
  float: left;
  margin-top: 2rem;
}

.text__first-bg,
.text__second-bg,
.text__third-bg,
.text__fourth-bg,
.text__fifth-bg,
.text__sixth-bg {
  background-color: #c06c84;
  opacity: 0.3;
}

.text__first,
.text__second,
.text__third,
.text__fourth,
.text__fifth,
.text__sixth {
  margin-top: 1.2vmin;
}

.text-turquoise {
  color: #c06c84;
}
</style>
