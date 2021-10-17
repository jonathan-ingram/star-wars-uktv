<template>
  <div>

    <page-header
      :pageTitle="pageTitle"
      :pageSubTitle="pageSubTitle"
      class="animation-tv-reveal"
    />

    <main role="main" class="animation-grow relative -mt-32 pb-8">

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <div
          class="grid grid-cols-1 gap-4 items-start lg:grid-cols-6 lg:gap-8"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions text"
        >

          <div class="grid grid-cols-1 gap-4 lg:col-span-4">

            <panel-user-input
              :categories="categories"
              :loading="loading"
              @refresh-search-results="refreshSearchResults()"
              :resultsOrder="resultsOrder"
            />

            <template v-if="errorMessage">
              <p class="text-white mt-8">
                Sorry an error occured, please try again later.
              </p>
            </template>

          </div>

          <template v-if="displaySearchData === 'films'">
            <section v-for="(film, index) in searchData.films" class="lg:col-span-3">

              <search-result
                :index="index"
                :title="film.title"
                :excerpt="film.opening_crawl"
                :fields="[
                  {
                    name: 'Episode Number',
                    data: film.episode_id
                  },
                  {
                    name: 'Release Date',
                    data: film.release_date
                  },
                  {
                    name: 'Director',
                    data: film.director
                  },
                  {
                    name: 'Producer',
                    data: film.producer
                  }
                ]"
              />

            </section>
          </template>

          <template v-if="displaySearchData === 'starships'">
            <section v-for="(starship, index) in searchData.starships" class="lg:col-span-3">

              <search-result
                :index="index"
                :title="starship.name"
                :excerpt="starship.manufacturer"
                :fields="[
                  {
                    name: 'Model',
                    data: starship.model
                  },
                  {
                    name: 'Cost in Credits',
                    data: starship.cost_in_credits
                  },
                  {
                    name: 'Length',
                    data: starship.length
                  },
                  {
                    name: 'Cargo Capacity',
                    data: starship.cargo_capacity
                  },
                  {
                    name: 'Crew',
                    data: starship.crew
                  },
                  {
                    name: 'Passengers',
                    data: starship.passengers
                  }
                ]"
              />

            </section>
          </template>

          <template v-if="displaySearchData === 'vehicles'">
            <section v-for="(vehicle, index) in searchData.vehicles" class="lg:col-span-3">

              <search-result
                :index="index"
                :title="vehicle.name"
                :excerpt="vehicle.manufacturer"
                :fields="[
                  {
                    name: 'Model',
                    data: vehicle.model
                  },
                  {
                    name: 'Cost in Credits',
                    data: vehicle.cost_in_credits
                  },
                  {
                    name: 'Length',
                    data: vehicle.length
                  },
                  {
                    name: 'Cargo Capacity',
                    data: vehicle.cargo_capacity
                  },
                  {
                    name: 'Crew',
                    data: vehicle.crew
                  },
                  {
                    name: 'Passengers',
                    data: vehicle.passengers
                  }
                ]"
              />

            </section>
          </template>

        </div>

      </div>

    </main>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

// organisms
import PageHeader from '~/components/organisms/PageHeader.vue'
import PanelUserInput from '~/components/organisms/PanelUserInput.vue'
import SearchResult from '~/components/organisms/SearchResult.vue'

//types
import { FieldTitle, InputCategory, InputOrder } from '~/typescript/types.ts'

export default Vue.extend({

  data: function (): any {
    return {
      categories: [
        {
          slug: 'films',
          title: 'Films'
        },
        {
          slug: 'starships',
          title: 'Starships'
        },
        {
          slug: 'vehicles',
          title: 'Vehicles'
        }
      ],
      displaySearchData: null,
      errorMessage: false,
      loading: false,
      pageTitle: 'Star Wars',
      pageSubTitle: 'UKTV Coding Test',
      resultsOrder: [
        {
          slug: 'asc',
          title: 'Ascending'
        },
        {
          slug: 'desc',
          title: 'Descending'
        }
      ],
      searchData: {
        films: [],
        starships: [],
        vehicles: []
      },
      apiUrl: 'https://swapi.dev/api/'
    }
  },

  layout: 'default',

  components: {
    PageHeader,
    PanelUserInput,
    SearchResult
  },

  computed: {
    searchFormCategory (): InputCategory {
      return this.$store.getters['search/getSearchFormCategory']
    },

    searchFormOrder (): InputOrder {
      return this.$store.getters['search/getSearchFormOrder']
    }
  },

  methods: {
    refreshSearchResults (): void {

      this.errorMessage = false
      this.loading = true
      this.displaySearchData = null

      if (this.searchData[this.searchFormCategory].length > 0) {
        this.sortData()
        return
      }

      // only call API if our data collection is empty

    	const apiRequest = new Promise((resolve, reject) => {

        let apiData: any = []

        const getSwapiData = (apiUrl: string) => {
    			this.$axios.$get(apiUrl).then((data: any) => {

            apiData = apiData.concat(data.results)

            data.next ? getSwapiData(data.next) : allDataCollected(apiData)

    			}, (err: any) => {
            this.loading = false
            this.errorMessage = true
    				reject(err.data)
    			})
    		}

    		const allDataCollected = (data: any) => {
          this.searchData[this.searchFormCategory] = data // collect data to re-use again without re-calling API
          this.sortData()
    			resolve(true)
    		}

    		getSwapiData(this.apiUrl + this.searchFormCategory + '/')
    	})

    },

    sortData (): void {
      const fieldToSort: FieldTitle = this.searchFormCategory === 'films' ? 'title' : 'name'

      if (this.searchFormOrder === 'asc') {
        this.searchData[this.searchFormCategory].sort((a: any, b: any) => a[fieldToSort].localeCompare(b[fieldToSort]))
      }
      else {
        this.searchData[this.searchFormCategory].sort((a: any, b: any) => b[fieldToSort].localeCompare(a[fieldToSort]))
      }

      this.loading = false
      this.displaySearchData = this.searchFormCategory // update variable to display the correct search results
    }
  }

})

</script>
