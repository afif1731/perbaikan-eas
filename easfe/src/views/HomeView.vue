<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed">
      <div class="container-fluid">
          <a href="/" class="navbar-brand"><strong>Compete</strong></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-end flex-grow-0 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hello, User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body w-auto ">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold">
                  <li class="nav-item mx-1 ">
                      
                      <a href="/" class="nav-link active " aria-current="page">Status</a>
                  </li>
                  <li class="nav-item mx-1 ">
                      <router-link :to="{name: 'register'}" class="btn btn-outline-success nav-link">Register</router-link>
                  </li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>

  <div class=" m-5 ">
      <h1 class=" text-center fw-bold px-5 py-1 ">Welcome, {{ thisusr }}</h1>
  </div>
  <div class=" container-fluid">
      <div class="utama row-1">
          <div class=" col border border-3 border-black border-opacity-50 shadow w-auto p-4 rounded-3 mb-5">
              <div>
                  <h3 class=" text-center fw-bold px-5 py-1 ">Check your current status</h3>
              </div>
              <div>
                <div class="row mb-4">
                    <label class="col-sm-2 col-form-label fw-bold">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" v-model="inputEmail" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-lg  btn-primary mt-3 " @click="checkStat()">Check now!</button>
              </div>
              <div v-if="nowstat" class=" mt-3 ">
                  <p v-if="nowstat == 'waiting'" class=" fs-5 fw-normal ">Your Current Status: <span class=" text-primary ">{{ nowstat }}</span></p>
                  <p v-else-if="nowstat == 'accepted'" class=" fs-5 fw-normal ">Your Current Status: <span class=" text-success ">{{ nowstat }}</span></p>
                  <p v-else-if="nowstat == 'rejected'" class=" fs-5 fw-normal ">Your Current Status: <span class=" text-danger ">{{ nowstat }}</span></p>
                  <p class=" fs-5 fw-normal ">Asal Sekolah: {{ asalsklh }}</p>
                  <p class=" fs-5 fw-normal ">Created At: {{ cretdate }}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
export default{
  data() {
    return {
      inputEmail: "",
      thisusr: "User",
      nowstat: "",
      asalsklh: "",
      cretdate: ""
    }
  }, 
  methods: {
    async checkStat() {
      let rilEmail = this.inputEmail.replaceAll("@", "%40")
      await axios.get(`http://localhost:3000/api/competitors?where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Bemail%5D%5Bequals%5D=${rilEmail}`).then((res) => {
        let hasil = res.data.docs[0]
        console.log(hasil)
        this.thisusr = hasil.peserta
        this.nowstat = hasil.statusdftr
        this.asalsklh = hasil.asalsklh
        this.cretdate = hasil.createdAt.split('T')[0]
      })
    }
  }
}
</script>

<style scoped>
  .utama {
        margin: 3rem 30%
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 3rem 7%
        }
    }
</style>