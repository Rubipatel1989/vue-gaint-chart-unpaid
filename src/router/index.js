import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import GanttChart from "@/components/GanttChart.vue";
import GanttChartExcel from "@/components/Excel/GanttChartExcel.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/GanttChart", component: GanttChart },
  { path: "/GanttChartExcel", component: GanttChartExcel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
