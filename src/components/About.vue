<template>
  <div class="container-fluid w-3/5 relative">
    <div class="flex">
      <!-- Setting Value -->
      <div class="w-1/3 bg-gray-100 p-4 rounded-tl-[20px] rounded-bl-[20px]">
        <div>
          <label class="block mb-2 font-bold text-gray-700" for="country">
            Country
          </label>
          <div class="relative">
            <select id="country"
              class="appearance-none py-2 pl-3 w-full pr-8 rounded leading-tight focus:outline-none focus:shadow-outline border-gray-300">
              <option>Animal Kingdom</option>
              <option>Aulani</option>
              <option>Bay Lake Tower</option>
              <option>Beach Club</option>
              <option>Boardwark</option>
              <option>Boulder Ridge</option>
              <option>Copper Creek</option>
              <option>Grand Ca</option>
              <option>Grand Floridian</option>
              <option>Hilton Head</option>
              <option>Old Key West</option>
              <option>Old Key West (2057)</option>
              <option>Polynesian</option>
              <option>Riviera</option>
              <option>Saratoga Springs</option>
              <option>Vero Beach</option>
            </select>
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
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
            <li class="list-circle">No prepayment penalty and no service fee</li>
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
    };
  },

  methods: {
    handleScroll(e) {

    },
  },
};
</script>

<style></style>
