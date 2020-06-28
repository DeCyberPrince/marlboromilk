<template>
  <div>
    <h1 v-for="(text, i) in 50" :key="i">
      -------------- Merch --------------
    </h1>
  </div>
</template>

<script>
export default {
  name: "Merch",
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
