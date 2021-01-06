<template>
  <div>
    <Navbar />
    <b-container>
      <b-card :title="startCase('Todo List')" tag="main" class="mb-2">
        <b-card-text class="my-2">
          <div class="my-4 text-right">
            <b-button
              variant="primary"
              v-text="startCase('add new')"
              v-b-modal.add-todo
            ></b-button>
          </div>
          <Form modalType="add-todo" />
        </b-card-text>
        <b-card-text class="my-2">
          <List v-if="!isEmpty(items)" :items="items" />
          <p v-else class="text-capitalize text-center">
            there is no data to show
          </p>
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./navbar";
import List from "./list";
import Form from "./form";

import { isEmpty, startCase } from "lodash";

export default {
  components: { Navbar, List, Form },
  data: () => ({
    showForm: false,
    items: [],
  }),
  methods: {
    isEmpty: p => isEmpty(p),
    startCase: c => startCase(c),
  },
  created() {
    axios.get("/api/todos").then(res => {
      this.items = res.data;
    });
  },
};
</script>
