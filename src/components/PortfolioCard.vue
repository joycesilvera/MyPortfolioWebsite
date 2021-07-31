<template>
  <t-card
    base-class="h-full rounded-lg shadow-lg cursor-pointer hover:shadow-xl group overflow-hidden"
    @click.native="openLink()"
  >
    <template v-slot:header>
      <div class="flex">
        <span class="text-lg md:text-xl w-40 md:w-auto truncate">{{
          title
        }}</span>
      </div>
    </template>
    <div class="p-2 flex flex-col items-center">
      <img :src="image" class="block" alt="Image for the portfolio item" />
      <p class="mt-4 w-full">{{ text }}</p>
      <div class="my-5 w-full">
        <span
          v-for="tech in tech_stack"
          :key="tech"
          class="inline-block p-2 m-1 text-xs rounded-full bg-dracula-comment group-hover:bg-dracula-foreground"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </t-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PortfolioCard extends Vue {
  @Prop() private title!: string;
  @Prop() private text!: string;
  @Prop() private image!: string;
  @Prop() private link!: string;
  @Prop() private tech_stack!: string[];

  openLink(): void {
    window.open(this.link, "_blank");
  }
}
</script>

<style scoped></style>
