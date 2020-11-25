<template>
    <div v-if="isShow" class="atc-picker" ref="picker">
        <div class="step-wrapper">
            <ATCList :if-not-atc-end="true"/>
        </div>
    </div>
</template>

<script>
    import ATCList from "./ATCList";
    import bus from "../bus";

    export default {
        name: "ATCPicker",
        components: {ATCList},
        data: () => ({
            isShow: false,
            blockHide: true
        }),
        mounted() {
            addEventListener('click', this.onClick);
            bus.$on('selected-atc', () => {
                this.isShow = false
            })
        },
        beforeDestroy() {
            removeEventListener('click', this.onClick);
        },
        methods: {
            toggle() {
                this.isShow = !this.isShow
            },
            show() {
                this.isShow = true
            },
            onClick(event) {
                if (this.isShow && $(this.$refs['picker']).has(event.target).length === 0) {
                    if (this.blockHide) {
                        this.blockHide = false;
                        return;
                    }
                    this.isShow = false;
                    this.blockHide = true;
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .atc-picker {
        position: absolute;
        width: 988px;
        z-index: 2;
        filter: drop-shadow(0px 8px 40px rgba(14, 38, 100, 0.32));
        cursor: default !important;
    }
</style>