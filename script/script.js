const img1 = document.querySelector("#img1");
const imageBox = document.querySelector(".image_box");
console.dir(img1);

let imgs = [
  "./image/Rectangle.png",
  "./image/Rectangle_2.png",
  "./image/Rectangle_3.png",
  "./image/Rectangle_4.png"
];
let x;
imgs.map((i, index) => {
  let childImg = document.createElement("img");
  childImg.setAttribute("src", i);
  childImg.style.width = "88px";
  childImg.addEventListener("click", () => {
    img1.attributes[0].value = i;
    let y = [...imageBox.children];
    y.forEach((i) => (i.style.opacity = "1"));
    x = index;
    childImg.style.opacity = x === index && "0.5";
    console.log("click");
  });
  imageBox.appendChild(childImg);
});

console.log(imageBox.children);
