<template>
  <div class="m-4">
    <h1 class="text-md md:text-3xl uppercase underline text-dracula-pink">
      <slot name="title">{{ title }}</slot>
    </h1>
    <p class="text-md md:text-2xl capitalize">
      <slot name="text"> {{ text.toLowerCase() }}</slot>
    </p>
    <span
      class="text-md md:text-xl my-2 md:mt-4 md:mb-10 inline-block italic border-b-4 border-dracula-pink"
      >{{ time }}</span
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class ResumeCard extends Vue {
  @Prop() private title!: string;
  @Prop() private text!: string;
  @Prop() private time!: string;
}
</script>

<style scoped></style>
