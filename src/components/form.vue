<template>
  <div>
    <input type="text" v-model="value" />
    <div>{{ value }}</div>
    <button v-on:click="clickHandler()">Ok</button>
  </div>
</template>

<script>
export default {
  data: function () {
    {
      return {
        value: this.initialData.value,
      };
    }
  },

  methods: {
    clickHandler: function () {
      this.$emit('onOk', { value: this.value });
    },
  },

  props: {
    initialData: Object,
  },
};
</script>

<style scoped></style>
