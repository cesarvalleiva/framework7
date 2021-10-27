<template>
  <f7-app v-bind="f7params" >

  <!-- Left panel with cover effect-->
  <f7-panel left cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Contenido del left panel</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
  import routes from '../js/routes.js';

  export default {
  data() {
    return {
      f7params: {
        name: 'framework7',
        theme: 'auto',
        routes
      },
    }
  }
}
</script>