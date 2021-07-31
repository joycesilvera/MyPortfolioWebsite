<template>
  <t-card
    base-class="h-full rounded-lg shadow-lg cursor-pointer hover:shadow-xl overflow-hidden"
    body-class="h-full"
    @click.native="openLink()"
  >
    <template v-slot:header>
      <div class="flex">
        <span class="text-lg md:text-xl w-40 md:w-auto truncate">{{
          repoName
        }}</span>
        <div class="inline ml-auto">
          <font-awesome-icon icon="star" />
          <span class="ml-1">{{ repoStarCount }}</span>
        </div>
      </div>
    </template>
    <div class="wrap w-full">
      <p class="p-6 text-sm md:text-lg">{{ repoDescription }}</p>
    </div>
  </t-card>
</template>
<style lang="scss" scoped></style>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class RepoCard extends Vue {
  @Prop() private repoName!: string;
  @Prop() private repoUrl!: string;
  @Prop() private repoStarCount!: number;
  @Prop() private repoDescription!: string;

  openLink(): void {
    console.log(this.repoUrl);
    window.open(this.repoUrl, "_blank");
  }
}
</script>

<style scoped></style>
