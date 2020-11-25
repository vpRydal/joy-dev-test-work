<template>
    <div class="atc">
        <span v-if="!atcList.length">Загрузка...</span>
        <span v-if="atcList.length && !ifNotAtcEnd" class="atc__if-not-atc" @click="$store.dispatch('ATC/setSelectedAtc', '')">У меня нет ATC</span>
        <ATC v-for="(atc, index) in atcList"
             :key="index"
             :title="atc.title"
             :items="atc.items"
        />
        <span v-if="atcList.length && ifNotAtcEnd" class="atc__if-not-atc" @click="$store.dispatch('ATC/setSelectedAtc', '')">У меня нет ATC</span>
    </div>
</template>

<script>
    import ATC from './ATC'
    import atc from '../../API/ATC'

    export default {
        name: "ATCList",
        components: {ATC},
        props: {
            ifNotAtcEnd: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            atcList: []
        }),
        mounted() {
            setTimeout(() => {
                this.atcList = atc
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">
    @import '../../scss/colors';

    .atc {
        columns: 4 auto;
        column-fill: auto;
        margin-bottom: 30px;
        break-after: avoid-page;

        &__if-not-atc {
            color: $mainRed;
            display: block;
            margin-bottom: 24px;
            font-weight: 600;
            cursor: pointer;
        }
    }
</style>