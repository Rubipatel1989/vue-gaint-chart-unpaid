<template>
  <div class="gantt-chart">
    <div class="timeline-container" @scroll="onScrollHorizontal">
      <timeline :dates="visibleDates" />
    </div>
    <div class="task-rows-container" @scroll="onScrollVertical">
      <task-row v-for="task in visibleTasks" :key="task.id" :task="task" :dates="visibleDates" />
    </div>
  </div>
</template>


<script>
import Timeline from "./Timeline.vue";
import TaskRow from "./TaskRow.vue";
export default {
  name: "GanttChartExcel",
  components: { Timeline, TaskRow },
  data() {
    return {
      allDates: this.generateDates("2024-12-01", "2024-12-31"), // Full dataset
      visibleDates: [], // Initially visible dates
      allTasks: [
        { id: 1, name: "Task 1", start: "2024-12-01", end: "2024-12-02" },
        { id: 2, name: "Task 2", start: "2024-12-03", end: "2024-12-06" },
        { id: 3, name: "Task 3", start: "2024-12-07", end: "2024-12-10" },
        { id: 4, name: "Task 4", start: "2024-12-11", end: "2024-12-14" },
        { id: 5, name: "Task 5", start: "2024-12-15", end: "2024-12-16" },
        { id: 6, name: "Task 6", start: "2024-12-17", end: "2024-12-19" },
        { id: 7, name: "Task 7", start: "2024-12-20", end: "2024-12-22" },
        { id: 8, name: "Task 8", start: "2024-12-23", end: "2024-12-25" },
        { id: 9, name: "Task 9", start: "2024-12-26", end: "2024-12-31" },
      ],
      visibleTasks: [], // Initially visible tasks
      scrollOffset: { x: 0, y: 0 },
      viewportSize: { rows: 20, columns: 10 }, // Visible rows/columns
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
    updateVisibleDates() {
      const start = this.scrollOffset.x;
      const end = start + this.viewportSize.columns;
      this.visibleDates = this.allDates.slice(start, end);
    },
    updateVisibleTasks() {
      const start = this.scrollOffset.y;
      const end = start + this.viewportSize.rows;
      this.visibleTasks = this.allTasks.slice(start, end);
    },
    onScrollHorizontal(event) {
      const scrollLeft = Math.floor(event.target.scrollLeft / 40); // 40px per day
      console.log("Horizontal Scroll Offset:", scrollLeft);
      this.scrollOffset.x = scrollLeft;
      this.updateVisibleDates();
    },
    onScrollVertical(event) {
      const scrollTop = Math.floor(event.target.scrollTop / 50); // 50px per row
     // console.log("Vertical Scroll Offset:", scrollTop);
      this.scrollOffset.y = scrollTop;
      this.updateVisibleTasks();
    },
  },
  mounted() {
    this.updateVisibleDates();
    this.updateVisibleTasks();
    //console.log("Visible Dates:", this.visibleDates);
    //console.log("Visible Tasks:", this.visibleTasks);
  },

};

</script>

<style>
.gantt-chart {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.timeline-container {
  overflow-x: scroll;
  white-space: nowrap;
}

.task-rows-container {
  overflow-y: scroll;
  height: 300px;
  /* Adjust the height as needed */
}

.task-bars {
  position: relative;
  height: 20px;
}
</style>
