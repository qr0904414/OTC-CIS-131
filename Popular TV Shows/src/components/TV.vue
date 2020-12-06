<template>
    <div class="TVTitleHolder">
        <img class="poster" :src="'//image.tmdb.org/t/p/w500/' + this.aTV.poster_path">
        <div>
            <h2 class="title">{{aTV.name}}</h2>
            <p class="description">{{aTV.overview}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"TV",
    props:["aTV"],
    methods:
    {

    }
}
</script>

<style scoped>
    .TVTitleHolder
    {
        width: 23%;
        float: left;
        margin: auto;
        text-align: center;
        padding-left: 1%;
        padding-right: 1%;
        padding-top: 2.5%;
    }
    .title
    {
        min-height: 60px;
    }
    .description
    {
        padding-bottom: 10%;
    }
    .poster
    {
        width: 100%;
    }
</style>