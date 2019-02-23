<template>
    <div>
        {{$route.meta.title}}
        <!-- 标签 @close内置方法 -->
        <el-tag 
            :key="tag"
            v-for="tag in dynamicTags"
            closable  
            :disable-transitions="false"
            @close="handleClose(tag)"
        >
         {{tag}}
        </el-tag>
        <!-- 标签内容 -->
        <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">
            + New Tag
        </el-button>

        <!-- 显示隐藏 -->
        <div 
            v-if="xianshi"
            @click="hello"
        >
            hello
        </div>
        <div
            v-else
            @click="word"
        >
            word
        </div>
    </div>
</template>
<script>
export default {
    name:"Tags",
    data(){
        return {
            dynamicTags:["tags1","tags2","tags3"],
            inputVisible:false,
            inputValue:'',
            xianshi:false,
        }
    },
     watch:{
        inputValue(val){ //v-model的value
            console.log(val);
        }
    },
    methods:{
        // 删除标签
        handleClose(tag){
            // console.log(tag);//标签
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag),1);
        },
        //显示input
        handleInputConfirm(){
            let inputValue = this.inputValue; //获取到input的value值
            if(inputValue){
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false; //点击隐藏
            this.inputValue = "";
        },
        // 显示button
        showInput(){
            this.inputVisible = true; //点击显示
            this.$nextTick(() =>{
                this.$refs.saveTagInput.$refs.input.focus();
            })
        },

        // 显示隐藏
        hello(){
            this.xianshi = false;
        },
        word(){
            this.xianshi = true;  
        }
    }
}
</script>
<style scoped>

</style>

