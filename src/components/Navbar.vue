<template>
  <nav class="border-gray-200 rounded bg-green-50 dark:bg-white-800 dark:border-gray-700 relative">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <p class="flex items-center hover:no-underline">
        <img src="" class="h-6 mr-3 sm:h-10" />
        <span class="self-center hover:text-green-600 text-xl font-semibold whitespace-nowrap dark:text-white">
          Logo
        </span>
      </p>
      <div class="flex flex-row justify-center">
        <div class="w-[24px] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
            <path
              d="M20 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H12V14H9V11H12V9.5C12 6.46 14.46 4 17.5 4H20V7H17.5C16.57 7 16 7.57 16 8.5V11H20L19.5 14H16V22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4Z" />
          </svg>
        </div>
        <div class="w-[24px] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
            <path
              d="M23 4.999c-0.875 0.387-1.813 0.647-2.799 0.767 1.005-0.603 1.775-1.558 2.135-2.699-0.938 0.553-1.979 0.955-3.085 1.178-0.884-0.944-2.144-1.533-3.537-1.533-2.671 0-4.835 2.164-4.835 4.835 0 0.378 0.043 0.748 0.127 1.103-4.02-0.202-7.582-2.135-9.961-5.078-0.416 0.709-0.656 1.533-0.656 2.409 0 1.671 0.849 3.146 2.14 3.998-0.789-0.026-1.527-0.242-2.178-0.605v0.061c0 2.331 1.657 4.281 3.85 4.725-0.402 0.107-0.827 0.165-1.268 0.165-0.31 0-0.615-0.03-0.912-0.086 0.616 1.929 2.41 3.337 4.534 3.373-1.665 1.307-3.757 2.086-6.029 2.086-0.392 0-0.778-0.023-1.161-0.068 2.148 1.374 4.695 2.174 7.437 2.174 8.925 0 13.811-7.391 13.811-13.812l-0.016-0.627c0.952-0.685 1.788-1.544 2.448-2.524l-0.047 0.023z" />
          </svg>
        </div>
        <div class="w-[24px] h-[24px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M19 2h-14c-1.1 0-1.99 0.9-1.99 2l0.01 16c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-16c0-1.1-0.9-2-2-2zM9 20h-2v-2h2v2zM15 20h-2v-2h2v2zM17 16h-14v-12h14v12z" />
          </svg>

        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </nav>
  <nav class="sticky z-10 top-0 bg-transparent text-white">
    <!-- Navbar content -->
    <div
      :class="{ 'container-fluid flex flex-wrap items-end justify-evenly mx-auto bg-white p-2 m-0': hasScrolled, 'container flex flex-wrap items-end justify-between mx-auto ': !hasScrolled }">
      <!-- :class="{ 'hidden w-full md:block md:w-auto': !hasScrolled, 'hidden w-full md:block md:w-auto bg-white-700': hasScrolled }" -->
      <p class="flex items-center hover:no-underline">
        <span class="self-center hover:text-green-600 text-xl font-semibold whitespace-nowrap dark:text-white hidden xl:block">
          <img src="../assets/imgpsh_fullsize_anim.png" alt="" srcset="" class="w-[150px] h-[42px]">
        </span>
      </p>
      <div>
        <ul
          class="flex flex-col mt-4 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <router-link to="/"
              class="flex items-center hover:no-underline p-2 ml-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Contract Financing</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects"
              class="flex items-center hover:no-underline p-2 ml-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Cash-Out Refinance</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about"
              class="flex items-center p-2 ml-2 hover:no-underline text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Team</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blog"
              class="flex items-center p-2 ml-2 hover:no-underline text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Blogs</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blog"
              class="flex items-center p-2 ml-2 hover:no-underline text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Podcast</span>
            </router-link>
          </li>
          <li>
            <router-link to="/blog"
              class="flex items-center p-2 ml-2 hover:no-underline text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              aria-current="page">
              <span class="flex-1 ml-2 whitespace-nowrap">Contact</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="self-center bg-red-700 px-4 py-2 rounded-[42px] hidden xl:block">
          Instant Quote
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      active: 0,
      hasScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    inActive() {
      this.active += 1;
    },
    handleScroll() {
      if (window.pageYOffset > 42) {
        this.hasScrolled = true;
      } else {
        this.hasScrolled = false;
      }
    },
  },
};
</script>

<style>
.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity 0.5s ease;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}

.sticky-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  z-index: 999;
}

/* .vue-school-active-link {
  background-color: rgb(225, 255, 228);
  padding: 5px 12px;
  border-radius: 10px;
  text-decoration: none;
} */
</style>
