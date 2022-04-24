<template>
  <div class="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row">
    <img
      v-if="post.image"
      :src="CreateUrl(post.image, 480, 320)"
      class="bloack w-full sm:max-w-xs mr-4 object-cover mb-4 sm:mb-0 rounded-lg"
      alt="post image"
    />
    <div class="flex-1 flex flex-col">
      <h3 class="text-lg mg:text-2xl font-bold mb-4">{{ post.title }}</h3>
      <p class="text-gray-500 mg:text-lg mb-4 flex-1">{{ post.excerpt }}</p>

      <div
        class="
          flex
          sm:flex-col
          md:flex-row
          justify-between
          items-start
          md:items-end
        "
      >
        <div class="flex items-center sm:mb-4 md:mb-0">
          <img
            v-if="post.author.avatar"
            :src="CreateUrl(post.author.avatar, 32, 32)"
            alt="author photo"
            class="rounded-full border-2 border-cyan-200 hover:border-cyan-600 mr-2"
          />
          <p class="text-white mr-2">{{ post.author.full_name }}</p>
          <p class="text-gray-500 text-sm">
            {{ FormatDate(post._createdAt) }}
          </p>
        </div>

        <router-link :to="`/post/${post._id}`" class="btn"
          >See more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { FormatDate, CreateUrl } from "../utils.js";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      FormatDate,
      CreateUrl,
    };
  },
};
</script>