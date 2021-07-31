<template>
  <div>
    <h1 class="text-3xl md:text-6xl text-dracula-orange">
      <slot name="header">{{ header }}</slot>
    </h1>
    <p class="text-md md:text-xl mb-10">
      <slot name="text"> {{ text }}</slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @apply .capitalize;
  &::after {
    content: "";
    display: block;
    width: 100%;
    @apply .mb-10;
    @apply .border-b-4;
    @apply .border-dracula-yellow;
  }
}

a {
  @apply .text-dracula-red;
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AboutCard extends Vue {
  @Prop() header!: string;
  @Prop() text!: string;
}
</script>

<style scoped></style>
