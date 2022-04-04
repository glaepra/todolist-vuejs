<template>
    <div class="container-liste">
        <h2 class="jour">{{ jour }}</h2>
        <div class="date">{{ jourDate }}</div>
    </div>
</template>

<script>
    export default {
        name: 'AppJour',
        props: {
            jour: {
                type: String,
                default: "Jour",
            },
            jourDate: {
                type: Number,
                default: 0,
            },
        },
    }
</script>

<style scoped>
.container-liste{
    width: 100%;
    padding: 0px;
    border-radius: 10px;
    background: #fff;
    margin-top: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 5px 25px rgb(0 0 0 / 10%);
}
.jour{
    font-size: 11px;
    font-weight: 300;
    text-align: center;
}
.date{
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    margin-top: 10px;
}
</style>