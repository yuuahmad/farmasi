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
          v-for="halaman in halamans"
          :key="halaman"
          :to="halaman.ke"
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
          {{ halaman.judul }}
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
      text-white text-md
      capitalize
    "
  >
    <div class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="footer in footers" :key="footer">
        <div>
          {{ footer.judul }}
          <div
            class="text-sm ml-3"
            v-for="keterangan in footer.keterangans"
            :key="keterangan"
          >
            {{ keterangan }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footers: [
        {
          judul: "informasi",
          keterangans: ["satu", "dua", "dan tiga"],
        },
        {
          judul: "sponsor",
          keterangans: ["satu", "dua", "dan tiga"],
        },
        {
          judul: "media partner",
          keterangans: ["satu", "dua", "dan tiga"],
        },
        {
          judul: "medsos dan informasi",
          keterangans: ["satu", "dua", "dan tiga"],
        },
      ],
      halamans: [
        {
          judul: "home",
          ke: "/",
        },
        {
          judul: "toko",
          ke: "/toko",
        },
        {
          judul: "admin",
          ke: "/admin",
        },
        {
          judul: "event",
          ke: "/event",
        },
        {
          judul: "lomba",
          ke: "/lomba",
        },
      ],
    };
  },
};
</script>

<style></style>
