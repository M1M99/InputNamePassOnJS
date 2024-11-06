//   Iki input (login, password) ve bir duyme. Her iki inputu 8 cox simvol olmagina yoxlamaq lazimdir. 
// Eger duymeye klik edende shertler uygun olmazsa bir pencere gosterin ki WRONG FORMAT yazilsin, eger duz olarsa daxil olunan deyerler gosterilsin

let userName = document.getElementById('userN')
let pass = document.getElementById('passW')
let btn = document.getElementById('loginB')

btn.addEventListener('click' , (ev) =>{
    if(userName.value.length > 8 && pass.value.length > 8){
      console.log("Valid")
      document.body.innerHTML = `<h3>Name : ${userName.value}<br>PassWord : ${pass.value}</h3>` // yeni input ucun refresh et
      // document.getElementById('info').innerHTML = `Username : ${userName.value}<br>Password  : ${pass.value}` // burada refresh etmeye ehtiyac yoxdur her zaman input gozleyir
    }
    else{
      document.body.innerHTML = '<h3>Wrong Format</h3>'
      // document.getElementById('wrong').innerHTML = "Wrong Format" // other Way
    }
})

//task ile elaqesi yoxdur bu enter ucundur!
// pass.addEventListener('keydown', (ev) => {
//   if (ev.key === 'Enter') { // Check if Enter key is pressed
//     if(userName.value.length > 8 && pass.value.length > 8){
//       console.log("Valid")
//       document.body.innerHTML = `<h3>Name : ${userName.value}<br>PassWord : ${pass.value}</h3>` // yeni input ucun refresh et
//       // document.getElementById('info').innerHTML = `Username : ${userName.value}<br>Password  : ${pass.value}` // burada refresh etmeye ehtiyac yoxdur her zaman input gozleyir
//     }          //////bu taskdan kenardir enter ucundur! eger name ve pass sertlere uygundursa passwordu yazim enteri basdiginda valid olacaq hersey
//     else{
//       document.body.innerHTML = '<h3>Wrong Format</h3>'
//       // document.getElementById('wrong').innerHTML = "Wrong Format" // other Way
//     }
//   }
// });
