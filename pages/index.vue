<template>
    <div class="relative h-screen flex flex-col items-center justify-center">
        <div class="text-5xl tracking-widest dark:text-emerald-400 dark:font-thin text-blue-700 font-extralight">
            <h1>{{ $t('title') }}</h1>
        </div>
        <div class="mt-4">
            <Textcard />
        </div>
    </div>
    <section class="nextsection mt-96">
        <div>
            <h2 class="dark:text-emerald-400 text-blue-700 flex justify-center text-xl mt-60">{{ $t('section1') }}</h2>
        </div>
        <div class="flex items-center justify-center mt-10">
            <div class="w-4/12">
                <p class="dark:text-emerald-400 text-blue-700 dark:font-extralight font-light mb-72"> {{ $t('section1tekst') }}
                </p>
            </div>
        </div>
    </section>
    <div>
        <h2 class="dark:text-emerald-400 text-blue-700 flex justify-center text-xl">Another Section</h2>
    </div>
    <div class="flex items-center justify-center mt-10">
        <div class="w-4/12">
            <p class="dark:text-emerald-400 text-blue-700 font-light dark:font-extralight mb-72">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe
                corrupti rerum autem similique ducimus. Error consectetur eaque harum! Omnis, libero?<br><br> Eius eaque
                consectetur nihil sequi non incidunt impedit, vero molestias,
                minima
                repudiandae
                aliquid odit eveniet ut quas modi ipsam dicta hic optio doloribus sint accusantium, corporis ex
                reprehenderit? Ipsam! <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel, cupiditate
                incidunt dolorem necessitatibus eius maiores in adipisci, asperiores rem quo quisquam fuga explicabo
                dignissimos mollitia aliquam veniam sunt quibusdam.
            </p>
        </div>
    </div>
</template>
  
<script setup>
</script>
  
<style scoped></style>
