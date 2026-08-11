document.addEventListener('DOMContentLoaded',()=>{
  const current=location.pathname.split('/').pop()||'index.html';
  const links=[
    ['doctor-concept.html','認識小麥醫師'],
    ['services-concept.html','診療項目'],
    ['rfa-concept.html','特色醫療'],
    ['find-concept.html','症狀與衛教'],
    ['clinic-concept.html','門診資訊']
  ];
  const oldHeader=document.querySelector('body > header');
  const oldFooter=document.querySelector('body > footer');
  if(oldHeader) oldHeader.remove();
  if(oldFooter) oldFooter.remove();
  const review=document.createElement('div');
  review.className='mw-review';
  review.textContent='黃醫師審閱雛形｜文案、醫療內容、圖片與連結仍可調整；表單不會送出資料';
  const header=document.createElement('header');
  header.className='mw-header';
  header.innerHTML=`<a class="mw-brand" href="index.html#/home">小麥醫師</a><nav class="mw-nav" aria-label="主要導覽">${links.map(([href,label])=>`<a href="${href}"${current===href?' aria-current="page"':''}>${label}</a>`).join('')}</nav><a class="mw-contact" href="contact-concept.html"${current==='contact-concept.html'?' aria-current="page"':''}>聯絡小麥醫師</a><button class="mw-menu" type="button" aria-label="開啟選單" aria-expanded="false">☰</button>`;
  const mobile=document.createElement('nav');
  mobile.className='mw-mobile';
  mobile.setAttribute('aria-label','手機導覽');
  mobile.innerHTML=links.concat([['contact-concept.html','聯絡小麥醫師']]).map(([href,label])=>`<a href="${href}">${label}</a>`).join('');
  document.body.prepend(mobile);
  document.body.prepend(header);
  document.body.prepend(review);
  header.querySelector('.mw-menu').addEventListener('click',e=>{const open=mobile.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
  const footer=document.createElement('footer');
  footer.className='mw-footer';
  footer.innerHTML=`<div class="mw-footer-inner"><div><h2>小麥醫師</h2><p>陪你認識內分泌、代謝與甲狀腺健康，從理解身體開始，一起找到適合的下一步。</p><div class="mw-socials"><a href="#" aria-label="Facebook 尚待連結">FB</a><a href="#" aria-label="LINE 官方帳號尚待連結">LINE</a><a href="#" aria-label="Instagram 尚待連結">IG</a><a href="#" aria-label="Threads 尚待連結">TH</a><a href="mailto:ilovemedicalnews@gmail.com" aria-label="Email">Email</a></div></div><div><h3>網站導覽</h3><a href="doctor-concept.html">認識小麥醫師</a><a href="services-concept.html">診療項目</a><a href="rfa-concept.html">特色醫療</a><a href="find-concept.html">症狀與衛教</a></div><div><h3>健康與聯絡</h3><a href="thyroid-concept.html">甲狀腺照護</a><a href="clinic-concept.html">門診資訊</a><a href="contact-concept.html">聯絡小麥醫師</a><a href="index.html#/policy">網站政策與醫療聲明</a></div></div><div class="mw-footer-bottom"><span>本站內容僅供一般衛教參考，不取代醫師診斷、治療或緊急醫療服務。</span><span>© 2026 小麥醫師｜整合審閱雛形</span></div>`;
  document.body.append(footer);
});
