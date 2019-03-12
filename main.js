import Vue from 'vue';
import '../css/index.css';
//import img from '../assets/a.jpg';
new Vue({    
  el: '#app',    
  data: {        
     msg: 'hello',
  }
});
new Vue({    
  el: '#img',    
  data: {        
     imgUrl: '../../static/a.png'
  }
})



//alert(img);
