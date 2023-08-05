<template>
    <div class="herobg pb-5 max-w-full">
        <div class="hero flex h-[500px] text-gray-100 justify-center">
            <div class="imgp">
                <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=2000" alt="Doctor" class="imgd h-[450px] max-w-[450px] rounded-b-[50%] mx-5">
            </div>
            <div class="my-auto text pt-[45px] text-center">
            <h1 class="text-5xl max-w-[650px] font-semibold mx-5">Лучшая медицинская служба, которая <span class="text-pink-400">ВЫ</span> можите доверять!</h1>
            <p class="max-w-[570px] text-xl mx-5 font-semibold">Наш врач "Госпожа Сохиба" - один из лучших кардиологов в Ташкенте, который поможет Вам нормализовать работу сердца и другие заболевания!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.herobg {
background: url('../assets/images/289319-medical-appointment-doctor-healthcare-clinic.jpg') no-repeat center / cover;
min-height: 600px;
position: relative;
isolation: isolate;
}
.herobg::before {
    content: '';
    position: absolute;
    left: o;
    top: 0;
    width: 100%;
    height: 100%;
    background: #1768ac;
    opacity: 0.5;
    z-index: -1;
}
</style>
