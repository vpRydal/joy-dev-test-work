<template>
    <div class="flex-wrapper atc-functions">
        <Functions class="atc-functions__supported-functions" :functions="supportedFunctions" title="Поддерживаемые функции:"/>
        <Functions class="atc-functions__unsupported-functions unsupported" :functions="unsupportedFunctions" title="Неподдерживаемые функции:"/>
    </div>

</template>

<script>
    import Functions from "./Functions";
    export default {
        name: "ATCFunctions",
        components: {Functions},
        data: () =>({
        }),
        props: {
            supportedFunctions: {
                type: Array,
                required: true
            },
            unsupportedFunctions: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .atc-functions {
        &__unsupported-functions, &__supported-functions{
            flex: 1 1 auto;
        }
    }
</style>