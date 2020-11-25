<template>
    <span v-if="show" class="preloader">
        <span class="preloader__container">
            <span v-for="i in 12" :key="i" class="preloader__circle" :class="`preloader__circle-${i}`"></span>
        </span>
    </span>
</template>

<script>
    export default {
        name: "Preloader",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/colors";

    $circleCount: 12;
    $animationDuration: 1.2s;
    .preloader {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;

        width: 100%;
        height: 100%;

        z-index: 2;

        background-color: rgba(0, 0, 0, .3);

        &__container {
            position: relative;
            display: block;

            z-index: 3;

            width: 4em;
            height: 4em;
            margin: auto;
        }

        &__circle {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        &__circle:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: $mainBlue;
            border-radius: 100%;
            animation: preloader-delay $animationDuration infinite ease-in-out both;
        }

        @for $i from 2 through $circleCount {
            .preloader__circle-#{$i} {
                transform: rotate((360deg / $circleCount * ($i - 1)));
            }
        }

        @for $i from 2 through $circleCount {
            .preloader__circle-#{$i}:before {
                animation-delay: (-$animationDuration + $animationDuration / $circleCount * ($i - 1));
            }
        }
    }

    @keyframes preloader-delay {
        0%, 39%, 100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }
</style>