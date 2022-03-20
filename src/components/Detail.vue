<template>
  <div class="app">
  
    <br />
   <div class="card">

 
     <img :src ="imagerUrl + items.id + '.png'" alt="Avatar" style="width:200px">
    <p>Id : {{items.id}}</p>
    <p>Name : {{items.name}}</p>
    <p>น้ำหนัก : {{items.weight}} kg</p>
    <p>ส่วนสูง : {{items.height /10 }} m </p>
  
</div>
    <br>
    <br>
    <router-link to="/home" class ="btn third" >กลับหน้าหลัก</router-link>
  </div>

</template>


<script>
export default {
  data() {
    return {
      search: "",
      items: {},
      imagerUrl :"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
    };
  },
  async created() {
    const api = "https://pokeapi.co/api/v2/pokemon/"+this.$route.params.id +"/";
    const res = await this.axios.get(api);
    console.log(res);
    this.items = res.data;
  
  },
  methods: {
  },
  computed: {

  },
};
</script>

<style lang="scss" scoped>


$blue: #3498db;
$red : red;
.card {

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}


.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


.btn {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $red;
  border-radius: 0.6em;
  color: $red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover{
      color :#000;
  }
  &:focus {
    color: #eee;
    outline: 0;
  }
}

.container {
  padding: 2px 16px;
}
.third {
  border-color: $blue;
  color: #fff;
  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
  }
}
</style>