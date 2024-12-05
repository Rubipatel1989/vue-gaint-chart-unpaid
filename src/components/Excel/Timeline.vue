<template>
       <div class="timeline">
              <div class="timeline-date" v-for="date in dates" :key="date.toISOString()">
                     {{ date.getDate() }}
              </div>
       </div>
</template>



<script>
export default {
       name: 'TimeLine',
       props: {
              dates: Array,
       },
       mounted() {
           //   console.log("Dates in Timeline:", this.dates);
       },
};
</script>

<style>
.timeline {
       display: flex;
       flex-direction: row;
}

.task-header {
       width: 100px;
       /* Match task name column width */
       border-right: 1px solid #ccc;
}

.dates {
       display: flex;
       flex-grow: 1;
       /* Remaining space for dates */
       border-bottom: 1px solid #ccc;
}

.timeline-date {
       width: 40px;
       /* Match task bar calculation (40px per day) */
       text-align: center;
       border-right: 1px solid #ccc;
}
</style>