<template>
  <div>
    <h1 v-for="(text, i) in 50" :key="i">
      -------------- Covers --------------
    </h1>
  </div>
</template>

<script>
export default {
  name: "Covers",
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
