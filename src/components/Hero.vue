<template>
    <div class="herobg pb-5">
        <div class="flex hero h-[500px] text-gray-100 pl-[50px] justify-center">
            <div class="pt-[195px]">
            <h1 class="text-5xl w-[650px] font-semibold">Лучшая медицинская служба, которая <span class="text-pink-400">ВЫ</span> можите доверять!</h1>
            <p class="w-[570px] text-xl font-semibold">Наш врач "Госпожа Сохиба" - один из лучших кардиологов в Ташкенте, который поможет Вам нормализовать работу сердца и другие заболевания!</p>
            </div>
            <div class="imgp">
                <img src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=2000" alt="Doctor" class="h-[500px] rounded-b-[50%]">
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
