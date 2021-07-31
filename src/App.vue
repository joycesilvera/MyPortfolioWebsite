<template>
  <div id="app" class="font-bold w-full">
    <Navigation />
    <router-view class="md:ml-24 mt-4 mb-10 md:mb-2" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Open+Sans&display=swap");
:root {
  font-size: 16px;
}
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #282a36;
}

body::-webkit-scrollbar-thumb {
  background: #bd93f9;
}

body {
  font-family: "Jost", sans-serif;
  @apply .bg-dracula-background;
  @apply .text-dracula-foreground;
}
</style>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: { Navigation }
};
</script>
