"use strict";let menuBtnEl=document.querySelector(".menubtn"),containerEl=document.querySelector("div"),video1=document.getElementById("product-video1"),video2=document.getElementById("product-video2");menuBtnEl.addEventListener("click",transformMenu),menuBtnEl.addEventListener("click",dropDownMenu);let currentPage=window.location.pathname;function goToProducts(){window.location.href="products.html"}function transformMenu(){document.querySelector(".menuicon").classList.toggle("cross"),containerEl.classList.toggle("opacity")}function dropDownMenu(){let e=document.getElementById("mobilenav");"block"===window.getComputedStyle(e).display?e.style.display="none":e.style.display="block"}function showVideoPoster1(){let e=video1.currentSrc,t;e.includes("productvideo.mp4")?t="images/poster1.jpg":e.includes("productvideo.webm")&&(t="images/poster1.webp"),video1.setAttribute("poster",t)}function showVideoPoster2(){let e=video2.currentSrc,t;e.includes("productvideo.mp4")?t="images/poster2.jpg":e.includes("productvideo.webm")&&(t="images/poster2.webp"),video2.setAttribute("poster",t)}currentPage.endsWith("/cup1.html")&&video1.addEventListener("loadedmetadata",showVideoPoster1),currentPage.endsWith("/coffee1.html")&&video2.addEventListener("loadedmetadata",showVideoPoster2);