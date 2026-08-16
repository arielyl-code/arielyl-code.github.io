document.addEventListener('DOMContentLoaded',()=>{
  const current=location.pathname.split('/').pop()||'review.html';
  const links=[
    ['review.html#/home','首頁'],
    ['doctor-concept.html','認識小麥醫師'],
    ['services-concept.html','診療項目'],
    ['treatments-concept.html','特色醫療'],
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
  header.innerHTML=`<a class="mw-brand" href="review.html#/home">小麥醫師</a><nav class="mw-nav" aria-label="主要導覽">${links.map(([href,label])=>`<a href="${href}"${current===href.split('#')[0]?' aria-current="page"':''}>${label}</a>`).join('')}</nav><a class="mw-contact" href="contact-concept.html"${current==='contact-concept.html'?' aria-current="page"':''}>聯絡小麥醫師</a><button class="mw-menu" type="button" aria-label="開啟選單" aria-expanded="false">☰</button>`;
  const mobile=document.createElement('nav');
  mobile.className='mw-mobile';
  mobile.setAttribute('aria-label','手機導覽');
  mobile.innerHTML=links.concat([['contact-concept.html','聯絡小麥醫師']]).map(([href,label])=>`<a href="${href}">${label}</a>`).join('');
  document.body.prepend(mobile);
  document.body.prepend(header);
  document.body.prepend(review);
  header.querySelector('.mw-menu').addEventListener('click',e=>{const open=mobile.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
  if(current==='rfa-concept.html'||current==='ethanol-concept.html'){
    const heroCopy=document.querySelector('.hero-copy');
    if(heroCopy){
      const switcher=document.createElement('nav');
      switcher.className='treatment-switch';
      switcher.setAttribute('aria-label','特色醫療子頁');
      switcher.innerHTML=`<a href="rfa-concept.html"${current==='rfa-concept.html'?' aria-current="page"':''}>甲狀腺射頻消融 RFA</a><a href="ethanol-concept.html"${current==='ethanol-concept.html'?' aria-current="page"':''}>甲狀腺酒精消融</a>`;
      heroCopy.prepend(switcher);
    }
  }
  const socialIcons={
    facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.4V2.2L14.2 2C10.9 2 9.4 4 9.4 6.3v1.9H6.8v4.1h2.6V22h4.8v-9.7h3.2l.5-4.1h-3.7Z"/></svg>',
    line:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10.6c0-4-4-7.2-9-7.2s-9 3.2-9 7.2c0 3.6 3.2 6.6 7.6 7.1.3.1.7.2.8.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1.2 1.1.6 1.3-.5 7-4.1 8.2-7.1.3-1 .4-1.9.4-3Zm-12 2.1H7.2a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 1 0v3.2H9a.5.5 0 1 1 0 1Zm1.5-.5a.5.5 0 1 1-1 0V8.5a.5.5 0 1 1 1 0v3.7Zm4.6 0a.5.5 0 0 1-.9.3l-1.9-2.3v2a.5.5 0 1 1-1 0V8.5a.5.5 0 0 1 .9-.3l1.9 2.3v-2a.5.5 0 1 1 1 0v3.7Zm2.9-2.3a.5.5 0 1 1 0 1h-1v.8h1a.5.5 0 1 1 0 1h-1.5a.5.5 0 0 1-.5-.5V8.5c0-.3.2-.5.5-.5H18a.5.5 0 1 1 0 1h-1v.9h1Z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.1" y="3.1" width="17.8" height="17.8" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.4" cy="6.7" r="1.1" class="mw-fill"/></svg>',
    threads:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.6 10.8c-.2-3.7-2.3-5.8-5.8-5.8-3.6 0-6 2.6-6 6.8 0 4.6 2.4 7.2 6.1 7.2 3 0 5.2-1.7 5.2-4 0-2.1-1.8-3.5-4.5-3.5-2.3 0-3.8 1.1-3.8 2.8 0 1.5 1.2 2.5 2.9 2.5 2.8 0 4.6-2.2 4.6-5.7 0-3.7-1.7-5.8-4.6-5.8-2 0-3.5.8-4.5 2.3"/></svg>',
    email:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.8" y="5" width="18.4" height="14" rx="2.2"/><path d="m4 7 8 6 8-6"/></svg>'
  };
  const footer=document.createElement('footer');
  footer.className='mw-footer';
  footer.innerHTML=`<div class="mw-footer-inner"><div><h2>小麥醫師</h2><p>陪你認識內分泌、代謝與甲狀腺健康，從理解身體開始，一起找到適合的下一步。</p><div class="mw-socials"><a href="https://www.facebook.com/dr.mikehuang" target="_blank" rel="noreferrer" aria-label="Facebook">${socialIcons.facebook}<span class="mw-sr-only">Facebook</span></a><a href="https://lin.ee/WulJyPf" target="_blank" rel="noreferrer" aria-label="LINE 官方帳號">${socialIcons.line}<span class="mw-sr-only">LINE 官方帳號</span></a><a href="https://www.instagram.com/dr.mike_healthnote/" target="_blank" rel="noreferrer" aria-label="Instagram">${socialIcons.instagram}<span class="mw-sr-only">Instagram</span></a><a href="https://www.threads.net/@dr.mike_healthnote" target="_blank" rel="noreferrer" aria-label="Threads">${socialIcons.threads}<span class="mw-sr-only">Threads</span></a><a href="mailto:ilovemedicalnews@gmail.com" aria-label="Email">${socialIcons.email}<span class="mw-sr-only">Email</span></a></div></div><div><h3>網站導覽</h3><a href="doctor-concept.html">認識小麥醫師</a><a href="services-concept.html">診療項目</a><a href="treatments-concept.html">特色醫療</a><a href="find-concept.html">症狀與衛教</a></div><div><h3>健康與聯絡</h3><a href="thyroid-concept.html">甲狀腺照護</a><a href="clinic-concept.html">門診資訊</a><a href="contact-concept.html">聯絡小麥醫師</a><a href="legal-concept.html">醫療聲明・隱私權・使用條款</a></div></div><div class="mw-footer-bottom"><span>本站內容僅供一般衛教參考，不取代醫師診斷、治療或緊急醫療服務。</span><span>© 2026 小麥醫師｜整合審閱雛形</span></div>`;
  document.body.append(footer);
});
