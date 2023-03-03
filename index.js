const endData = "23 April 2023 00:00 PM"

document.getElementById("title").innerHTML = endData;

function clock(){
   const end = new Date(endData);
   const now = new Date();
   const diff = (end - now ) / 1000 ;

   if(diff < 0) return;

   const day =Math.floor((diff / 3600) / 24) ;
   const hour = Math.floor((diff / 3600) % 24);
   const min = Math.floor((diff / 60) % 60);
   const sec = Math.floor((diff % 60)) ;


   document.getElementById("day").value = day;
   document.getElementById("hour").value = hour;
   document.getElementById("minute").value = min;
   document.getElementById("second").value = sec;
   
}

setInterval(() => {
   clock();
}, 1000);





