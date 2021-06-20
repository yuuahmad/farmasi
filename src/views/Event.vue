<template>
  <!-- ini adalah komponen pertama -->
  <div class="text-center capitalize text-2xl mb-3">
    kenalan dengan acara yang ada
  </div>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div
      class="p-3 bg-pink-600 rounded-xl"
      v-for="acara in acaras"
      :key="acara"
    >
      <div class="capitalize text-lg text-center">{{ acara.judul }}</div>
      <div>
        {{ acara.keterangan }}
      </div>
    </div>
  </div>
  <br /><br /><br />
  <!-- dan ini komponen saya yang kedua -->
  <div class="text-center capitalize text-2xl">
    pertanyaan yang sering ditanyakan
  </div>
  <!-- ini halaman latihan saya -->
  <div v-bind:title="pesan">geser ke saya</div>
  <br /><br /><br />

  <!-- latihan membuat pesan rahasia -->
  <div class="bg-pink-600 p-4 rounded-xl mb-4" v-for="qna in qnas" :key="qna">
    <div class="flex justify-between items-center">
      <div>{{ qna.pertanyaan }}</div>
      <button
        class="
          flex-initial
          px-3
          py-1
          mb-2
          rounded-full
          bg-pink-700
          hover:bg-pink-800
        "
        v-on:click="qna.lihatPesan = !qna.lihatPesan"
      >
        jawaban
      </button>
    </div>
    <div v-if="qna.lihatPesan" class="border-t-2 border-fuchsia-600">
      {{ qna.jawaban }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acaras: [
        {
          judul: "ini judul pertama saya",
          keterangan:
            "ini adalah keterangan saya yang menurut saya penting namun menurut anda tidak penting sama sekali",
        },
        {
          judul: "ini judul pertama saya",
          keterangan:
            "ini adalah keterangan saya yang menurut saya penting namun menurut anda tidak penting sama sekali",
        },
        {
          judul: "ini judul pertama saya",
          keterangan:
            "ini adalah keterangan saya yang menurut saya penting namun menurut anda tidak penting sama sekali",
        },
        {
          judul: "ini judul pertama saya",
          keterangan:
            "ini adalah keterangan saya yang menurut saya penting namun menurut anda tidak penting sama sekali",
        },
        {
          judul: "ini judul pertama saya",
          keterangan:
            "ini adalah keterangan saya yang menurut saya penting namun menurut anda tidak penting sama sekali",
        },
      ],
      qnas: [
        {
          pertanyaan:
            "ini adalah pertanyaan saya yang saya anggap kurang penting",
          jawaban:
            "ini adalah jawaban yang saya pikir tidak penting bagi kalian yang benar benar menginginkan jawaban yang benar",
          lihatpesan: false,
        },
        {
          pertanyaan:
            "ini adalah pertanyaan saya yang saya anggap kurang penting",
          jawaban:
            "ini adalah jawaban yang saya pikir tidak penting bagi kalian yang benar benar menginginkan jawaban yang benar",
          lihatpesan: false,
        },
        {
          pertanyaan:
            "ini adalah pertanyaan saya yang saya anggap kurang penting",
          jawaban:
            "ini adalah jawaban yang saya pikir tidak penting bagi kalian yang benar benar menginginkan jawaban yang benar",
          lihatpesan: false,
        },
      ],
    };
  },
};
</script>

<style></style>
