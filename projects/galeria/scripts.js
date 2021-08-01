let data1 = {
  photo: "images/1.jpg",
  title: "A nagy tölgy",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quia voluptates ea eaque nulla hic officiis mollitia quo sit iste.",
};

let data2 = {
  photo: "images/2.jpg",
  title: "Mező",
  description: "What happened here, why is this a very nice image",
};

let data3 = {
  photo: "images/3.jpg",
  title: "Tengerpart",
  description: "What happened here, why is this a very nice image",
};

let data4 = {
  photo: "images/4.jpg",
  title: "Galaxis",
  description: "What happened here, why is this a very nice image",
};

let data5 = {
  photo: "images/5.jpg",
  title: "Az űr",
  description: "What happened here, why is this a very nice image",
};

let data6 = {
  photo: "images/6.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image",
};

let data7 = {
  photo: "images/7.jpg",
  title: "Hawaii 1",
  description: "What happened here, why is this a very nice image",
};

let data8 = {
  photo: "images/8.jpg",
  title: "Hawaii 2",
  description: "What happened here, why is this a very nice image",
};

let osszes = [data1, data2, data3, data4, data5, data7, data8];

let szamlalo = 0;
$("#photo").attr("src", osszes[0]["photo"]);
$("h1").text(osszes[0]["title"]);
$("p").text(osszes[0]["description"]);

let loadPhoto = (szamlalo) => {
  $("#photo").attr("src", osszes[szamlalo]["photo"]);
  $("h1").text(osszes[szamlalo]["title"]);
  $("p").text(osszes[szamlalo]["description"]);
};

$("#right-arrow").click(() => {
  if (szamlalo < 7) {
    szamlalo++;
    loadPhoto(szamlalo);
  }
});

$("#left-arrow").click(() => {
  if (szamlalo > 0) {
    szamlalo--;
    loadPhoto(szamlalo);
  }
});
