<template>
  <main class="post-page">
    <section v-if="post" class="container mx-auto p-4">
      <img
        :src="CreateUrl(post.image, 1280, 300)"
        class="w-full mb-8 shadow-md hover:opacity-75"
        alt="hey"
      />

      <button
        @click="$router.back()"
        class="flex items-center text-lg text-cyan-400 hover:text-cyan-600 mb-4"
      >
        <span class="material-icons text-lg mr-1"
          >keyboard_double_arrow_left</span
        >
        Back
      </button>

      <h1 class="text-3xl md:text-5xl mb-8">
        {{ post.title }}
      </h1>

      <p class="text-gray-500 italic mb-8">
        {{ post.excerpt }}
      </p>

      <p class="text-white text-lg mb-8" v-html="TextStyler(post.content)" />

      <div class="flex items-center justify-between sm:mb-4 md:mb-0 border-t pt-5 border-t-green-100">
        <img
          v-if="post.author.avatar"
          :src="CreateUrl(post.author.avatar, 300, 300)"
          alt="author photo"
          class="inline-block rounded-4 w-12 h-12 mr-4"
        />
        <p class="text-white mr-2 text-xl">{{ post.author.full_name }}</p>
        <p class="text-gray-500 text-sm">
          {{ FormatDate(post._createdAt) }}
        </p>
      </div>

    </section>
    <section v-else>
      <p class="text-white italic text-2xl w-full text-center mt-4">
        loading...
      </p>
    </section>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import sanity from "../../client";
import { CreateUrl, TextStyler, FormatDate } from "../../utils.js";

export default {
  setup() {
    const route = useRoute();
    const id = ref(route.params.id);
    const post = ref(null);

    onMounted(() => {
      const query = `*[_type == "post" && _id == $id][0] {..., author->}`;
      const params = { id: id.value };

      sanity.fetch(query, params).then((data) => {
        post.value = data;
      });
    });

    return {
      post,
      CreateUrl,
      TextStyler,
      FormatDate,
    };
  },
};
</script>
