<template>
  <div class="gantt-chart">
    <timeline :dates="dates" />
    <div class="task-rows">
      <task-row v-for="task in tasks" :key="task.id" :task="task" :dates="dates" />
    </div>
  </div>
</template>

<script>
import Timeline from "./Timeline.vue";
import TaskRow from "./TaskRow.vue";

export default {
  name: 'GanttChart',
  components: { Timeline, TaskRow },
  data() {
    return {
      dates: this.generateDates("2024-12-01", "2024-12-31"), // Start and end dates
      tasks: [
        { id: 1, name: "Task 1", start: "2024-12-01", end: "2024-12-02" },
        { id: 2, name: "Task 2", start: "2024-12-03", end: "2024-12-06" },
        { id: 3, name: "Task 3", start: "2024-12-07", end: "2024-12-10" },
        { id: 4, name: "Task 4", start: "2024-12-11", end: "2024-12-14" },
        { id: 5, name: "Task 5", start: "2024-12-15", end: "2024-12-16" },
        { id: 6, name: "Task 6", start: "2024-12-17", end: "2024-12-19" },
        { id: 7, name: "Task 7", start: "2024-12-20", end: "2024-12-22" },
        { id: 8, name: "Task 8", start: "2024-12-23", end: "2024-12-25" },
        { id: 9, name: "Task 9", start: "2024-12-26", end: "2024-12-31" },
        // Add more tasks as needed
      ],
    };
  },
  methods: {
    generateDates(start, end) {
      const dates = [];
      const startDate = new Date(start);
      const endDate = new Date(end);
      while (startDate <= endDate) {
        dates.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
      }
      return dates;
    },
  },
};
</script>

<style>
.gantt-chart {
  display: flex;
  flex-direction: column;
}

.task-rows {
  display: flex;
  flex-direction: column;
}
</style>
