<template>
    <div :class="{ 'dark': darkMode }" class="">
        <div>
            <header name="navbar" class="dark:bg-black bg-white fixed top-0 left-0 right-0 z-50 text-emerald-400 font-extralight tracking-widest">
                <nav class="container mx-auto flex justify-between items-center py-4">
                    <div>
                        <NuxtLink to="/"
                            class="focus:text-blue-400 active:text-blue-400 transition-colors duration-200 hover:text-emerald-500 dark:text-emerald-400 text-blue-700 dark:font-extralight font-light tracking-widest px-6">
                            {{ $t('home') }}</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/second"
                            class="focus:text-blue-400 active:text-blue-400 transition-colors duration-200 hover:text-emerald-500 dark:text-emerald-400 text-blue-700 dark:font-extralight font-light tracking-widest px-6">
                            {{ $t('second') }}</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/third"
                            class="focus:text-blue-400 active:text-blue-400 transition-colors duration-200 hover:text-emerald-500 dark:text-emerald-400 text-blue-700 dark:font-extralight font-light tracking-widest px-6">
                            {{ $t('third') }}</NuxtLink>
                    </div>
                    <div>
                        <button @click="toggleDarkMode" class="focus:outline-none dark:text-emerald-400 text-blue-700">
                            <Icon class="size-6" v-if="!darkMode" name="material-symbols:dark-mode"
                                :color="darkMode ? 'rgb(16 185 129)' : 'text-gray-600'" size="35" />
                            <Icon class="size-6" v-else name="ph:sun-dim-fill"
                                :color="darkMode ? 'rgb(16 185 129)' : 'text-gray-600'" size="35" />
                        </button>
                    </div>
                    <div>
                        <form>
                            <label class="dark:text-emerald-400 mr-3 dark:font-extralight font-light text-blue-700"
                                for="locale-select">
                               {{$t('language')}}
                            </label>
                            <select
                                class=" dark:bg-black dark:text-emerald-400 dark:font-extralight font-light text-blue-700 "
                                id="locale-select" v-model="$i18n.locale">
                                <option value="en">English</option>
                                <option value="nl">Nederlands</option>
                                <option value="fr">Français</option>
                                <option value="ar">عربي</option>
                            </select>
                        </form>
                    </div>
                </nav>
            </header>

            <div class="absolute bottom-0 left-0 w-full flex justify-center pb-8 z-40">
                <button @click="scrollToNextSection" class="focus:outline-none ">
                    <Icon class="motion-safe:animate-bounce" name="material-symbols:keyboard-arrow-down-rounded"
                        :color="!darkMode ? 'blue' : (darkMode ? 'rgb(16 185 129)' : 'text-gray-600')" size="35" />
                </button>
            </div>



            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false
        };
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.updateColorMode();
        },
        updateColorMode() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            }
        },
        scrollToNextSection() {
            const nextSection = document.querySelector('.nextsection');
            if (nextSection) {
                const offset = nextSection.offsetTop - 320;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        }


    },
    mounted() {
        const isDarkMode = localStorage.getItem('darkMode');
        if (isDarkMode === 'true') {
            this.darkMode = true;
            document.documentElement.classList.add('dark');
        }
    }
};
</script>