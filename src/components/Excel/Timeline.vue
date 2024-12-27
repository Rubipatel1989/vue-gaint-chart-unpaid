<template>
       <div class="timeline">
         <div class="timeline-cell" v-for="label in columns" :key="label">{{ label }}</div>
       </div>
     </template>
     
     <script>
     export default {
       name: "TimeLine",
       props: {
         columns: Array,
       },
     };
     </script>
     
     <style>
     .timeline {
       display: flex;
       flex-direction: row;
     }
     
     .timeline-cell {
       width: 100px;
       height: 50px;
       text-align: center;
       line-height: 50px;
       border-right: 1px solid #ccc;
       background-color: #e0e0e0;
       font-weight: bold;
     }
     </style>
     