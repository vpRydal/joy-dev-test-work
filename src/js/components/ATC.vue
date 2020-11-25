<template>
    <div class="ATC">
        <h3 class="ATC__title">{{ title }}</h3>
        <ul class="ATC__list">
            <li class="ATC__list-item" v-for="(text, index) in items"
                :key="index"
                @click="onSelect(text, index)"
                :class="{'ATC__list-item_selected': text === selectedAtc}"
            >
                {{ text }}
            </li>
        </ul>
    </div>
</template>

<script>
    import bus from "../bus";

    export default {
        name: "ATC",
        props: {
            items: {
                type: Array,
            },
            title: {
                type: String,
            }
        },
        methods: {
            onSelect(text) {
                this.$store.dispatch('ATC/setSelectedAtc', text);
                bus.$emit('selected-atc', text);
            }
        },
        computed: {
            selectedAtc() {
                return this.$store.getters['ATC/selectedAtc']
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/colors";

    .ATC {
        font-size: 1em;
        margin-bottom: 24px;

        &:last-child {
            margin-bottom: 0;
        }

        &__title {
            color: $mainBlue;
            font-family: Verdana;
            margin-bottom: 8px;
        }

        &__list {
            color: #1D2335;
        }

        &__list-item {
            padding: 4px 12px;
            margin-bottom: 4px;
            display: block;
            border-radius: 30px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color ease .2s, color ease .2s;
            margin-left: -10px;

            &:after, &:before {
                content: '';
                transform: translateX(-50px);
                transition: transform  ease .3s;
            }

            &:last-child {
                margin-bottom: 0;
            }

            &:hover, &_selected  {
                color: $mainBlue;
                background-color: rgba(0,150,242, .1);
            }

            &_selected {
                position: relative;


                &:after, &:before {
                    position: absolute;
                    display: block;
                    transform: translateX(0);
                }
                &:after {
                    background-image: url("/img/check.png");
                    background-size: cover;
                    width: 11.5px;
                    height: 8.5px;
                    right: 9.5px;
                    top: calc(50% - 4.25px);

                }

                &:before {
                    width: 22px;
                    height: 22px;
                    background-color: $mainBlue;
                    right: 4px;
                    border-radius: 50%;
                    top: calc(50% - 11px);
                }
            }
        }
    }
</style>