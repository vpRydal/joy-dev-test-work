<template>
    <div class="step-wrapper">
        <div class="step-2">
            <ul class="step-2__info info">
                <li class="info__item">
                    <span class="info__name">Модель АТС:</span>
                    <span class="info__value step-2_ATCPicker-trigger" @click="onShowPickATC">{{ selectedAtc }}
                        <ATCPicker ref="ATCPicker" class="step-2__ATCPicker"/></span>
                </li>
                <li class="info__item">
                    <span class="info__name">Программа 1С:</span>
                    <span class="info__value">Управление нашей фирмой</span>
                </li>
                <li class="info__item">
                    <span class="info__name">Подходящие решения:</span>
                    <span class="info__value">Интеграция с телефонией</span>
                </li>
            </ul>
        </div>
        <div class="step-2__integration">
            Интеграция с телефонией
        </div>
        <ATCFunctions class="step-2__functions" :unsupportedFunctions="unsupportedFunctions" :supportedFunctions="supportedFunctions"/>
        <span class="step-2__line"></span>
        <div class="step-2__instruction instruction">
            <h3 class="instruction__title">Ссылки на инструкции:</h3>
            <ul class="instruction__links">
                <li class="instruction__item"><a href="" class="instruction__link link">Инструкция к АТС Mango</a></li>
                <li class="instruction__item" ><a href="" class="instruction__link link">Инструкция к АТС Яндекс</a></li>
                <li class="instruction__item"><a href="" class="instruction__link link">Инструкция к АТС iToolabs</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ATC from "../mixins/ATC";
    import ATCFunctions from "../components/ATCFunctions/ATCFunctions";
    import ATCPicker from "../components/ATCPicker";
    import atcInfo from '../../API/ATCInfo'

    export default {
        name: "Step2",
        components: {ATCPicker, ATCFunctions},
        mixins: [ATC],
        data: () => ({
            unsupportedFunctions: [
            ],
            supportedFunctions: [
            ]
        }),
        mounted() {
            setTimeout(() => {
                this.unsupportedFunctions = atcInfo.unsupportedFunctions;
                this.supportedFunctions = atcInfo.supportedFunctions;
            }, 1000)
        },
        methods: {
            onShowPickATC() {
                this.$refs['ATCPicker'].show();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/colors";

    .step-2 {
        &__info {
            margin-bottom: 26px;
        }

        &__integration {
            background-color: #F2F2F2;
            color: $mainGray;
            padding: 12px 0;
            text-align: center;
            font-weight: 600;
            border-radius: 5px;
            margin-bottom: 26px;
        }

        &__functions {
            margin-bottom: 40px;
        }

        &__line {
            display: block;
            width: 100%;
            height: 1px;
            background-color: $mainTextColor;

            margin-bottom: 25px;
        }

        &_ATCPicker-trigger {
            color: $mainBlue !important;
            position: relative;
            font-weight: 600;
            cursor: pointer;
        }
        &__ATCPicker {
            left:-20px;
            top: 35px;
            cursor: pointer;
            &:after {
                content: '';
                position: absolute;
                display: block;
                top: -9px;
                left: 35px;
                border-top: 15px solid white;
                border-bottom: 15px solid transparent;
                border-left: 15px solid transparent;
                transform: rotate(-45deg);
            }
        }
    }

    .instruction {
        &__title {
            margin-bottom: 18px;
            font-size: 14px;
            color: #677687;
        }
        &__item {
            margin-bottom: 12px;

            &:last-child {
                margin-bottom: 0;
            }
        }
        &__link {
            position: relative;
            padding-left: 20px;
            color: $mainLinksColor;
            font-weight: 600;


            &:before {
                content: '';
                position: absolute;
                display: block;
                width: 10px;
                height: 10px;
                background-image: url("/img/union.png");
                background-size: cover;
                left: 0;
                top: 6px;
            }
        }

    }

    .info {
        &__item {
            color: #677687;
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__value {
            color: #1D2335;
            margin-left: 10px;
        }
    }
</style>