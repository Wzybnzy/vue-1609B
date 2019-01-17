export default {
    install(Vue){ //插件
        Vue.prototype.bus = new Vue();
    }
}