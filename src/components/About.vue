<template>
  <div class="container-fluid w-3/5 relative">
    <div class="flex">
      <!-- Setting Value -->
      <div class="w-1/3 bg-gray-100 p-4 rounded-tl-[20px] rounded-bl-[20px]">
        <div>
          <label class="block mb-2 font-bold text-gray-700" for="country">
            DVC Sales Customer?
          </label>
          <div class="relative">
            <select id="country" v-model="selectedOption" class="appearance-none py-2 pl-3 w-full pr-8 rounded leading-tight focus:outline-none focus:shadow-outline border-gray-300">
              <option value="Animal Kingdom">Animal Kingdom</option>
              <option value="Aulani">Aulani</option>
              <option value="Bay Lake Tower">Bay Lake Tower</option>
              <option value="Beach Club">Beach Club</option>
              <option value="Boardwark">Boardwark</option>
              <option value="Boulder Ridge">Boulder Ridge</option>
              <option value="Copper Creek">Copper Creek</option>
              <option value="Grand Ca">Grand Ca</option>
              <option value="Grand Floridian">Grand Floridian</option>
              <option value="Hilton Head">Hilton Head</option>
              <option value="Old Key West">Old Key West</option>
              <option value="Old Key West (2057)">Old Key West (2057)</option>
              <option value="Polynesian">Polynesian</option>
              <option value="Riviera">Riviera</option>
              <option value="Saratoga Springs">Saratoga Springs</option>
              <option value="Vero Beach">Vero Beach</option>
            </select>
            <p>You selected {{ selectedOption }}</p>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i class="fas fa-angle-down"></i>
            </div>
          </div>

        </div>
        <br>
        <div class="w-full flex">
          <div class="flex w-1/2 items-center justify-center">
            <div class="relative w-full">
              <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="Number of Points"
                class="p-2 w-full border rounded-md">
            </div>
          </div>
          <div class="flex w-1/2 items-center justify-center">

            <div class="relative w-full">
              <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="Price per point"
                class="p-2 w-full border rounded-md">
            </div>
          </div>

        </div>
        <div class="mt-4 ml-2 text-gray-500">
          Purchase Price of Contract: $0.00
        </div>
      </div>
      <!-- Explaination Resort -->
      <div class="w-2/3 bg-gray-200 p-4 rounded-tr-[20px] rounded-br-[20px] flex justify-center items-center">
        <div>
          <div class="text-[24px]">
            Use our instant quote tool to estimate your DVC financing options with Monera Financial.
          </div>
          <ul class="list-disc list-inside">
            <li class="list-circle">Competitive rates starting at 9.9%</li>
            <li class="list-circle">No credit check required</li>
            <li class="list-circle">Finance for up to 12 years</li>
            <li class="list-circle">No loan points reported to credit bureaus</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      selectedOption: ''
    };
  },

  methods: {
    handleScroll(e) {

    },
  },
};
</script>

<style></style>
