<template>
  <div>
    <TopBar />
    <Nuxt />
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';
export default {
  name: 'Default',
  components: {
    TopBar,
  },
};
</script>

<style lang="postcss">
</style>
