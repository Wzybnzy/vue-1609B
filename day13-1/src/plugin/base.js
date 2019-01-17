import elheader from '@/components/elheader';
import axios from 'axios';
export default {
    install(Vue){
        Vue.component('elHeader',elheader);
        Vue.prototype.$http = axios
    }
}