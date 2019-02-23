<template>
    <div>
        {{$route.meta.title}}
        <el-row>
            <el-col :span="24">
                <div class="grid-conent bg-purple-dark">
                    24
                </div>
            </el-col>
        </el-row>
        <el-row :span="8">
            <el-col :span="12">
                <div class="grid-conent bg-purple-dark">
                    12
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-conent bg-purple-dark">
                    12
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:"Layout",
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>

