<template>
    <div>
        <div ref="msgDiv">{{msg}} {{$route.meta.title}}</div>
        <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
        <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
        <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
        <button @click="changeMsg">
            Change the Message
        </button>
    </div>
</template>
<script>
export default {
    name:"NextTick",
    data(){
        return {
            msg: 'Hello Vue.',
            msg1: '11111',
            msg2: '2222',
            msg3: '3333'
        }
    },
    methods:{
        changeMsg() {
            this.msg = "Hello world."
            this.msg1 = this.$refs.msgDiv.innerHTML
            this.$nextTick(() => {
            this.msg2 = this.$refs.msgDiv.innerHTML //获取的是dom节点更新的数据
            })
            this.msg3 = this.$refs.msgDiv.innerHTML
        }
    }
}
</script>
<style scoped>

</style>


