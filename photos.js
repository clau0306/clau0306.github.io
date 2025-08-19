
    
    const images = [
      "bbt.jpeg",
      "fish.jpeg",
      "peace.jpeg",
      "sun.jpeg",
      "sushi.jpeg"
    ];

  
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    
    document.getElementById("randomImage").src = selectedImage;
