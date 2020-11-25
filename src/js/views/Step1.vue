<template>
    <div class="step-wrapper">
        <div class="step-one">
            <ATCList class=""/>
            <button class="step-one__btn-next-step btn" :disabled="!selectedAtc? 'disabled': false"
                    @click="$router.push({name: 'step2'})"

            >Перейти к следующему шагу</button>
            <Preloader :show="showPreloader"/>
        </div>
    </div>
</template>

<script>
    import ATC from "../components/ATC";
    import ATCList from "../components/ATCList";
    import Preloader from "../components/Preloader";
    export default {
        name: "Step1",
        components: {Preloader, ATCList},
        mixins: [ATC],
        data: () => ({
            showPreloader: false
        }),
        methods: {
        },
        beforeRouteLeave(to, from, next) {
            this.showPreloader = true;
            setTimeout(() => {
                this.showPreloader = false;
                next()
            }, 2000)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/colors";

    .step-wrapper {
        position: relative;
    }
    .step-one {
        &__btn-next-step {

            &:after {
                content: '';
                display: inline-block;
                background-image: url("/img/arrow.png");
                background-size: cover;
                width: 14px;
                height: 10px;
                margin-left: 13px;
            }
        }
    }
</style>