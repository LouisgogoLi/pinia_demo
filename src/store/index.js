import { createStore } from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import Auth from "./Auth";
import golden from "./golden";

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules: {
    Auth,
    golden,
  },
});
