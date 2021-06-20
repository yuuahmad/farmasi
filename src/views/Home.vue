<template>
  <!-- tampilan pertama -->
  <div class="grid grid-cols-1 place-items-center">
    <div class="capitalize text-2xl">open house farmasi UI</div>
    <div>terus berkarya untuk bangsa</div>
  </div>

  <!-- tampilan bagian kedua -->
  <br /><br /><br />
  <div class="text-center capitalize text-2xl py-2">
    kenalan dengan kami yuk
  </div>
  <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
    <div class="bg-pink-600 p-3 rounded-lg shadow-md">
      <div class="capitalize text-center text-xl pb-3">
        apa itu open house FF UI?
      </div>
      <div class="px-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        voluptatem vitae vel repellat, unde incidunt provident totam commodi
        iste sequi, quis placeat. Quidem at saepe, dignissimos aliquam ab
        nesciunt iure! In accusantium doloribus officia vo
      </div>
    </div>
    <div class="bg-pink-600 p-3 rounded-lg shadow-md grid justify-items-center">
      <div class="capitalize text-center text-xl pb-3">video teaser</div>
      <iframe
        src="https://www.youtube.com/embed/3z9Ub2uspu0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!-- tampilan bagian ketiga -->
  <br /><br /><br />
  <div>
    <div class="capitalize text-center text-2xl pb-3">tentang farmasi UI</div>
    <div class="text-center">ini nantinya adalah carousel</div>
  </div>

  <!-- tampilan bagian keempat -->
  <br /><br /><br />
  <div class="capitalize text-center text-2xl pb-3">apa kata mereka?</div>
  <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
    <div
      class="bg-pink-600 p-3 rounded-lg shadow-md"
      v-for="katamereka in katamerekas"
      :key="katamereka"
    >
      <div class="grid justify-items-center capitalize pb-3">
        <div
          class="
            rounded-full
            h-36
            w-36
            flex
            items-center
            justify-center
            bg-pink-700
            mb-3
          "
        >
          Circle
        </div>
        <div class="text-xl">{{ katamereka.nama }}</div>
        <div class="text-lg">{{ katamereka.jabatan }}</div>
      </div>
      <div class="px-4">
        {{ katamereka.keterangan }}
      </div>
    </div>
  </div>

  <!-- tampilan kelima -->
  <br /><br /><br />
  <div class="capitalize text-center text-2xl pb-3">
    rangkaian kegiatan open house FF UI
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <div
      class="bg-pink-600 rounded-xl p-3 grid justify-items-center"
      v-for="rangkaiankegiatan in rangkaiankegiatans"
      :key="rangkaiankegiatan"
    >
      <div class="text-xl capitalize">
        {{ rangkaiankegiatan.judul }}
      </div>
      <div>
        <div v-for="kegiatan in rangkaiankegiatan.kegiatans" :key="kegiatan">
          {{ kegiatan.nama }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangkaiankegiatans: [
        {
          judul: "event pertama",
          kegiatans: [
            {
              nama: "satu",
            },
            {
              nama: "empat",
            },
            {
              nama: "tiga",
            },
          ],
        },
        {
          judul: "event pertama",
          kegiatans: [
            {
              nama: "lima",
            },
            {
              nama: "dua",
            },
            {
              nama: "tiga",
            },
          ],
        },
        {
          judul: "event pertama",
          kegiatans: [
            {
              nama: "satu",
            },
            {
              nama: "dua",
            },
            {
              nama: "tiga",
            },
          ],
        },
      ],
      katamerekas: [
        {
          nama: "ahmad yusuf maulana",
          jabatan: "anggoota muda",
          keterangan:
            "dlajfadf aldfjalkdf aldkfkjadf alkdkfja flakdjkfaldspiewg agasdlga glsdkgja gasiidgaldg asdsgpasdsgklasgj aspdglasksjg asdgpadsgkjassdlgasdd g jalg ag",
        },
        {
          nama: "ajeng varisa",
          jabatan: "anggoota muda",
          keterangan:
            "dlajfadf aldfjalkdf aldkfkjadf alkdkfja flakdjkfaldspiewg agasdlga glsdkgja gasiidgaldg asdsgpasdsgklasgj aspdglasksjg asdgpadsgkjassdlgasdd g jalg ag",
        },
        {
          nama: "ahmad yusuf maulana",
          jabatan: "anggoota muda",
          keterangan:
            "dlajfadf aldfjalkdf aldkfkjadf alkdkfja flakdjkfaldspiewg agasdlga glsdkgja gasiidgaldg asdsgpasdsgklasgj aspdglasksjg asdgpadsgkjassdlgasdd g jalg ag",
        },
        {
          nama: "ahmad yusuf maulana",
          jabatan: "anggoota muda",
          keterangan:
            "dlajfadf aldfjalkdf aldkfkjadf alkdkfja flakdjkfaldspiewg agasdlga glsdkgja gasiidgaldg asdsgpasdsgklasgj aspdglasksjg asdgpadsgkjassdlgasdd g jalg ag",
        },
      ],
      slide: [
        "https://www.bing.com/images/search?view=detailV2&ccid=NNFzQgxK&id=671077CD25517F6F216EE979162C0420A228B693&thid=OIP.NNFzQgxKOWUop62Eb3KHYgHaEo&mediaurl=https%3a%2f%2f4.bp.blogspot.com%2f-qc6xH07lMyg%2fV6Hc8sUdSiI%2fAAAAAAAAAHs%2fTySsACd432odgGJjD3qUvwPp2sRb-RfQgCLcB%2fs1600%2fWallpaper%252BGambar%252BPemandangan%252BAlam%252BTerbaru.jpg&exph=640&expw=1024&q=gambar+pemandangan&simid=608017135565961026&ck=D4C5719FED4422F57E83E1E5D103B479&selectedIndex=0&FORM=IRPRST",
        "https://2.bp.blogspot.com/--q8V--bAea4/UQnU52O0tSI/AAAAAAAAD8I/2BzYWqJhO0E/s1600/Wallpaper-Pemandangan-Alam.jpg",
      ],
    };
  },
};
</script>

<style></style>
