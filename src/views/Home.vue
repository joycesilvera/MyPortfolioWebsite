<template>
  <div class="p-6 home">
    <header
      class="flex flex-col items-center w-full h-64 pb-6 border-b-4 box-content border-dracula-yellow"
    >
      <img
        src="../assets/joyce_sd.jpg"
        alt="Profile picture"
        class="w-20 h-20 border-4 rounded-full shadow-lg border-dracula-red"
      />
      <svg viewBox="0 0 3000 300" class="w-full h-full mt-4">
        <!-- Symbol -->
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            JS
          </text>
        </symbol>

        <!-- Duplicate symbols -->
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
      </svg>
      <h1 class="text-3xl tracking-widest uppercase md:text-4xl lg:text-6xl">
        Joyce Silvera
      </h1>
      <span class="text-lg text-dracula-orange">Fullstack Web Developer</span>
    </header>
    <div
      class="flex items-center w-full h-64 mt-10"
      id="loading-text"
      v-if="repos.length === 0"
    >
      <svg viewBox="0 0 2000 600" class="w-full h-full">
        <!-- Symbol with text -->
        <symbol id="s-text-loading">
          <text
            text-anchor="middle"
            x="50%"
            y="50%"
            dy=".35em"
            class="text--line"
          >
            Fetching cool stuff from Github
          </text>
        </symbol>

        <!-- Clippath  with text -->
        <clipPath id="cp-text">
          <text
            text-anchor="middle"
            x="50%"
            y="50%"
            dy=".35em"
            class="text--line"
          >
            Fetching cool stuff from Github
          </text>
        </clipPath>

        <!-- Group for shadow -->
        <g clip-path="url(#cp-text)" class="shadow">
          <rect
            width="100%"
            height="100%"
            class="anim-shape anim-shape--shadow"
          ></rect>
        </g>

        <!-- Group with clippath for text-->
        <g clip-path="url(#cp-text)" class="colortext">
          <!-- Animated shapes inside text -->
          <rect width="100%" height="100%" class="anim-shape"></rect>
          <rect width="80%" height="100%" class="anim-shape"></rect>
          <rect width="60%" height="100%" class="anim-shape"></rect>
          <rect width="40%" height="100%" class="anim-shape"></rect>
          <rect width="20%" height="100%" class="anim-shape"></rect>
        </g>

        <!-- Transparent copy of text to keep
               patterned text selectable -->
        <use xlink:href="#s-text-loading" class="text--transparent"></use>
      </svg>
    </div>
    <div class="flex items-center w-full" v-else>
      <h1 class="mx-auto mt-10 text-xl md:text-5xl">Top GitHub Repos</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4">
      <div v-for="repo in repos" :key="repo.repoName" class="m-4 card">
        <RepoCard
          class="repo-card"
          :repo-name="repo.repoName"
          :repo-description="repo.repoDesc"
          :repo-star-count="repo.repoStarCount"
          :repo-url="repo.repoUrl"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  height: 300px;
}

.text {
  fill: none;
  stroke-width: 6;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 6s infinite linear;
  animation: stroke 6s infinite linear;
}

.text:nth-child(5n + 1) {
  stroke: #ff5555;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}
.text:nth-child(5n + 2) {
  stroke: #f1fa8c;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
}

.text:nth-child(5n + 3) {
  stroke: #f8f8f2;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
}

.text:nth-child(5n + 4) {
  stroke: #8be9fd;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
}

.text:nth-child(5n + 5) {
  stroke: #50fa7b;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
header svg {
  font-size: 20rem;
  font-family: "Open Sans", sans-serif;
}

#loading-text svg {
  font-size: 6rem;
  font-family: "Open Sans", sans-serif;
}

.text--transparent {
  fill: transparent;
}

.anim-shape {
  -webkit-transform-origin: 0 150px;
  -ms-transform-origin: 0 150px;
  transform-origin: 0 150px;
  -webkit-transform: scale(0, 1) translate(0, 0);
  -ms-transform: scale(0, 1) translate(0, 0);
  transform: scale(0, 1) translate(0, 0);
  -webkit-animation: moving-panel 3s infinite alternate;
  animation: moving-panel 3s infinite alternate;
}

.colortext .anim-shape:nth-child(1) {
  fill: #bd93f9;
}

.colortext .anim-shape:nth-child(2) {
  fill: #8be9fd;
}

.colortext .anim-shape:nth-child(3) {
  fill: #50fa7b;
}

.colortext .anim-shape:nth-child(4) {
  fill: #f1fa8c;
}

.colortext .anim-shape:nth-child(5) {
  fill: #ff5555;
}

.shadow {
  -webkit-transform: translate(10px, 10px);
  -ms-transform: translate(10px, 10px);
  transform: translate(10px, 10px);
}

.anim-shape--shadow {
  fill: #c17575;
  fill-opacity: 0.2;
}

@-webkit-keyframes moving-panel {
  100% {
    -webkit-transform: scale(1, 1) translate(20px, 0);
    transform: scale(1, 1) translate(20px, 0);
  }
}

@keyframes moving-panel {
  100% {
    -webkit-transform: scale(1, 1) translate(20px, 0);
    transform: scale(1, 1) translate(20px, 0);
  }
}

.card {
  &:nth-child(5n + 1) {
    background-image: linear-gradient(
      to left,
      #44475a,
      #44475a 50%,
      #ff5555 50%,
      #ff5555
    );
  }
  &:nth-child(5n + 2) {
    background-image: linear-gradient(
      to left,
      #44475a,
      #44475a 50%,
      #8be9fd 50%,
      #8be9fd
    );
  }
  &:nth-child(5n + 3) {
    background-image: linear-gradient(
      to left,
      #44475a,
      #44475a 50%,
      #ffb86c 50%,
      #ffb86c
    );
  }
  &:nth-child(5n + 4) {
    background-image: linear-gradient(
      to left,
      #44475a,
      #44475a 50%,
      #50fa7b 50%,
      #50fa7b
    );
  }

  &:nth-child(5n + 5) {
    background-image: linear-gradient(
      to left,
      #44475a,
      #44475a 50%,
      #bd93f9 50%,
      #bd93f9
    );
  }

  background-size: 200% 100%;
  background-position: 100% 0;
  transition: all 0.25s ease-in;
  &:hover {
    background-position: 0 0;
    @apply .text-dracula-background;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "Home",
  components: { RepoCard: () => import("@/components/RepoCard.vue") },
  data: function() {
    return {
      repos: []
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/joycesilvera/repos?sort=updated")
      .then(values => {
        console.log(values);
        values.data.slice(0, 10).forEach(repo => {
          this.repos.push({
            repoName: repo.name,
            repoDesc: repo.description,
            repoStarCount: repo.stargazers_count,
            repoUrl: repo.html_url
          });
        });
      })
      .catch(error => console.log(error));
  }
};
</script>
