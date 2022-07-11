function scrollbar() {
if(document.getElementById("toggle_dark_theme").checked == true)
document.head.querySelector("#scrollbar-color").innerHTML=`
   body::-webkit-scrollbar-thumb {background-color:#455a64; border-radius: 3px; background-clip: padding-box; border:2px solid transparent}
   .sidebar.sticky::-webkit-scrollbar-thumb {background-color:#282828; border-radius: 3px; background-clip: padding-box; border:1px solid transparent}
   .toc__menu::-webkit-scrollbar-thumb {background-color:#282828; border-radius: 3px; background-clip: padding-box; border:1px solid transparent}
 `
 else
 document.head.querySelector("#scrollbar-color").innerHTML=`
   body::-webkit-scrollbar-thumb {background-color:#cfd8dc; border-radius: 3px; background-clip: padding-box; border:2px solid transparent}
   .sidebar.sticky::-webkit-scrollbar-thumb {background-color:#eaeaf2; border-radius: 3px; background-clip: padding-box; border:1px solid transparent}
   .toc__menu::-webkit-scrollbar-thumb {background-color:#eaeaf2; border-radius: 3px; background-clip: padding-box; border:1px solid transparent}
 `
 }
