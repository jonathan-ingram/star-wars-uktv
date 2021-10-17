<template>

  <div :aria-labelledby="'search-result-' + index" class="bg-warm-gray-900 shadow rounded-lg border border-warm-gray-500">

    <div class="px-4 py-5 sm:px-6">

      <h2 :id="'search-result-' + index" class="text-lg leading-6 font-medium text-warm-gray-100">
        {{ title }}
      </h2>

      <p class="mt-1 text-sm text-warm-gray-500">
        {{ excerpt }}
      </p>

    </div>

    <div class="bg-warm-gray-800 border-t border-warm-gray-500 px-4 py-5 sm:px-6 rounded-b-lg">

      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

        <div v-for="field in fields" class="sm:col-span-1">

          <dt class="text-sm font-medium text-warm-gray-400">
            {{ field.name }}
          </dt>

          <dd class="mt-1 text-sm text-warm-gray-100">
            {{ field.data }}
          </dd>

        </div>

      </dl>
    </div>
  </div>
</template>

<script lang="ts">

import Vue, { PropOptions } from 'vue'

//interfaces
import { SearchResultFieldInterface } from '~/typescript/interfaces.ts'

export default Vue.extend({

  props: {
    excerpt: {
      type: String,
      required: true
    },

    fields: {
      type: Array,
      required: true
    } as PropOptions<SearchResultFieldInterface[]>,

    index: {
      type: Number,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  }

})

</script>
