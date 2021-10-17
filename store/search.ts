
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

const getDefaultState = (): any => {
  return {
    category: 'films',
    order: 'asc'
  }
}

// initial state
export const state = () => getDefaultState()

export type SearchState = ReturnType<typeof state>

export const getters: GetterTree<SearchState, RootState> = {
  getSearchFormCategory: (state) => {
    return state.category
  },

  getSearchFormOrder: (state) => {
    return state.order
  }
}

export const mutations: MutationTree<SearchState> = {
  RESET_STATE: (state) => {
    // Merge rather than replace so we don't lose observers
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState())
  },

  UPDATE_SEARCH_FORM_CATEGORY (state, payload) {
    state.category = payload.category
  },

  UPDATE_SEARCH_FORM_ORDER (state, payload) {
    state.order = payload.order
  }
}

export const actions: ActionTree<SearchState, RootState> = {
  resetSearchState: ({ commit }) => {
    commit('RESET_STATE')
  },

  updateSearchFormCategory: ({ commit }, { payload }) => {
    commit('UPDATE_SEARCH_FORM_CATEGORY', payload)
  },

  updateSearchFormOrder: ({ commit }, { payload }) => {
    commit('UPDATE_SEARCH_FORM_ORDER', payload)
  }
}
