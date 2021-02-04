<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<style>
  ::-webkit-scrollbar {
      position: absolute;
      height: 8px;
      width: 6px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      border-radius: 2px;
  }
  ::-webkit-scrollbar-button {
      display: none;
  }
  ::-webkit-scrollbar-thumb {
    position: absolute;
      width: 8px;
      min-height: 15px;
      background: rgba(50,50,50,0.6) !important;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      border-radius: 2px;
  }
</style>