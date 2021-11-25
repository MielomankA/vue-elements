import Vue from 'vue';
import MyForm from '../src/components/form.vue';

// const app = Vue.extend({
const app = new Vue({
  el: `#app`,
  data: () => {
    return {
      counter: 0,
      isPopupOpened: false,
    };
  },

  template: `<div>Привет
    <button type="button" v-on:click="clickHandler()">Counter +</button>
    <div class="count">{{counter}}</div>

    <button v-on:click="showPopup()">Открыть форму</button>

    <my-form v-on:onOk="okHandler($event)" v-if="isPopupOpened" v-bind:initialData="{value: 'Name'}"></my-form>
  </div>
  `,

  methods: {
    clickHandler: function () {
      this.counter++;
      this.$emit('onMyEvent', this.counter);
    },

    okHandler: function (data: { value: string }) {
      console.log(data);
      this.isPopupOpened = false;
    },

    showPopup: function () {
      this.isPopupOpened = true;
    },
  },

  components: {
    'my-form': MyForm,
  },
});

app.$on('onMyEvent', (data: any) => {
  console.log(data);
});

const jsButton = document.createElement('button');
jsButton.textContent = 'Counter -';
jsButton.onclick = () => {
  app.$data.counter--;
};
document.body.append(jsButton);
