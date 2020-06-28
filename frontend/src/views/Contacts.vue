<template>
  <div>
    <h1 v-for="(text, i) in 50" :key="i">
      -------------- Contacts --------------
    </h1>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data: () => ({})
};
</script>

<style lang="scss" scoped></style>
