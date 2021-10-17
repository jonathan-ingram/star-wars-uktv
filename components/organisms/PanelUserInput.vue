<template>
  <section aria-labelledby="user-input-title">
    <div class="rounded-lg bg-warm-gray-600 overflow-hidden shadow-white p-6 border border-warm-gray-500">

      <h2 class="sr-only" id="user-input-title">Search Star Wars Data</h2>

      <form v-on:submit.prevent="$emit('refresh-search-results')">

        <div class="grid grid-cols-6 gap-6">

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">

            <input-select
              :label="'Category'"
              v-model.trim="searchFormCategory"
              :id="'category'"
              :required="true"
            >

              <template v-slot:options>
                <option v-for="category in categories" :value="category.slug">
                  {{ category.title }}
                </option>
              </template>

            </input-select>

          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">

            <input-select
              :label="'Order'"
              v-model.trim="searchFormOrder"
              :id="'order'"
              :required="true"
            >

              <template v-slot:options>
                <option v-for="order in resultsOrder" :value="order.slug">
                  {{ order.title }}
                </option>
              </template>

            </input-select>

          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col justify-end">

            <button-search
              :loading="loading"
              :title="'Search'"
              :titleLoading="'Searching…'"
            />

          </div>

        </div>

      </form>

    </div>
  </section>
</template>

<script lang="ts">

import Vue, { PropOptions } from 'vue'

//atoms
import ButtonSearch from '~/components/atoms/buttons/Search.vue'
import InputSelect from '~/components/atoms/inputs/Select.vue'

//interfaces
import { InputSelectInterface } from '~/typescript/interfaces.ts'

//types
import { InputCategory, InputOrder } from '~/typescript/types.ts'

export default Vue.extend({

  props: {
    categories: {
      type: Array,
      required: true
    } as PropOptions<InputSelectInterface[]>,

    loading: {
      type: Boolean,
      required: false,
      default: false
    },

    resultsOrder: {
      type: Array,
      required: true
    } as PropOptions<InputSelectInterface[]>
  },

  components: {
    ButtonSearch,
    InputSelect
  },

  computed: {
    searchFormCategory: {
      get (): InputCategory {
        return this.$store.getters['search/getSearchFormCategory']
      },
      set (value: InputCategory): void {
        this.$store.dispatch('search/updateSearchFormCategory', {
          payload: {
            category: value
          }
        })
      }
    },

    searchFormOrder: {
      get (): InputOrder {
        return this.$store.getters['search/getSearchFormOrder']
      },
      set (value: InputOrder): void {
        this.$store.dispatch('search/updateSearchFormOrder', {
          payload: {
            order: value
          }
        })
      }
    }
  }

})

</script>
