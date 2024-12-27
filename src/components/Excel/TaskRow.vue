<template>
       <div class="task-row">
         <div class="row-number">{{ rowNumber }}</div>
       </div>
     </template>
     
     <script>
     export default {
       name: "TaskRow",
       props: {
         rowNumber: Number,
       },
     };
     </script>
     
     <style>
     .task-row {
       display: flex;
       align-items: center;
       height: 50px;
       border-bottom: 1px solid #ccc;
     }
     
     .row-number {
       width: 100px;
       text-align: center;
       line-height: 50px;
       border-right: 1px solid #ccc;
       background-color: #f5f5f5;
       font-weight: bold;
     }
     </style>
     