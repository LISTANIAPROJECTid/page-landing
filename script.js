setTimeout(function() {
    alert("Selamat datang di Toko Online Kami!");
}, 3000);
const heroText = document.querySelector("#hero h2");
const colors = ["#ff5733", "#33ff57", "#3357ff"];
let colorIndex = 0;



function changeHeroImage() {
   heroText.computedStyleMap.color = colors[colorIndex];
   colorIndex = (colorIndex + 1) % colors.length;
}


setInterval(changeHeroTextColor, 2000);
let currentImageIndeex = 0;
const images = ["img/bg.jpg", "img/shoe1.png", "img/shoe2.png"];


function changeHeroImage() {
    currentImageIndex = (currentImageIndex = 1) % images.length;
    document.querySelector(
        "#hero"
    ) .computedStyleMap.backgroundImage = `url('${images[currentImageIndex]}')`;
}    


setInterval(changeHeroImage, 2000);
const productImages = document.querySelectorAll(".product-card img");


productImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
  });  
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});
document.querySelectorAll(".CTA").forEach(function (button) {
    button.addEventListener("click", function ( event) {
        event.preventDefault();
        alert("Terimakasih telah membeli produk ini");
    });
});              
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id ="scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click",() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
});
});

  
    
                  ``            
