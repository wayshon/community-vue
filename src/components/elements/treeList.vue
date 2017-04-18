<template>
    <div class="treeList">
        <div @click="showTreeTable" class="no-border-top">
            <div class="weui_cells " style="background:#4fd195; color: #fff;">
                <div class="weui_cell">
                    <div class="weui_cell_bd weui_cell_primary"> {{treeData.month}} </div>
                    <div class="weui_cell_ft"><i class="icon iconfont" style="color:#fff;font-size:1.2rem;">{{ showTree ? '&#xe636;': '&#xe635;' }}</i></div>
                </div>
            </div>
        </div>
        <div class="table-box">
            <table ref="treeListTable" :class="[{'tree-transparent-show': showTree && !isInit},{'tree-transparent-hide': !showTree && !isInit}]" class="tableOne">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>昵称</th>
                        <th>箱数</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(obj, index) in treeData.data" @click="goGivingDetail(obj.data)">
                        <td v-if="showSpan(obj, index)" :rowspan="obj.length">{{obj.day.split('-')[2]}}<br>{{getWeek(obj.data.date)}}</td>
                        <td>{{obj.data.nickName}}</td>
                        <td>{{obj.data.nickName}}</td>
                        <td>{{obj.data.nickName}}</td>
                    </tr>
                    <!--<tr>
                        <td rowspan="3">29<br>周日</td>
                        <td>麦克萝卜</td>
                        <td>2</td>
                        <td>已领</td>
                    </tr>
                    <tr>
                        <td>麦克萝卜</td>
                        <td>2</td>
                        <td>已领</td>
                    </tr>
                    <tr>
                        <td>麦克萝卜</td>
                        <td>2</td>
                        <td>已领</td>
                    </tr>
                    <tr>
                        <td rowspan="2">29<br>
                            周日</td>
                        <td>麦克萝卜</td>
                        <td>2</td>
                        <td>已领</td>
                    </tr>
                    <tr>
                        <td>麦克萝卜</td>
                        <td>2</td>
                        <td>已领</td>
                    </tr>-->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            showTree: false,
            isInit: true,
            spanNum: 0
        }
    },
    methods: {
        showTreeTable() {
            if (this.showTree) {
                let height = this.$refs.treeListTable.offsetHeight;
                this.$refs.treeListTable.style.marginTop = `-${height}px`;
                this.showTree = false;
                this.spanNum = 0;
            } else {
                this.$refs.treeListTable.style.marginTop = '0';
                this.showTree = true;
                this.spanNum = 0;
            }
        },
        goGivingDetail(v) {
            this.$emit('go-giving-detail', v);
        },
        showSpan(obj, index) {
            // if (index == 0) {
            //     return true;
            // } else if (index > 0) {
            //     let item = this.treeData.data[index - 1];
            //     if (obj.day !== item.day) {
            //         if (item.length == index) {
            //             return true;
            //         } else {
            //             return false;
            //         }
            //     } else {
            //         return false;
            //     }
            // } else {
            //     return false;
            // }

            if (index == 0) {
                return true;
            } else if (index > 0) {
                let sum = 0;
                for (let i = 1; i < index + 1; i++) {
                    let obj = this.treeData.data[i];
                    let item = this.treeData.data[i - 1];
                    if (obj.day !== item.day) {
                        sum += item.length;
                    }
                }
                // this.treeData.data.forEach((v, i, array) => {
                //     if (i > 0) {
                //         let item = array[index - 1];
                //         if (v.day !== item.day) {
                //             sum += item.length;
                //         }
                //     }
                // })
                if (index == sum) {
                    return true
                } else {
                    return false
                }



                // let item = this.treeData.data[index - 1];
                // if (obj.day !== item.day) {
                //     if (item.length == index) {
                //         return true;
                //     } else {
                //         return false;
                //     }
                // } else {
                //     return false;
                // }
            } else {
                return false;
            }
        },
        getWeek(v) {
            let date = parseInt(v);
            let time = new Date(date);
            let week = moment(time).format('dddd');
            let we;
            switch (week) {
                case 'Sunday':
                    we = '周日';
                    break;
                case 'Monday':
                    we = '周一';
                    break;
                case 'Tuesday':
                    we = '周二';
                    break;
                case 'Wednesday':
                    we = '周三';
                    break;
                case 'Thursday':
                    we = '周四';
                    break;
                case 'Friday':
                    we = '周五';
                    break;
                case 'Saturday':
                    we = '周六';
                    break;
                default:
            }
            return we;
        }
    },
    props: {
        treeData: {
            type: Object,
            required: true
        },
    },
    computed: {
        
    },
    mounted() {
        let height = this.$refs.treeListTable.offsetHeight;
        this.$refs.treeListTable.style.marginTop = `-${height}px`;
        // this.isInit = false;
        //这里用异步执行，不然动画效果还是会加上去
        setTimeout(() => {
            this.isInit = false;
        })
    }
}
</script>
<style lang="less">
    .treeList {
        .table-box {
            overflow: hidden;
            margin-top: 0;
        }
        .tree-transparent-show {
            transition: all .4s;
        }
        .tree-transparent-hide {
            // margin-top: -300px;
            transition: all .4s;
        }
    }
  
</style>