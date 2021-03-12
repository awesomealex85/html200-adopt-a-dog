// blog info
const profileSet = [
  ['images/blog-1.jpg',
  'Traveling With Your Dog',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  ],
  ['images/blog-2.jpg',
  'How To Walk Multiple Dogs',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  ],
  ['images/blog-3.jpg',
  'Teach Your Dog To Fetch!',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  ]
];

// blog generation
for (let i = 0; i < profileSet.length; i++) {
const article = document.createElement('article');
const section = document.querySelector('section.blog');
const div = document.createElement('div');
const div2 = document.createElement('div');
const img = document.createElement('img');
img.src = profileSet[i][0];

const h2 = document.createElement('h2');
const p = document.createElement('p');
const p2 = document.createElement('p');

section.appendChild(article);
article.appendChild(div);
article.appendChild(div2);
div.appendChild(img);

div2.appendChild(h2, p, p2);
div2.appendChild(p);
div2.appendChild(p2);

article.setAttribute("class", "container");
div2.setAttribute("class", "blog");
img.setAttribute("class", "blog");

h2.innerHTML = profileSet[i][1];
p.innerHTML = profileSet[i][2];
p2.innerHTML = profileSet[i][3];
}
