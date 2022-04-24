<template>
  <div class="home">
    <section class="container mx-auto px-4">
      <h1 class="text-2xl mb-8">Latest Posts</h1>
      <div class="grid gap-4">
        <!-- PostCard -->
        <postCard v-for="(post, index) in posts" :key="index" :post="post" />
      </div>

      <button
        v-if="$store.state.total_posts > posts.length"
        @click="$store.dispatch('LoadMorePosts', 1)"
        class="btn mt-8"
      >
        Load More ({{$store.state.total_posts - posts.length}})
      </button>
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, computed } from "vue";
import { useStore } from "vuex";
import sanity from "../client.js";
import postCard from "../components/postCard.vue";

export default {
  components: {
    postCard,
  },

  setup() {
    const subscription = ref(null);
    const store = useStore();

    const posts = computed(() => {
      return store.getters.posts;
    });

    onMounted(() => {
      store.dispatch("fetchPosts", 2);

      const query = '*[_type == "post"]';

      subscription.value = sanity.listen(query).subscribe((update) => {
        switch (update.transition) {
          case "update":
            console.log("post updated - ", update);
            break;
          case "appear":
            console.log("post appear - ", update);
            break;
          case "disappear":
            console.log("post disappear - ", update);
            break;
        }
      });
    });

    onUnmounted(() => {
      subscription.value.unsubscribe();
    });

    return {
      posts,
    };
  },
};
</script>

