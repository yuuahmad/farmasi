<template>
  <!-- komponen pertama -->
  <div class="text-center capitalize text-xl">
    ini adalah header pertama saya
  </div>

  <!-- komponen kedua -->
  <div v-for="jenisbarang in jenisbarangs" :key="jenisbarang" class="mb-12">
    <div class="flex">
      <div
        class="
          bg-white
          flex-initial
          text-black
          px-3
          py-1
          rounded-xl
          capitalize
          text-xl
          m-4
        "
      >
        {{ jenisbarang.judul }}
      </div>
    </div>

    <div
      class="
        grid grid-cols-2
        md:grid-cols-3
        gap-4
        lg:grid-cols-4
        xl:grid-cols-6
      "
    >
      <div
        class="
          bg-yellow-300
          p-3
          capitalize
          grid
          justify-items-center
          rounded-xl
          text-black text-lg
        "
        v-for="kartubarang in jenisbarang.kartubarangs"
        :key="kartubarang"
      >
        <div
          class="
            rounded-full
            h-36
            w-36
            flex
            items-center
            justify-center
            bg-yellow-500
            mb-3
          "
        >
          Circle
        </div>
        <div class="text-xl">{{ kartubarang.nama }}</div>
        <div class="mb-4">{{ kartubarang.harga }}</div>
        <button class="rounded-full px-4 py-1 bg-yellow-400">beli</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jenisbarangs: [
        {
          judul: "jenis pertama",
          kartubarangs: [
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
          ],
        },
        {
          judul: "jenis kedua",
          kartubarangs: [
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
          ],
        },
        {
          judul: "jenis ketiga",
          kartubarangs: [
            {
              nama: "ketiga",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
            {
              nama: "pertama",
              harga: "gratis",
              ke: "pesan via wa",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
