<template>
  <div @click="$emit('close-modal')" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center" style="background-color: #000000da;">
    <div @click.stop class="text-center bg-white h-[400px] w-[500px] mt-[10%] p-10 rounded-md">
      <div class="p-4 space-y-2">
        <input class="border-2 rounded p-1" type="email" name="email" id="email" placeholder="E-mail" />
        <input class="border-2 rounded p-1" type="password" name="pass" id="pass" placeholder="Password" />
      </div>
      <div>
        <button class="w-[65%] hover:bg-blue-600 bg-blue-500 p-1 shadow-md rounded text-blue-200">
          LOG IN
        </button>
      </div>
    </div>
    <div style="margin: 7% 0 0 10px">
      <button @click="$emit('close-modal')" class="cursor-pointer text-red-500 text-sm border-2 rounded-2xl p-1 pl-2 pr-2 border-red-500">X</button>
    </div>
  </div>
</template>

<script setup></script>
