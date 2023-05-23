<template>
  <div v-if="data == 1">
  </div>
  <div v-else>
    <mewContract />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import NewContract from './NewContract.vue'
export default {
  name: 'SliderRange',
  components: {
    'mewContract': NewContract
  },
  computed: {
    ...mapGetters([
      'getData'
    ]),
    data() {
      return this.getData;
    }
  },

};
</script>