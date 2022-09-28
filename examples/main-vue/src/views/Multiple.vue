<template>
  <div style="height: 100%; width: 100%">
    <!-- <WujieVue class="item" name="test" :url="test" :sync="true"></WujieVue> -->
    <WujieVue class="item" name="test1" :url="test1" :sync="true"></WujieVue>
    <!-- <WujieVue class="item" name="test2" :url="test1" :sync="true"></WujieVue> -->
    <!-- <WujieVue class="item" name="test3" :url="test1" :sync="true"></WujieVue> -->
    <!-- <iframe width="400" height="400" src="https://cn.vuejs.org/" frameborder="0"></iframe> -->
    <!-- <WujieVue class="item" name="react16" :url="react16Url" :sync="true"></WujieVue> -->
    <!-- <WujieVue class="item" name="react17" :url="react17Url" :sync="true"></WujieVue>
    <WujieVue class="item" name="vue2" :url="vue2Url" :sync="true"></WujieVue>
    <WujieVue class="item" name="vue3" :url="vue3Url" :sync="true"></WujieVue>
    <WujieVue class="item" name="vite" :url="vite" :sync="true"></WujieVue>
    <WujieVue class="item" name="angular12" :url="angular12Url" :sync="true"></WujieVue> -->
  </div>
</template>

<script>
import hostMap from "../hostMap";

export default {
  data() {
    return {
      // test: hostMap("https://wujie-micro.github.io/doc/"),
      test1: hostMap("https://cn.vuejs.org/"),
      // react16Url: hostMap("//localhost:7600/"),
      // react17Url: hostMap("//localhost:7100/"),
      // vue2Url: hostMap("//localhost:7200/"),
      // vue3Url: hostMap("//localhost:7300/"),
      // vite: hostMap("//localhost:7500/"),
      // angular12Url: hostMap("//localhost:7400/"),
    };
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped>
.item {
  display: inline-block;
  border: 1px dashed #ccc;
  border-radius: 8px;
  width: 45%;
  height: 45%;
  margin: 20px;
  overflow: scroll;
}
</style>
