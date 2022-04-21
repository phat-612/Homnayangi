var listTinhbot = ["Gạo Lứt", "Khoai Lang"];
var listProtein = ["Thịt gà", "Đậu nành", "Trứng"];
var listRaucuqua = [
  "Cải thìa",
  "Bắp cải",
  "Củ cải đỏ",
  "Củ cải trắng",
  "Rau muống",
  "Cải ngọt",
];
var btnXem = document.querySelector("#btnXem");
btnXem.addEventListener("click", thucdon);

function thucdon() {
  var tinhbot = listTinhbot[Math.floor(Math.random() * listTinhbot.length)];
  var protein = listProtein[Math.floor(Math.random() * listProtein.length)];
  var check = Math.floor(Math.random() * listRaucuqua.length);
  var listRaucuquaClone = listRaucuqua.slice();
  var raucuqua1 = listRaucuquaClone[check];
  listRaucuquaClone.splice(check, 1);
  check = Math.floor(Math.random() * listRaucuquaClone.length);
  var raucuqua2 = listRaucuquaClone[check];
  listRaucuquaClone.splice(check, 1);
  listRaucuquaClone = listRaucuqua;
  alert(tinhbot + "\n" + protein + "\n" + raucuqua1 + "\n" + raucuqua2);
}
