<template>
  <!-- ini adalah app bar -->
  <div
    class="
      bg-gradient-to-r
      from-pink-500
      to-blue-500
      p-4
      text-white text-xl
      capitalize
    "
  >
    <div class="flex justify-between items-center">
      <div>farmasi ui</div>
      <div class="flex">
        <router-link
          to="/toko"
          class="
            capitalize
            hover:bg-blue-800
            bg-blue-700
            px-4
            py-1
            mx-2
            rounded-full
          "
        >
          toko
        </router-link>
        <router-link
          to="/"
          class="
            capitalize
            hover:bg-blue-800
            bg-blue-700
            px-4
            py-1
            mx-2
            rounded-full
          "
        >
          menu
        </router-link>
      </div>
    </div>
  </div>

  <!-- ini halaman utama -->
  <div class="bg-pink-500 text-white pb-16">
    <div class="container mx-auto py-8 px-3">
      <router-view></router-view>
    </div>
  </div>

  <!-- dan ini adalah tampilan footer -->
  <div
    class="
      bg-gradient-to-b
      from-pink-500
      to-pink-900
      p-12
      text-white text-xl
      capitalize
    "
  >
    <div>ini adalah footer saya</div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
