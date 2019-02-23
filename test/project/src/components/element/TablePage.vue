<template>
    <div>
        {{$route.meta.title}}
        <el-table
            :data="tableData"
            ref="table"
            @selection-cange="handleSelectionCange"
        >
            <el-table-column type="selection"></el-table-column>
            <el-table-column prop="personName" label="客户名称"></el-table-column>
            <el-table-column prop="telpone" label="手机号"></el-table-column>
            <el-table-column prop="idNo" label="身份证号"></el-table-column>
            <el-table-column prop="linkType" label="客户身份"></el-table-column>
        </el-table>
        <!-- 页码 -->
        <el-pagination 
            :page-size="pagination.pageSize"
            @current-change="currentChange"
            :current-page="pagination.pageNumber"
            :page-sizes="pagination.pageSizes"
            :total="pagination.totalRows"
            :layout="pagination.layout"
            @size-change="sizeChange"
        >
        </el-pagination>
        <hr />

        <div :aa="test" @page="page">
            dom绑定aa这个变量
        </div>
    </div>
</template>
<script>
export default {
    name:"TablePage",
    data(){
        return {
            multipleSelectionAll: [], // 所有选中的数据包含跨页数据
            multipleSelection: [], // 当前页选中的数据
            idKey:"personId",
            tableData:[],
            pagination:{
                totalRows:0,//总条数
                pageSize:10,//每显示数量
                pageSizes:[10,20,50], //每页显示的多少条
                pageNumber:1,//初始页
                layout:"total, sizes, prev, pager, next, jumper" //提供的是页面的元素
            },
            test:"123123"
        }
    },
    methods:{
        // 模拟数据 无页码显示第一页数据
        queryData (){
            this.tableData = []
            this.pagination.totalRows = 100
            // 页码 - 1 * 每页显示数量 + 1 ？？？ 
            let i = (this.pagination.pageNumber-1) * this.pagination.pageSize + 1;
                // 页码 * 每页显示数量 == 总条数
            let max = this.pagination.pageNumber * this.pagination.pageSize;
            for(; i <= max; i++){
                this.tableData.push({personId:i, personName:'xiaoming'+ i, telpone:"1550000"+i, idNo:i + '123123',linkType:'yezhu'})
            }
            // end => 模拟分页初始化数据  
        },

        handleSelectionCange(){},

        // 页码改变数据改变 根据页码进行请求数据
        currentChange(val){
            // 页码数据
            console.log(val + "current");
            this.pagination.pageNumber = val;
            this.queryData();
        },

        // 表格数据
        sizeChange(val){
            console.log(val + "size");
            this.pagination.pageNumber = val;
            this.queryData();
        },
        page(val){
            console.log(val + "123123")
        }
    },
    mounted(){
        // 初始化渲染
        this.$nextTick(function (){
            // 初始化渲染数据
            this.pagination.pageNumber = 1;
            this.queryData();
        })
    }
}
</script>
<style scoped>

</style>


