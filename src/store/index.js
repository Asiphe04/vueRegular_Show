import { createStore } from "vuex";

export default createStore({
  state: {
    employees: null,
  },

  mutations: {
    setEmployees: (state, employees) => {
      state.employees = employees;
    },
  },
  actions: {
    getEmployees: async (context) => {
      fetch("http://localhost:3000/employees")
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployees", employees));
    },
  },
});
