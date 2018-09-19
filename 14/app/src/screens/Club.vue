<template>
    <div class="page">
      <AppBar title="车汇">
        <mu-button icon color="#fff" slot="right">
          <mu-icon value="reorder"></mu-icon>
        </mu-button>
      </AppBar>
      <div class="content">
        
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.page .content {
    flex: 1;
    overflow: auto;
}
</style>