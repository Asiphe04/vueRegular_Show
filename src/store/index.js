import { createStore } from "vuex";

export default createStore({
  state: {
    employee: null,
    employees: null,
  },

  mutations: {
    setEmployee: (state, employee) => {
      state.employee = employee;
    },
    setEmployees: (state, employees) => {
      state.employees = employees;
    },
  },
  actions: {
    getEmployee: async (context, id) => {
      fetch("http://localhost:3000/employees/" + id)
        .then((response) => response.json())
        .then((employee) => context.commit("setEmployee", employee));
    },
    getEmployees: async (context) => {
      fetch("http://localhost:3000/employees")
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployees", employees));
    },
  },
});
