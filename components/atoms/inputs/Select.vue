<template>
  <div>

    <label :for="id" class="block text-sm font-medium leading-5 text-gray-300">
      {{ label }}
    </label>

    <select
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-on:change="$emit('option-updated')"
      :id="id"
      :required="required ? 'required' : undefined"
      :aria-required="required ? true : undefined"
      :aria-invalid="errorId ? 'true': 'false'"
      :aria-describedby="errorId ? errorId : undefined"
      :autocomplete="autocomplete"
      class="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-green focus:border-green-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
    >

      <slot name="options"></slot>

    </select>

  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({

  props: {
    autocomplete: {
      type: String,
      required: false,
      default: 'off'
    },

    errorId: {
      type: String,
      required: false,
      default: null
    },

    id: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    },

    required: {
      type: Boolean,
      required: false,
      default: false
    },

    value: {
      type: String
    }
  }

})

</script>
