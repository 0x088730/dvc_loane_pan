<template>
  <Navbar />
  <Header />
  <Services />
  <About />
  <Footer />
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Services from "./Services.vue";
import About from "./About.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    Navbar,
    Header,
    Services,
    About,
    Footer,
  },
};
</script>

<style></style>
