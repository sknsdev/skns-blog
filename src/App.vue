<template>
  <div class="bg-gray-700 min-h-screen text-white">
    <headerNav />
    <sidebarNav />
    <router-view />
  </div>
</template>

<script>
import headerNav from "./components/headerNav.vue";
import sidebarNav from "./components/sidebarNav.vue";
export default {
  components: {
    headerNav,
    sidebarNav,
  },
};
</script>

<style>
.btn {
  @apply bg-cyan-700 duration-300 font-semibold py-2 px-4 rounded-2xl inline-block shadow-sm cursor-pointer;
}

.btn:hover {
  @apply bg-cyan-600;
}
</style>
