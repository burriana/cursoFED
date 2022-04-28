<template>
  <div v-if="currentProducto" class="edit-form">
    <h4>Product Detail</h4>
    <form>
      <div class="form-group">
        <label for="titulo">Name</label>
        <input
          type="text"
          class="form-control mb-3"
          id="titulo"
          required
          v-model="currentProducto.titulo"
          name="titulo"
        />
      </div>
      <!-- <div class="form-group">
        <label for="imagen">Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          required
          v-model="currentProducto.url"
          name="imagen"
          placeholder="http://"
        />
      </div> -->
      <div class="form-group">
        <label for="descripcion">Description</label>
        <input
          class="form-control mb-3"
          id="descripcion"
          required
          v-model="currentProducto.descripcion"
          name="descripcion"
        />
      </div>
      <div class="form-group">
        <label for="precio">Price in €</label>
        <input
          class="form-control mb-3"
          type="number"
          id="precio"
          required
          v-model="currentProducto.precio"
          name="precio"
        />
      </div>
      <div class="form-group">
        <label for="categoria">Type</label>
        <select
          class="form-select form-select-sm mb-3"
          aria-label=".form-select-sm"
          id="categoria"
          v-model="currentProducto.categoria"
        >
          <option value="One">One</option>
          <option value="Two">Two</option>
          
          
        </select>
      </div>
    </form>
    <button class="btn btn-primary m-2" @click="backToList">Back to List</button>
    <button class="btn btn-danger m-2" @click="deleteProducto">Delete</button>
    <button type="submit" class="btn btn-success m-2" @click="updateProducto">
      Update
    </button>
    <p class="mt-2">{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click in one product...</p>
  </div>
</template>

<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "ProductoApp",
  data() {
    return {
      currentProducto: null,
      message: "",
    };
  },
  methods: {
    backToList() {
      ProductoDataService.getAll()
    },
    getProducto(id) {
      ProductoDataService.get(id)
        .then((response) => {
          this.currentProducto = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateProducto() {
      ProductoDataService.update(this.currentProducto.id, this.currentProducto)
        .then((response) => {
          console.log(response.data);
          this.message = "Product update successfully! ";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteProducto() {
      ProductoDataService.delete(this.currentProducto.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "productos" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProducto(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 500px;
  margin: auto;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: start;
}
h4,
label {
  font-weight: bold;
}
</style>