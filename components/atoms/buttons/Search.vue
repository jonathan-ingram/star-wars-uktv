<template>

  <button
    type="submit"
    :aria-disabled="loading ? 'true' : undefined"
    :class="{ 'cursor-wait': loading }"
    class="relative w-full flex justify-center py-2 px-4 border-2 border-green-400 rounded-md shadow-sm sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-700 ring-0 ring-offset-2 ring-offset-emerald-800 transition-colors duration-150 ease-in-out"
  >
    <span class="absolute left-4 inset-y-0 flex items-center">
      <icon-search v-if="!loading" class="w-5 h-5 text-green-400" />
      <icon-loading v-if="loading" class="loader w-5 h-5 text-green-400" />
    </span>

    {{ loading ? titleLoading : title }}

    <span aria-live="assertive" aria-atomic="true" aria-relevant="additions text" class="sr-only">
      {{ loading ? 'please wait' : '' }}
    </span>
  </button>

</template>

<script lang="ts">

import Vue from 'vue'

import IconSearch from '~/components/atoms/icons/Search.vue'
import IconLoading from '~/components/atoms/icons/Loading.vue'

export default Vue.extend({

  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false
    },

    title: {
      type: String,
      required: true
    },

    titleLoading: {
      type: String,
      required: true
    }
  },

  components: {
    IconSearch,
    IconLoading
  }

})

</script>
