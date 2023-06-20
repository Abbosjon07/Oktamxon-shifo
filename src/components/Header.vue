<template>
<div class="">
    
 <!-- Top -->
    <div class="top flex justify-between font-medium">
        <div class="icons flex gap-3 text-xl">
            <ul>
                <li>
            <i class="fa-brands fa-facebook text-[#2541b2]"></i>
                </li>
            </ul>
            <ul>
                <li>
            <i class="fa-brands fa-instagram text-red-600"></i>
                </li>
            </ul>
            <ul>
                <li>
            <i class="fa-solid fa-phone text-green-600"></i>
                </li>
            </ul>
            <ul>
                <li>
            <i class="fa-brands fa-telegram text-[#2541b2]"></i>                    
                </li>
            </ul>
        </div>
        
        <div class="phoneNumber flex gap-5 text-xl">
            <ul>
                <li>
            <i class="fa-solid fa-phone text-[#2541b2]"></i>
                </li>
            </ul>
            <ul><li class="">+998(90)922-69-84</li></ul>
            <ul><li>+998(94)606-30-76</li></ul>
        </div>
    </div>
<!-- Top end -->

<!-- Header -->
<div class="header flex justify-between text-xl px-5 py-2 items-center">   
    <div class="img flex gap-3 items-center">
        <ul><li><i class="fa-solid fa-heart-pulse text-3xl text-pink-400"></i></li></ul>
        <h2 class="w-10 text-gray-200">O'ktamxon shifo</h2>
    </div>
    <div class="flex gap-10 font-semibold text-gray-200">
        <ul>
            <li>
        <router-link :to="{ name: 'home' }" class="pages hover:text-[#06bee1]">Home</router-link> 
            </li>
        </ul>
        <ul>
            <li>
        <router-link :to="{ name: 'about' }" class="pages hover:text-[#06bee1]">About Us</router-link>
            </li>
        </ul>
        <ul>
            <li>
        <a href="" class="pages hover:text-[#06bee1]">Services</a>
            </li>
        </ul>
        <ul>
            <li>
        <a href="" class="pages hover:text-[#06bee1]">Doctors</a>
            </li>
        </ul>
        <ul>
            <li>
        <a href="" class="pages hover:text-[#06bee1]">Location</a>
            </li>
        </ul>
    </div>
</div>

</div>
</template>

<script>
export default {
    data() {
        return {
        //   greenBlue: "#2541b2"
        }
    }
}
</script>

<style>
:root {
    --darkblue: #03256c;
    --blue: #2541b2;
    --greenblue: #1768ac;
    --lightblue: #06bee1;
}

.top {
    padding: 5px 20px;
}

.header {
    background: var(--darkblue);
}

.pages {
    transition: 400ms;
}
</style>
