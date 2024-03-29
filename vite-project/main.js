import './style.css'


document.querySelector('#header').innerHTML = `
  <h1>Akvariesidan</h1>
`
document.querySelector('#mainContainer').innerHTML = `
  <div class="text-box">Jag presenterar de sorter jag har i mitt akvarium.<div>

  <div class="image-box">
    <img class="fish-image" src="img/familjefoto.jpg" alt="fyra akvariefiskar av olika arter tittar in i kameran och ser roliga ut.">
    <div class="fish-image-text">Fiskarna radar upp sig för gruppfoto.</div>
  </div>

  <div class="image-box">
    <img class="fish-image" src="img/klunsen.jpg" alt="Foto på en Garra Rufa-fisk som säger i en pratbubbla att han heter Klunsen.">
    <div class="fish-image-text">Klunsen presenterar sig</div>
  </div>
  <div class="image-box">
    <img class="fish-image" src="img/trevligmatstund.jpg" alt="Tre akvariefiskar äter mat på sanden och den gula Mollyn säger i en pratbubbla, Vilken trevlig matstund vi har tillsammans">
    <div class="fish-image-text">Den trevliga matstunden.</div>
  </div>
  <div class="image-box">
    <img class="fish-image" src="img/kuhli.jpg" alt="En kuhliål på nära håll.">
    <div class="fish-image-text">Ålen Pål kikar fram.</div>
  </div>
  <div class="image-box">
    <img class="fish-image" src="img/goodmorning.jpg" alt="En gul Molly-fisk säger i en pratbubbla, Goood Morning!">
    <div class="fish-image-text">Molly är pigg och glad på morgonen.</div>
  </div>
  <div class="image-box">
    <img class="fish-image" src="img/goby.jpg" alt="En fin Goby Electric Blue sitter på en sten i ett akvarium">
    <div class="fish-image-text">Gobyn sitter och filosoferar på en sten.</div>
  </div>


`

document.querySelector('#footer').innerHTML = `
&copy; Carina Lakosil mars 2024
`
