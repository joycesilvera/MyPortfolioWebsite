import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import TCard from "vue-tailwind/src/components/TCard.vue";
import TInput from "vue-tailwind/src/elements/TInput.vue";
import TTextArea from "vue-tailwind/src/elements/TTextarea.vue";
import TInputGroup from "vue-tailwind/src/components/TInputGroup.vue";
import { firestorePlugin } from "vuefire";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUsers,
  faEnvelopeOpenText,
  faPenAlt,
  faFolderOpen,
  faArrowRight,
  faStar,
  faFilePdf,
  faMoneyCheckAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faQuora,
  faTwitter,
  faDev,
  faHackerrank,
  faStackExchange,
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faHome,
  faUsers,
  faEnvelopeOpenText,
  faPenAlt,
  faFolderOpen,
  faArrowRight,
  faStar,
  faLinkedin,
  faQuora,
  faTwitter,
  faDev,
  faHackerrank,
  faStackExchange,
  faGithub,
  faGitlab,
  faFilePdf,
  faMoneyCheckAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(TCard);
Vue.use(TInput);
Vue.use(TInputGroup);
Vue.use(TTextArea);
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
