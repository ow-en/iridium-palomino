// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Buefy from 'buefy';
import VueCarousel from 'vue-carousel';

library.add(faGithub, faTwitter, faSpinner, faAlignLeft);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Buefy);
  Vue.use(VueCarousel);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
  });
}
