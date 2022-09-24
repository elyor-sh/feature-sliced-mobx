<h1>React design </h1>

<h2>Tech stack: React, Typescript, Mobx, Tsyringe</h2>

<p>Proyektdagi qatlamlar (en: layer, ru: слой) ketma-ketligi (yuqoridan pastga)</p>

<ol>
 <li><b>app</b> <em>(yuqori qatlam, har xil provayderlar, global style uchun)</em></li>
 <li><b>pages</b> <em>(barcha sahifalar)</em></li>
 <li><b>widgets</b> <em>(features va entitities larni mustaqil bloklarga jamlovchi kompozitsion qatlam)</em></li>
 <li><b>features</b> <em>(foydalanuvchi bilan aloqa qiluvchi qatlam)</em></li>
 <li><b>entities</b> <em>(dasturimizdagi asosiy biznes obyektlar)</em></li>
 <li><b>shared</b> <em>(dasturimizdagi biznesga aloqasi yo'q bo'lgan qayta ishlatiluvchi kod)</em></li>
</ol>

<h6>MUHIM QOIDALAR:</h6>
<ol>
<li>Pastki qatlamda joylashgan modullar o'zidan yuqori joylashgan modullarni to'g'ridan to'g'ri import qilishligi mumkin emas</li>
<li>Modullar qatlamlarga ajratilishligi file type ga qarab emas modulning vazifasiga qarab ajratilishligi kerak</li>
<li>Logika va ui bir komponent ichida qolib ketmasligi kerak (ya'ni bir-birian alohida bo'lishligi kerak)</li>
<li>modullar uchun testlar modullar yonida yoziladi (hozirgi proyektda test yozilmagan)</li>
</ol>

<h6>Foydali linklar:</h6>
<ul>
<li><a href="https://feature-sliced.design/">Arxitektura haqida batafsil</a></li>
<li><a href="https://mobx.js.org/README.html">Mobx haqida</a></li>
</ul>

<h6>Kichik eslatmalar:</h6>
<ul>
<li>Ushbu arxitektura uchun ushbu proyektdagi hech bir texnologiya majburiy emas</li>
<li>API so'rovlari sekin ishlaydi, sababi mock server javobni sekinroq qaytarishida</li>
</ul>
