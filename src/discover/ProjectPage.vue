<template>
  <Navbar />
  <div class="">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                    Edit
                  </th>
                  <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    1
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-green-500 hover:text-green-700" href="#">
                      Edit
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-red-500 hover:text-red-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    2
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-green-500 hover:text-green-700" href="#">
                      Edit
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-red-500 hover:text-red-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    3
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    Jone Doe
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    jonne62@gmail.com
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-green-500 hover:text-green-700" href="#">
                      Edit
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <a class="text-red-500 hover:text-red-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ProjectData from "../data/projects.js";

import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default {
  name: "Project Page",
  data() {
    return {
      project: ProjectData,
    };
  },

  props: {
    blog: Array,
  },

  components: { Navbar, Services, Footer },
};
</script>

<style></style>
