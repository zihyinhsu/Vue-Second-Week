import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js'; 

const url = 'https://vue3-course-api.hexschool.io/v2' ;
const path = 'zy123';

const products =[];

const app = createApp({
  data(){
    return{
      temp:{},
      products: []
    }
  },
methods:{
  getData(){
    axios.get(`${url}/api/${path}/admin/products`)
      .then((res)=>{
        this.products = res.data.products;
      }).catch((error)=>{
        alert(error.data)
       })
      
  },

  checkLogin(){

    // 取得 Token（Token 僅需要設定一次）
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)zyToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    // header的夾帶
    axios.defaults.headers.common['Authorization'] = token;

    axios.post(`${url}/api/user/check`)
    .then((res)=>{
      this.getData();
      alert(`確認登入!`)
      
    }).catch((error)=>{
      alert(`確認登入失敗!`)

      //轉址到登入頁
      window.location = 'login.html';
    })
  }
 
},
//生命週期
mounted(){
  this.products = products;

  this.checkLogin();

}
})

app.mount('#app')

