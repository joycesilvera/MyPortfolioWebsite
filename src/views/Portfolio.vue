<template>
  <div class="portfolio p-6">
    <h1 class="text-3xl md:text-6xl">Portfolio</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4">
      <div v-for="part in portfolio.parts" :key="part.title" class="card m-4">
        <PortfolioCard
          :title="part.title"
          :link="part.link"
          :image="part.image"
          :tech_stack="part.tech_stack"
          :text="part.text"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
import PortfolioCard from "../components/PortfolioCard";

export default {
  name: "Portfolio",
  components: { PortfolioCard },
  data: function() {
    return {
      portfolio: {}
    };
  },
  mounted() {
    axios
      .get("https://api.jsonbin.io/b/6104f962c875da06087348a4/1")
      .then(response => {
        console.log(response.data);
        this.portfolio = response.data.portfolio;
      })
      .catch(console.error);
  }
};
</script>

<style scoped></style>
