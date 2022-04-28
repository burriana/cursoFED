<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3 me-2">
        <input
          type="text"
          class="form-control me-4"
          placeholder="Search by name"
          v-model="titulo"
          @keyup.enter="searchTitle"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search 🔍
          </button>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="col-md-6">
        <h4>Products List</h4>
        <ul class="list-group">
          <li
            class="list-group-item d-flex align-items-center"
            :class="{ active: index == currentIndex }"
            v-for="(producto, index) in productos"
            :key="index"
            @click="setActiveProducto(producto, index)"
          >
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">

            <img width="300" height="100" :src="producto.url" :alt="producto.titulo" :title="producto.titulo">
          </div>
              <div class="flex-grow-1 ms-3">
                <!-- {{ producto.titulo }} -->
              </div>
            </div>
          </li>
        </ul>
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllProductos">
          Delete All
        </button>
      </div>
      <div class="col-md-6 mx-4 ">
        <h4>Product Description</h4>
        <div v-if="currentProducto">
          <div class="pb-2">
            <label><strong>Name:</strong></label> {{ currentProducto.titulo }}
          </div>
          <div class="pb-2">
            <label><strong>Description:</strong></label>
            {{ currentProducto.descripcion }}
          </div>
          <div class="pb-2">
            <label><strong>Price:</strong></label> {{ currentProducto.precio }}
          </div>
          <div class="pb-2">
            <label><strong>Type:</strong></label> {{ currentProducto.type }}
          </div>
          <a class="btn btn-warning " :href="'/productos/' + currentProducto.id">
            Edit ✏️
          </a>
        </div>
        <div v-else>
          <br />
          <p>Click in one of the products in the list...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "productos-list",
  data() {
    return {
      productos: [],
      currentProducto: null,
      currentIndex: -1,
      titulo: "",
      url:""
    };
  },
  methods: {
    retrieveProductos() {
      ProductoDataService.getAll()
        .then((response) => {
          this.productos = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProductos();
      this.currentProducto = null;
      this.currentIndex = -1;
    },
    setActiveProducto(producto, index) {
      this.currentProducto = producto;
      this.currentIndex = index;
    },
    removeAllProductos() {
      ProductoDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      ProductoDataService.findByTitle(this.titulo)
        .then((response) => {
          this.productos = response.data;
          console.log(response.data);
          this.titulo = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveProductos();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.fixed {
  position: fixed;
  right: 0;
  z-index: 1030;
  top: 110px;
}
.info h4 {
  font-weight: bold;
  border-bottom:1px solid #999;
  /* border:1px solid black; */
  padding:.5em 1.5em;
}
.info{
  display:flex;
}

</style>