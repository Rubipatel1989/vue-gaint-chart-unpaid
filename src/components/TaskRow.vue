<template>
       <div class="task-row">
              <div class="task-name">{{ task.name }}</div>
              <div class="task-bars">
                     <div class="text-center" :style="barStyle">
                            <span class="task-label">{{ task.name }}</span>
                     </div>
              </div>
       </div>
</template>
<script>
export default {
       name: 'TaskRow',
       props: {
              task: Object,
              dates: Array,
       },
       computed: {
              barStyle() {
                     const startIndex = this.dates.findIndex(
                            (date) => date.toISOString().split("T")[0] === this.task.start
                     );
                     const endIndex = this.dates.findIndex(
                            (date) => date.toISOString().split("T")[0] === this.task.end
                     );
                     const width = (endIndex - startIndex + 1) * 40; // 40px per day
                     const left = startIndex * 40; // Offset from the start
                     return {
                            width: `${width}px`,
                            left: `${left}px`,
                            backgroundColor: "lightgreen",
                            height: "20px",
                            position: "absolute",
                     };
              }


       },
};
</script>

<style>
.task-row {
       display: flex;
       align-items: center;
       border-bottom: 1px solid #ccc;
       height: 50px;
}

.task-name {
       width: 100px;
       text-align: left;
       padding-left: 10px;
       border-right: 1px solid #ccc;
}

.task-bars {
       position: relative;
       flex-grow: 1;
       /* Takes the remaining width */
       height: 20px;
       /* Match the bar height */
}
.task-label {
  padding: 0 5px; /* Add some padding for better visibility */
}
</style>