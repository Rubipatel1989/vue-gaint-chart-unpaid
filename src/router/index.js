import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import GanttChart from "@/components/GanttChart.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/GanttChart", component: GanttChart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
