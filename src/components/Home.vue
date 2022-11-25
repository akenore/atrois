<script setup>
import Footer from './Footer.vue'
</script>

<template>
  <div>
    <div class="grid col-1 mx-auto gap-6 mb-20 md:grid-cols-1 lg:grid-cols-2">
      <div class="left-bar "></div>
      <div class="lg:ml-30 sm:ml-20 ">
        <h1 class="text-[30px] lg:text-[60px] ml-20 mt-2 font-captura text-white">
          Bienvenue à <b class="text-red-600">A</b>trois
        </h1>
        <p class="ml-20 text-white mt-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br />
          luctus nec ullamcorper mattis, pulvinar leo.
        </p>
        <a href="mailto:info@atrois.lu" target="_blank"
          class="font-myriadpro-semi ml-20 text-[21px] text-white bg-custom-purple hover:bg-custom-purple focus:ring-4 focus:ring-custom-purple font-medium rounded-lg text-sm px-6 py-3 mr-2 mb-2 dark:bg-custom-purple dark:hover:bg-custom-purple focus:outline-none dark:focus:ring-custom-purple">Contact-nous</a>
        <div class="ml-20 mt-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-white flex space-x-2">
              <div>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                  </path>
                </svg>
              </div>
              <div class="font-myriadproSemi">
                +352 621 302 722
              </div>
            </div>
            <div class="text-white flex space-x-2">
              <div>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
              </div>
              <div class="font-myriadproSemi">
                info@atrois.lu
              </div>
            </div>
            <div class="text-white flex space-x-2">
              <div>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div class="font-myriadproSemi">
                24 Robert Krieps,<br />
                L-4702 PETANGE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" img-p">
        <img src="../assets/right-img.png" alt="Atrois right image">
      </div>

    </div>

  </div>
</template>

<style>
.left-bar {
  width: 250px;
  height: 87px;
  background-color: rgba(100, 111, 212, 0.43);
  position: absolute;
  border-radius: 0 20px 20px 0;
  z-index: -1;
  margin-right: 50px;
}

.logo {
  margin: 50px 0 30px 200px;

}
.img-p{
  margin-top: -250px;
}

@media screen and (max-width: 480px) {
  .left-bar {
    /* width: 250px;
    bottom: 0; */
    display: none;
  }

  .logo {
    margin: 10px 0 30px 10px;
  }
}

@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 1024px) {
  .logo {
    margin: 10px 0 30px 50px;
  }
  .img-p{
  display: none;
}

  .left-bar {
    width: 250px;

  }
}
</style>
