<template>
  <nav
    class="fixed bottom-0 items-center justify-between w-full h-12 p-6 overflow-x-scroll group md:hover:w-64 md:w-20 md:h-screen bg-dracula-background text-dracula-foreground transition-all duration-500 ease-in md:top-0 md:p-0 md:overflow-hidden"
  >
    <ul class="flex flex-row items-center h-full p-0 m-0 md:flex-col">
      <li class="w-full logo-image">
        <a href="#">
          <span
            class="absolute inline mt-10 ml-4 text-2xl font-bold tracking-widest transform -translate-x-999 group-hover:translate-x-0 transition-transform duration-700"
            >JOYCE</span
          >
          <font-awesome-icon
            icon="arrow-right"
            class="hidden mx-6 mt-10 text-2xl md:inline group-hover:ml-48 fa-fw transition-all duration-500 transform rotate-0 group-hover:-rotate-180 ease-in group-hover:text-dracula-pink"
          />
        </a>
      </li>
      <li class="w-full">
        <router-link
          class="flex items-center w-full h-20 transition-all duration-500 hover:bg-dracula-current-line transition-colors"
          to="/"
          exact
          ><font-awesome-icon
            icon="home"
            class="mx-6 text-sm fa-fw transition-colors duration-500 md:text-2xl"
          />
          <span
            class="hidden ml-6 md:group-hover:inline transition-all duration-500 "
            >Home</span
          >
        </router-link>
      </li>
      <li class="w-full">
        <router-link
          class="flex items-center w-full h-20 hover:bg-dracula-current-line transition-colors duration-500"
          to="/about"
        >
          <font-awesome-icon
            icon="users"
            class="mx-6 text-sm fa-fw transition-colors duration-500 md:text-2xl"
          />
          <span
            class="hidden ml-6 md:group-hover:inline transition-all duration-500 "
            >About</span
          >
        </router-link>
      </li>
      <li class="w-full">
        <router-link
          class="flex items-center w-full h-20 hover:bg-dracula-current-line transition-colors duration-500"
          to="/resume"
        >
          <font-awesome-icon
            icon="file-pdf"
            class="mx-6 text-sm fa-fw transition-colors duration-500 md:text-2xl"
          />
          <span
            class="hidden ml-6 md:group-hover:inline transition-all duration-500"
            >Resume</span
          >
        </router-link>
      </li>
      <li class="w-full">
        <router-link
          class="flex items-center w-full h-20 hover:bg-dracula-current-line transition-colors duration-500"
          to="/portfolio"
        >
          <font-awesome-icon
            icon="folder-open"
            class="mx-6 text-sm fa-fw transition-colors duration-500 md:text-2xl"
          />
          <span
            class="hidden ml-6 md:group-hover:inline transition-all duration-500"
            >Portfolio</span
          >
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss" scoped>
.hero-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
/*svg {*/
/*  min-width: 2em;*/
/*}*/

li:hover svg,
li:hover span {
  @apply .text-dracula-pink;
}

.router-link-active {
  @apply .text-dracula-orange;
}
ul {
  list-style: none;
}

nav {
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
