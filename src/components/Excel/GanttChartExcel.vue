<template>
  <div class="gantt-chart">
    <!-- Header -->
    <div class="header">
      <div class="row-number-placeholder"></div>
      <div
        class="columns"
        ref="columnsContainer"
        @scroll="onHorizontalScroll"
      >
        <div
          class="column-header"
          v-for="column in visibleColumns"
          :key="column"
        >
          {{ column }}
        </div>
      </div>
    </div>

    <!-- Body -->
    <div
      class="body"
      ref="rowsContainer"
      @scroll="onVerticalScroll"
    >
      <div
        class="row"
        v-for="row in visibleRows"
        :key="row"
      >
        <div class="row-number">{{ row }}</div>
        <div class="cells">
          <div
            class="cell"
            v-for="column in visibleColumns"
            :key="`${row}-${column}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GanttChartExcel",
  data() {
    return {
      visibleRows: Array.from({ length: 20 }, (_, i) => i + 1), // Rows 1-20 initially
      visibleColumns: this.generateColumnLabels(10), // Columns A-J initially
      rowHeight: 50, // Row height in pixels
      columnWidth: 100, // Column width in pixels
      maxRows: 1000, // Prevent infinite rows
      maxColumns: 1000, // Prevent infinite columns
      scrollOffsets: { top: 0, left: 0 }, // Track scroll offsets
    };
  },
  mounted() {
    console.log("Component mounted! Rows and columns initialized.");
    this.ensureScrollWorks();
  },
  methods: {
    // Ensure enough content to scroll
    ensureScrollWorks() {
      const rowsContainer = this.$refs.rowsContainer;
      rowsContainer.scrollTop = 1; // Trigger scroll for testing
    },

    // Generate column labels dynamically
    generateColumnLabels(count, startIndex = 0) {
      const labels = [];
      for (let i = startIndex; i < startIndex + count; i++) {
        let label = "";
        let num = i;
        while (num >= 0) {
          label = String.fromCharCode((num % 26) + 65) + label;
          num = Math.floor(num / 26) - 1;
        }
        labels.push(label);
      }
      return labels;
    },

    // Vertical Scroll Event
    onVerticalScroll() {
      const rowsContainer = this.$refs.rowsContainer;
      const newOffsetTop = Math.floor(rowsContainer.scrollTop / this.rowHeight);

      if (newOffsetTop > this.scrollOffsets.top) {
        const newRowStart = this.visibleRows[this.visibleRows.length - 1] + 1;
        const newRows = Array.from(
          { length: 10 },
          (_, i) => newRowStart + i
        ).filter((row) => row <= this.maxRows);

        this.visibleRows.push(...newRows);
        console.log("Added Rows:", newRows);
      }

      this.scrollOffsets.top = newOffsetTop;
    },

    // Horizontal Scroll Event
    onHorizontalScroll() {
      const columnsContainer = this.$refs.columnsContainer;
      const newOffsetLeft = Math.floor(
        columnsContainer.scrollLeft / this.columnWidth
      );

      if (newOffsetLeft > this.scrollOffsets.left) {
        const newColumnStart = this.visibleColumns.length;
        const newColumns = this.generateColumnLabels(
          10,
          newColumnStart
        ).filter((_, i) => newColumnStart + i < this.maxColumns);

        this.visibleColumns.push(...newColumns);
        console.log("Added Columns:", newColumns);
      }

      this.scrollOffsets.left = newOffsetLeft;
    },
  },
};
</script>

<style scoped>
/* Overall container */
.gantt-chart {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Header */
.header {
  display: flex;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.row-number-placeholder {
  width: 100px;
  background: #f0f0f0;
}

.columns {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}

.column-header {
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-right: 1px solid #ccc;
  background: #f9f9f9;
}

/* Body */
.body {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
}

.row {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.row-number {
  width: 100px;
  text-align: center;
  line-height: 50px;
  background: #f0f0f0;
  border-right: 1px solid #ccc;
}

.cells {
  display: flex;
  flex-grow: 1;
}

.cell {
  width: 100px;
  height: 100%;
  border-right: 1px solid #ccc;
  background: #fff;
}
</style>
