<template>
  <div class="app">
      <br>
    ค้นหา :<input type="text" v-model="search" />
    <br />
      <br />
    <table class="rwd-table">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>รูป</th>
          <th>ชื่อ</th>

          <th>รายละเอียด</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, i) in filteredItems" :key="i">
            <td>{{ i+1 }}</td>
         <td class="text-center">  <img :src ="imagerUrl + i + '.png'" alt="Avatar" style="width:100px"></td>
          <td>{{ item.name }}</td>
         
          <td><button @click="detail(i)">ดูรายละเอียด</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      search: "",
      items: [],
       imagerUrl :"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"
    };
  },
  async created() {
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const res = await this.axios.get(api);
    this.items = res.data.results;
    console.log(this.items);
  },
  methods: {
    detail(detail) {
      this.$router.push({
        name: "detail",

        params: { id: detail + 1 },
      });
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style>
.app {
    margin-bottom:20px;
}
.rwd-table {
  margin: auto;
  min-width: 300px;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: .5em;
}

.rwd-table td:last-child {
  margin-bottom: .5em;
}

.rwd-table td:before {
  content: attr(data-th) "";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: .4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: .5em 1em;

}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}




</style>