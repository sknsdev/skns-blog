<template>
  <aside
    :class="`fixed top-0 left-0 min-h-screen pt-16 z-40 w-full max-w-xs transform duration-200 bg-gray-800 ${
      isMenuActive ? 'translate-x-0' : '-translate-x-full'
    }`"
  >
    <div class="p-4">
      <h2 class="text-gray-500 text-sm font-bold uppercase mb-2">Menu</h2>

      <div class="-mx-4">
        <menuItem to="/">
          <span class="material-icons mr-2">home</span> Home
        </menuItem>
        <menuItem to="/about">
          <span class="material-icons mr-2">person</span> About
        </menuItem>
      </div>
    </div>
  </aside>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import menuItem from "./menuItem.vue";

export default {
  components: {
    menuItem,
  },
  setup() {
    const store = useStore();

    return {
      isMenuActive: computed(() => store.state.isMenuActive),
      menuItem,
    };
  },
};
</script>
