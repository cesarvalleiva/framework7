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


  <!-- Right panel with reveal effect-->
  <f7-panel right reveal theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Right Panel"></f7-navbar>
        <f7-block>Right panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>

  </f7-app>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { f7, f7ready } from 'framework7-vue';


  import routes from '../js/routes.js';
  import store from '../js/store';

  export default {
    setup() {

      // Framework7 Parameters
      const f7params = {
        name: 'framework7', // App name
        theme: 'auto', // Automatic theme detection

        // App store
        store: store,
        // App routes
        routes: routes,
      };
      
      onMounted(() => {
        f7ready(() => {


          // Call F7 APIs here
        });
      });

      return {
        f7params
      }
    }
  }
</script>