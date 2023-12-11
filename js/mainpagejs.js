var images = ["../images/eco1.png", 
             "../images/eco2.png",
            "../images/eco3.png",
            "../images/eco4.png"];
            var currentIndex = 0;
    
            function displayImage(direction) {
                currentIndex += direction;
    
                if (currentIndex < 0) {
                    currentIndex = images.length - 1;
                } else if (currentIndex >= images.length) {
                    currentIndex = 0;
                }
    
                document.getElementById("img").src = images[currentIndex];
            }

var images1 = ["../images/cropped-christmas2.png",
               "../images/cropped-christmas2 (1).png",
               "../images/cropped-S168f07eee12d4f008b331c62cfd084b6j.png"];
               var currentIndex1 = 0;
    
               function displayImage1(direction) {
                   currentIndex1 += direction;
       
                   if (currentIndex1 < 0) {
                       currentIndex1 = images1.length - 1;
                   } else if (currentIndex1 >= images1.length) {
                       currentIndex1 = 0;
                   }
       
                   document.getElementById("img1").src = images1[currentIndex1];
               }
   

var images2 = ["../images/cropped-minima0.png", 
                "../images/cropped-minina2.png",
                "../images/cropped-minina3.png",
                "../images/cropped-minina4.png",
            ];
            var currentIndex2 = 0;
    
            function displayImage2(direction) {
                currentIndex2 += direction;
    
                if (currentIndex2 < 0) {
                    currentIndex2 = images2.length - 1;
                } else if (currentIndex2 >= images2.length) {
                    currentIndex2 = 0;
                }
    
                document.getElementById("img2").src = images2[currentIndex2];
            }

var images3 = ["../images/cropped-oceanic1.png", 
               "../images/cropped-oceanic2.png",
               "../images/cropped-oceanic3.png",
               "../images/cropped-oceanic.png"];
            var currentIndex3 = 0;
    
            function displayImage3(direction) {
                currentIndex3 += direction;
    
                if (currentIndex3 < 0) {
                    currentIndex3 = images3.length - 1;
                } else if (currentIndex3 >= images3.length) {
                    currentIndex3 = 0;
                }
    
                document.getElementById("img3").src = images3[currentIndex3];
            }