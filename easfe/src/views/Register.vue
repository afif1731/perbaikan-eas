<template>
    <div class=" container-fluid ">
        <div class=" utama row-1 border border-3 border-primary border-opacity-50 shadow w-auto rounded-3">
            <div class=" col p-3">
                <h3 class=" text-center fw-bold mb-5">REGISTER</h3>
                    <div class="row mb-4">
                        <label class="col-sm-2 col-form-label fw-bold">Username</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="inputName" required>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label class="col-sm-2 col-form-label fw-bold">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" v-model="inputEmail" required>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label class="col-sm-2 col-form-label fw-bold">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" v-model="inputPassword" required>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <label class="col-sm-2 col-form-label fw-bold">Asal Sekolah</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="inputSklh" required>
                        </div>
                    </div>
                    <button class="btn btn-lg  btn-primary mt-3 " v-on:click="submitReg()">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
    },
    data() {
        return {
            inputName: "",
            inputEmail: "",
            inputPassword: "",
            inputSklh: "",
            currstat: "waiting",
        }
    },
    methods: {
        async submitReg() {
            await axios.post("http://localhost:3000/api/competitors", {
                peserta: this.inputName,
                email: this.inputEmail,
                password: this.inputPassword,
                asalsklh: this.inputSklh,
                statusdftr: this.currstat
            }).then((res) => {
                if(res.data.message = "Competitor successfully created.") {
                    router.push('/')
                }
                else {
                    window.alert("Something wrong during your register")
                }
            })
        }
    }
}
</script>

<style scoped>
    .utama {
        margin: 5rem 30%
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 5rem 7%
        }
    }
</style>