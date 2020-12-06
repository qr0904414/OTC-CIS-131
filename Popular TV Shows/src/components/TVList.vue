<template>
    <div>
        <p v-for="tvItem in tvList" :key=tvItem.id>
            <TV :aTV="tvItem"/> 
        </p>
    </div>
</template>

<script>
import TV from './TV.vue';

export default {
    name: "TVList",
    props:['tvList'],
    components:
    {
        TV
    }
}
</script>

