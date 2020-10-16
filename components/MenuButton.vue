<template>
  <div class="menu-button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
};
</script>

<style>
.menu-button {
  width: 20px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.menu-button span {
  display: block;
  position: absolute;
  height: 2px;
  width: 50%;
  background: gray;
  opacity: 1;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.menu-button span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

.menu-button span:nth-child(odd) {
  left:0;
  border-radius: 9px 0 0 9px;
}

.menu-button span:nth-child(1), .menu-button span:nth-child(2) {
  top: 0;
}

.menu-button span:nth-child(3), .menu-button span:nth-child(4) {
  top: 6px;
}

.menu-button span:nth-child(5), .menu-button span:nth-child(6) {
  top: 12px;
}

.menu-button.open span:nth-child(1),.menu-button.open span:nth-child(6) {
  transform: rotate(45deg);
}

.menu-button.open span:nth-child(2),.menu-button.open span:nth-child(5) {
  transform: rotate(-45deg);
}

.menu-button.open span:nth-child(1) {
  left: 0;
  top: 5px;
}

.menu-button.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 5px;
}

.menu-button.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

.menu-button.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

.menu-button.open span:nth-child(5) {
  left: 0;
  top: 10px;
}

.menu-button.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 10px;
}
</style>
