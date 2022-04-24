<template>
  <header class="flex w-full items-center justify-center p-4">
    <div
      :class="`header__wrapper relative z-50 ${
        isMenuActive ? 'is-active' : ''
      }`"
      @click="ToggleMenu"
    >
      <div class="header__menu">
        <span></span>
      </div>
    </div>

    <h1
      class="
        text-center
        first-letter:bg-cyan-500
        font-light
        text-3xl
        uppercase
        tracking-widest
      "
    >
      News
    </h1>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const ToggleMenu = () => {
      store.dispatch("toggleMenu");
    };

    return {
      isMenuActive: computed(() => store.state.isMenuActive),
      ToggleMenu,
    };
  },
};
</script>

<style scoped>
.header__wrapper {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.header__menu {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
}

.header__menu span {
  top: 50%;
  transform: translateY(-50%);
}

.header__menu span,
.header__menu span::before,
.header__menu span::after {
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 99px;
  background: white;
  transition: all 0.2s ease-in-out;
}

.header__menu span::before,
.header__menu span::after {
  content: "";
}

.header__menu span::before {
  top: 8px;
}
.header__menu span::after {
  top: -8px;
}

.header__wrapper.is-active .header__menu > span {
  transform: rotate(45deg);
}

.header__wrapper.is-active .header__menu > span:before {
  top: 0;
  transform: rotate(0deg);
}

.header__wrapper.is-active .header__menu > span:after {
  top: 0;
  transform: rotate(90deg);
}
</style>
