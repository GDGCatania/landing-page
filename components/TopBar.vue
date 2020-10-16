<template>
  <div class="top-bar bg-white w-full h-auto py-4 relative">
    <div class="flex flex-row justify-between text-gray container">
      <img class="top-bar__logo"
           :src="require('~/assets/images/logo.png')"
           alt="GDG Catania's logo">
      <div class="top-bar__links shadow-light sm:shadow-none bg-white h-auto sm:bg-transparent flex flex-col sm:flex-row rounded-lg sm:rounded-none pl-6 py-6 sm:p-0 sm:justify-between my-auto"
           :class="{'top-bar__links--open': isMenuOpened}">
        <a class="top-bar__link link"
           href="#">About</a>
        <a class="top-bar__link link mt-6 sm:mt-0"
           href="#">GDG</a>
        <a class="top-bar__link link mt-6 sm:mt-0"
           href="#">News</a>
        <a class="top-bar__link link mt-6 sm:mt-0"
           href="#">Contatti</a>
      </div>
      <MenuButton :class="{'open': isMenuOpened}"
                  class="top-bar__menu-button z-50 sm:hidden"
                  @click.native="toggleMenu" />
    </div>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton';
export default {
  name: 'TopBar',
  components: {
    MenuButton,
  },
  data () {
    return {
      isMenuOpened: false,
    };
  },
  methods: {
    toggleMenu () {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
};
</script>

<style lang="postcss" scoped>
  .top-bar {
    &__links {
      width: 18rem;
      transition: opacity 200ms ease-out, left 500ms;
      @media screen and (min-width: 360px) {
        position: absolute;
        left: 30rem;
        opacity: 0;
      }
      @media screen and (min-width: 768px) {
        position: static;
        opacity: 1;
      }
      &--open {
        left: 12rem;
        opacity: 1;
      }
    }
    &__link:hover {
      color: theme(colors.gray.900);
    }
    &__logo {
      height: 3.5rem
    }
    &__menu-button {
      margin-top: 1.3rem;
    }
  }
</style>
