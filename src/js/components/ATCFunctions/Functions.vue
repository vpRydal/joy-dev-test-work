<template>
    <div class="functions">
        <h3 class="functions__title">{{ title }}</h3>
        <ul v-if="functions.length" class="functions__list">
            <li v-for="(_function, index) in functions"
                class="functions__function"
                :key="index"
            >{{ _function }}</li>
        </ul>
        <span v-else>Загрузка...</span>
    </div>
</template>

<script>
    export default {
        name: "Functions",
        props: {
            functions: {
                type: Array,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../scss/colors";

    .functions {
        &__title {
            color: $mainGreen;
            margin-bottom: 18px;
        }
        &__function {
            margin-bottom: 20px;
            position: relative;
            padding-left: 35px;
            &:last-child {
                margin-bottom: 0;
            }

            &:before {
                content: '';
                position: absolute;
                display: block;
                width: 24px;
                height: 24px;
                background-color: rgba(0,150,242, .1);
                border-radius: 5px;
                left: 0;

            }

            &:after {
                content: '';
                position: absolute;
                display: block;
                width: 12px;
                height: 8px;
                left: 6px;
                top: calc(50% - 3px);
                background-image: url("/img/check-blue.png");
                background-size: cover;
            }
        }

        &.unsupported {
            & .functions__title {
                color: $mainRed;

            }

            & .functions__function {
                color: $mainGray;

                &:before {
                    background-color: rgba(146,154,163, .1);
                }
                &:after {
                    background-image: url("/img/cross.png");
                    width: 8px;
                    left: 8px;
                    height: 8px;
                }
            }
        }
    }
</style>