<template>
  <div class="about p-6">
    <AboutCard
      header="Who am I"
      text="I am Joyce Silvera. I am a motivated software engineer, I like problem-solving,
     and leetcode. I am a proud parent of two dogs Dodo and Pixel"
    />
    <AboutCard header="What I do">
      <template v-slot:text>
        <p>
          I am a graduate student of M.S Computer Science at California State
          University, Fullerton.
        </p>
        <p>
          When I am not working on an office project or personal project, I like
          to workout and listen to music.
        </p>
      </template>
    </AboutCard>
    <AboutCard header="Around the web">
      <template v-slot:text>
        You can find me in many social sites. Here are the ones I use. My
        activity in all of them might vary -
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols6 lg:grid-cols-6"
        >
          <div class="m-4">
            <a href="https://www.linkedin.com/in/joycesilvera"
              ><font-awesome-icon :icon="['fab', 'linkedin']" /><span
                class="ml-10"
                >LinkedIn</span
              ></a
            >
          </div>
          <div class="m-4">
            <a href="https://twitter.com/JoyceSilvera1"
              ><font-awesome-icon :icon="['fab', 'twitter']" /><span
                class="ml-10"
                >Twitter</span
              ></a
            >
          </div>

          <div class="m-4">
            <a href="https://leetcode.com/flash_93/"
              ><font-awesome-icon :icon="['fab', 'leetcode']" /><span
                class="ml-10"
                >Leetcode</span
              ></a
            >
          </div>

          <div class="m-4">
            <a href="https://github.com/joycesilvera"
              ><font-awesome-icon :icon="['fab', 'github']" /><span
                class="ml-10"
                >Github</span
              ></a
            >
          </div>
        </div>
      </template>
    </AboutCard>
  </div>
</template>

<script>
import AboutCard from "@/components/AboutCard";
export default {
  name: "About",
  components: { AboutCard }
};
</script>
