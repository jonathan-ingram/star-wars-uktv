<template>
  <header role="banner" class="relative py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h1 class="text-3xl font-bold text-white">
        {{ title }}
      </h1>

      <h1 class="text-base font-bold text-white opacity-50">
        {{ subtitle }}
      </h1>

    </div>
  </header>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({

  props: {
    title: {
      type: String,
      required: false
    },

    subtitle: {
      type: String,
      required: false
    }
  }

})

</script>
