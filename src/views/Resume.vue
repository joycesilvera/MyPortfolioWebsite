<template>
  <div class="resume">
    <div
      class="resume-hero w-full flex-col md:flex-row flex items-center p-2 md:p-6"
    >
      <img
        src="@/assets/joyce_sd.jpg"
        class="inline-block h-16 md:h-20 rounded-full border-dracula-red border-2 md:border-4"
      />
      <h1
        class="inline-block tracking-wide md:ml-10 mt-5 md:mt-0 md:text-6xl text-3xl"
      >
        Joyce Silvera
      </h1>

      <a
        href="https://storage.cloud.google.com/my_documents993/Joyce%20Silvera-SWE.pdf"
        target="_blank"
        class="md:ml-auto mt-10 md:mt-0 text-dracula-pink inline-block border-dracula-pink border-2 md:border-4 p-2 md:p-4 shadow-md rounded text-sm md:text-md lg:text-lg text-center"
        >Download Resume</a
      >
    </div>
    <div
      class="border-b-4 border-dracula-yellow p-6 sm:items-center"
      v-for="section in resume.sections"
      :key="section.name"
    >
      <h1 class="text-2xl md:text-6xl text-dracula-orange capitalize">
        {{ section.name }}
      </h1>
      <div v-if="section.name === 'interests'">
        <ol>
          <li
            class="text-md md:text-2xl"
            v-for="part in section.parts"
            :key="part"
          >
            {{ part }}
          </li>
        </ol>
      </div>
      <div v-else-if="section.name === 'certifications'">
        <ol>
          <li
            class="text-md md:text-2xl"
            v-for="part in section.parts"
            :key="part.title"
          >
            <div>
              <a :href="part.link" class="text-dracula-red">{{ part.title }}</a>
            </div>
            <span
              class="text-md md:text-xl md:mt-4 md:mb-10 my-2 inline-block italic border-b-4 border-dracula-pink"
              >{{ part.time }}</span
            >
          </li>
        </ol>
      </div>
      <div v-else>
        <div v-for="part in section.parts" :key="part.title">
          <ResumeCard :title="part.title" :text="part.text" :time="part.time" />
        </div>
      </div>
    </div></div
></template>

<script>
import axios from "axios";
import ResumeCard from "../components/ResumeCard";
export default {
  name: "Resume",
  data() {
    return {
      resume: {}
    };
  },
  components: { ResumeCard },
  mounted() {
    axios
      .get("https://api.jsonbin.io/b/6104f433046287097ea3e2e6")
      .then(response => (this.resume = response.data.resume))
      .catch(console.error);
  }
};
</script>
