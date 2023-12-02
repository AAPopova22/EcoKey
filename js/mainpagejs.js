var images = ["https://media.sketchfab.com/models/90d61eec0c484332ab562c5f4eda6f52/thumbnails/7d86998c7e91461f82af31cdc05ed62c/1005b1912b5148e5aa4066ceebc86189.jpeg", "https://cannonkeys.com/cdn/shop/products/22_6850d63a-67b5-4def-ba6b-e9dc585a2e1d.jpg?v=1699889055, https://spaceholdings.net/cdn/shop/files/GMK-CYL-DANDY-DAISY-ALEXOTOS_PICTURE_DAISY-BANDEROLE.jpg?v=1691518015"];
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

var images1 = ["https://media.sketchfab.com/models/90d61eec0c484332ab562c5f4eda6f52/thumbnails/7d86998c7e91461f82af31cdc05ed62c/1005b1912b5148e5aa4066ceebc86189.jpeg", "https://cannonkeys.com/cdn/shop/products/22_6850d63a-67b5-4def-ba6b-e9dc585a2e1d.jpg?v=1699889055, https://spaceholdings.net/cdn/shop/files/GMK-CYL-DANDY-DAISY-ALEXOTOS_PICTURE_DAISY-BANDEROLE.jpg?v=1691518015"];
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

var images2 = ["https://media.sketchfab.com/models/90d61eec0c484332ab562c5f4eda6f52/thumbnails/7d86998c7e91461f82af31cdc05ed62c/1005b1912b5148e5aa4066ceebc86189.jpeg", "https://cannonkeys.com/cdn/shop/products/22_6850d63a-67b5-4def-ba6b-e9dc585a2e1d.jpg?v=1699889055, https://spaceholdings.net/cdn/shop/files/GMK-CYL-DANDY-DAISY-ALEXOTOS_PICTURE_DAISY-BANDEROLE.jpg?v=1691518015"];
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

var images3 = ["https://media.sketchfab.com/models/90d61eec0c484332ab562c5f4eda6f52/thumbnails/7d86998c7e91461f82af31cdc05ed62c/1005b1912b5148e5aa4066ceebc86189.jpeg", "https://cannonkeys.com/cdn/shop/products/22_6850d63a-67b5-4def-ba6b-e9dc585a2e1d.jpg?v=1699889055, https://spaceholdings.net/cdn/shop/files/GMK-CYL-DANDY-DAISY-ALEXOTOS_PICTURE_DAISY-BANDEROLE.jpg?v=1691518015"];
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