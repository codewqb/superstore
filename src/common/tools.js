//  节流函数
 export function throttle(fn, delay) {
   let flag = true;
   return function (...args) {
     if (!flag) {
       return;
     } else {
       flag = false;
       setTimeout(() => {
         fn.apply(this, args);
         flag = true;
       }, delay);
     }
   }
 }
 // 防抖函数
 export function debounce(fn, delay) {
   let timer = null;
   return function (...args) {
     if (timer) {
       clearTimeout(timer);
     }
     timer = setTimeout(() => {
       fn.apply(this, args);
     }, delay);
   }
 }
