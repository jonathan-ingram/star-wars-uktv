<template>
  <div class="bg-gradient-to-r from-warm-gray-700 to-warm-gray-900 pb-32 overflow-hidden">

    <page-title :title="pageTitle" :subtitle="pageSubTitle" />

  </div>
</template>

<script lang="ts">

import Vue from 'vue'

//molecules
import PageTitle from '~/components/molecules/PageTitle.vue'

export default Vue.extend({

  props: {
    pageTitle: {
      type: String,
      required: false
    },

    pageSubTitle: {
      type: String,
      required: false
    }
  },

  components: {
    PageTitle,
  }

})

</script>
