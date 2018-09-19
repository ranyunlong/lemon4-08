<template>
    <div class="tab-bar">
        <div 
            class="tab-bar-item" 
            v-for="(item, index) in data" 
            :key="index"
            :class="{
                active: selectIndex === index
            }" 
            @click="click($event, item, index)">
            <mu-icon :value="item.icon"></mu-icon>
            <span class="label">
                {{item.label}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    },
    data() {
        return {
            selectIndex: 0
        }
    },
    methods: {
        click(event,item, index) {
            this.selectIndex = index
            this.$emit('select',event, item)
            this.$router.push(item.path)
        }
    }
};
</script>

<style>

.tab-bar {
    height: 90px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ddd;
    font-size: 22px;
}
.tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tab-bar-item.active {
    color: #ff88bb;
}

.tab-bar-item .mu-icon {
    font-size: 45px;
}
</style>