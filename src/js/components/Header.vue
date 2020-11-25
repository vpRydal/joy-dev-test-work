<template>
    <div class="header">
        <router-link :to="{name: 'step1'}" class="header__back" v-if="$route.name === 'step2'">Подходящие решения</router-link>
        <h1 class="header__title">{{ titleText }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            titleText: ''
        }),
        watch: {
            '$route': function ({name}) {
                if (name === 'step1')
                    this.titleText = '1/2 Какая у вас АТС';
                else
                    this.titleText = '2/2 Вы получаете следующие функции';

            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        position: relative;
        background-color: #002B7E;
        width: 100%;
        border-radius: 7px;
        padding: 17px 0;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        &__title {
            color: white;
            text-align: center;
            font-size: 32px;
            font-weight: normal;

        }

        &__back {
            position: absolute;
            display: block;
            left: 48px;
            color: white;
            &:before {
                content: '';
                position: absolute;
                left: -20px;
                top: calc(50% - 4.5px);
                display: block;
                height: 9.3px;
                width: 11.6px;
                background-image: url("/img/arrow.png");
                background-size: cover;
                transform: rotate(180deg);
            }
        }
    }
</style>