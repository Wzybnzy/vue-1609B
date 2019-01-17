<template>
    <div>
        <main>
            <ul>
                <li v-for="(val,i) in shopcarlist"
                :key="i">
                    <span class="checkbox" :class="{active:checkboxarr[i].open}"
                    @click="onecheckEvent(i)"></span>
                    <img :src="'../static/'+val.image" alt="">
                    <div>
                        <h2>{{val.title}}</h2>
                        <b>{{val.price}}</b>
                    </div>
                    <div>
                        <button @click="reduce(i)">-</button>
                        <span>{{val.num}}</span>
                        <button @click="add(i)">+</button>
                    </div>
                </li>
            </ul>
            <div>
                <span class="checkbox" 
                :class="{active:allcheck}"
                @click="allcheckEvent"></span>全选 <span>￥{{sumprice}}</span>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shopcarlist:[],
            allcheck:false,
            checkboxarr:[],
            sumprice:0
        }
    },
    mounted(){
        this.shopcarlist = JSON.parse(localStorage.getItem('data')) || [];
        this.checkboxarr = this.shopcarlist.map(item=>({
            open:false,
            price:item.price * item.num
        }))
    },
    methods:{
        reduce(i){
            let n = this.shopcarlist[i].num;
            n--;
            n = n <= 1 ? 1 : n;
            this.shopcarlist[i].num = n;
            this.setdata();
        },
        add(i){
            this.shopcarlist[i].num++;
            this.setdata();
        },
        setdata(){
            localStorage.setItem('data',JSON.stringify(this.shopcarlist));
            this.shopcarlist.forEach((item,i)=>{
                this.checkboxarr[i].price = item.price * item.num;
            })
            this.sum();
            this.bus.$emit('changenum');
        },
        allcheckEvent(){
            this.allcheck = !this.allcheck;
            this.checkboxarr.forEach(item=>{
                item.open = this.allcheck;
            })
            this.sum();
        },
        onecheckEvent(i){
            this.checkboxarr[i].open = !this.checkboxarr[i].open;
            this.allcheck = this.checkboxarr.every(item=>item.open);
            this.sum();
        },
        sum(){
            this.sumprice = 0;
            this.checkboxarr.forEach(item=>{
                if(item.open){
                    this.sumprice += item.price;
                }
            })
        }
    }
}
</script>
<style scoped>
li div,.checkbox{
    display: inline-block
}
.checkbox{
    width: 20px;
    height: 20px;
    border:2px solid yellow;
    border-radius: 50%;
}
.checkbox.active{
    background: yellow;
}
img{
    width: 100px;
    height: 100px;
}
</style>



