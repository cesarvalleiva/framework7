<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>framework7</f7-nav-title>
      <f7-nav-title-large>framework7</f7-nav-title-large>
    </f7-navbar>
    <div class="contenedor">
      <f7-button fill @click="test">Ejecutar function</f7-button>
      <p>{{mensaje}}</p>
    </div>
  </f7-page>
</template>

<script>

export default {
    data() {
      return {
        mensaje: 'Texto'
      }
    },
    methods: {
      test() {
        const test = this.$firebase.functions().httpsCallable('test');
        test({name: "Juan"}).then(result => {
          this.mensaje = result.data;
        })
      },
    }
}
</script>

<style scoped>
.contenedor {
  width: 200px;
  margin: 50px 20px;
}

.contenedor p {
  margin-top: 20px;
}
</style>