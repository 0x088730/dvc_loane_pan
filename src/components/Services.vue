<template>
  <div class="hidden lg:flex lg:items-center lg:justify-center -mt-[300px]">
    <div class="page-section features">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp w-[500px] self-center">
            <div class="d-flex flex-row text-[64px]">
              Instant Quote
            </div>
          </div>
          <div class="col-md-6 col-lg-4 py-3 wow fadeInUp self-center">
            <div class="d-flex flex-row border-0 rounded-[42px] w-full bg-slate-400">
              <div class="py-2 px-2 border-gray-700 border rounded-[42px] w-[250px] text-center m-1 bg-white" @click="clickButton(0)">
                New Contract
              </div>
              <div class="py-2 px-2 border-0 rounded-[42px] w-[250px] text-center m-1" @click="clickButton(1)">
                Refinance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'setData'
    ]),
    clickButton: function(value) {
      this.setData(value);
    }
  }
};
</script>

<style></style>
