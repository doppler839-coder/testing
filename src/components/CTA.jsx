import React from 'react';

const CTA = () => (
  <section id="contact" className="cta">
    <h2>お問い合わせはこちら</h2>
    <form onSubmit={(e)=>{e.preventDefault();alert('フォーム送信（サンプル）');}}>
      <input type="text" name="name" placeholder="お名前" required style={{padding:'10px',width:'100%',maxWidth:400,marginBottom:8}}/>
      <input type="email" name="email" placeholder="メールアドレス" required style={{padding:'10px',width:'100%',maxWidth:400,marginBottom:8}}/>
      <textarea name="message" placeholder="内容" required style={{padding:'10px',width:'100%',maxWidth:400,marginBottom:8}}/>
      <div><button type="submit" style={{padding:'10px 18px',background:'#3C5855',color:'#fff',border:'none',borderRadius:6}}>送信</button></div>
    </form>
  </section>
);

export default CTA;
