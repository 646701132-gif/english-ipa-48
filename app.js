
const cards = [{"cat": "元音", "ipa": "/iː/", "han": "衣", "tip": "嘴角拉开，长音", "word": "see", "zh": "看见", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-i-long.mp3"}, {"cat": "元音", "ipa": "/ɪ/", "han": "短衣", "tip": "快一点，短一点", "word": "sit", "zh": "坐", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-i-short.mp3"}, {"cat": "元音", "ipa": "/e/", "han": "诶", "tip": "嘴微开", "word": "bed", "zh": "床", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-e-short.mp3"}, {"cat": "元音", "ipa": "/æ/", "han": "哎啊", "tip": "嘴张更大", "word": "cat", "zh": "猫", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-ae-short.mp3"}, {"cat": "元音", "ipa": "/ɜː/", "han": "呃", "tip": "嘴放松，长音", "word": "bird", "zh": "鸟", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-er-long.mp3"}, {"cat": "元音", "ipa": "/ə/", "han": "轻呃", "tip": "最轻最短", "word": "about", "zh": "关于", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-schwa-short.mp3"}, {"cat": "元音", "ipa": "/ʌ/", "han": "短啊", "tip": "放松短音", "word": "cup", "zh": "杯子", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-uh-short.mp3"}, {"cat": "元音", "ipa": "/ɑː/", "han": "啊", "tip": "嘴巴张开，长音", "word": "car", "zh": "汽车", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-a-long.mp3"}, {"cat": "元音", "ipa": "/ɒ/", "han": "奥", "tip": "圆唇短音", "word": "hot", "zh": "热的", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-o-short.mp3"}, {"cat": "元音", "ipa": "/ɔː/", "han": "奥", "tip": "圆唇长音", "word": "door", "zh": "门", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-aw-long.mp3"}, {"cat": "元音", "ipa": "/ʊ/", "han": "短乌", "tip": "双唇微圆", "word": "book", "zh": "书", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-u-short.mp3"}, {"cat": "元音", "ipa": "/uː/", "han": "乌", "tip": "圆唇长音", "word": "food", "zh": "食物", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/vowel-u-long.mp3"}, {"cat": "元音", "ipa": "/eɪ/", "han": "诶", "tip": "从 e 滑到 i", "word": "name", "zh": "名字", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-ei.mp3"}, {"cat": "元音", "ipa": "/aɪ/", "han": "爱", "tip": "从 a 滑到 i", "word": "my", "zh": "我的", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-ai.mp3"}, {"cat": "元音", "ipa": "/ɔɪ/", "han": "奥伊", "tip": "奥滑到衣", "word": "boy", "zh": "男孩", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-oi.mp3"}, {"cat": "元音", "ipa": "/əʊ/", "han": "欧", "tip": "呃滑到乌", "word": "go", "zh": "去", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-ou.mp3"}, {"cat": "元音", "ipa": "/aʊ/", "han": "嗷", "tip": "啊滑到乌", "word": "now", "zh": "现在", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-au.mp3"}, {"cat": "元音", "ipa": "/ɪə/", "han": "衣呃", "tip": "快速连读", "word": "ear", "zh": "耳朵", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-ear.mp3"}, {"cat": "元音", "ipa": "/eə/", "han": "诶呃", "tip": "快速连读", "word": "hair", "zh": "头发", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-air.mp3"}, {"cat": "元音", "ipa": "/ʊə/", "han": "乌呃", "tip": "快速连读", "word": "tour", "zh": "旅行", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/diphthong-ure.mp3"}, {"cat": "辅音", "ipa": "/p/", "han": "坡", "tip": "双唇爆破", "word": "pen", "zh": "钢笔", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-p.mp3"}, {"cat": "辅音", "ipa": "/b/", "han": "波", "tip": "双唇爆破，声带振动", "word": "book", "zh": "书", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-b.mp3"}, {"cat": "辅音", "ipa": "/t/", "han": "特", "tip": "舌尖轻弹", "word": "tea", "zh": "茶", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-t.mp3"}, {"cat": "辅音", "ipa": "/d/", "han": "得", "tip": "舌尖爆破，声带振动", "word": "dog", "zh": "狗", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-d.mp3"}, {"cat": "辅音", "ipa": "/k/", "han": "克", "tip": "后舌爆破", "word": "cat", "zh": "猫", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-k.mp3"}, {"cat": "辅音", "ipa": "/ɡ/", "han": "哥", "tip": "后舌浊音", "word": "go", "zh": "去", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-g.mp3"}, {"cat": "辅音", "ipa": "/f/", "han": "夫", "tip": "上齿碰下唇", "word": "fish", "zh": "鱼", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-f.mp3"}, {"cat": "辅音", "ipa": "/v/", "han": "唔夫", "tip": "上齿碰下唇，声带振动", "word": "very", "zh": "非常", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-v.mp3"}, {"cat": "辅音", "ipa": "/s/", "han": "丝", "tip": "轻擦音", "word": "see", "zh": "看见", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-s.mp3"}, {"cat": "辅音", "ipa": "/z/", "han": "滋", "tip": "声带振动", "word": "zoo", "zh": "动物园", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-z.mp3"}, {"cat": "辅音", "ipa": "/θ/", "han": "咬舌丝", "tip": "舌尖轻触上齿，不振动", "word": "think", "zh": "想", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-th-soft.mp3"}, {"cat": "辅音", "ipa": "/ð/", "han": "咬舌兹", "tip": "舌尖轻触上齿，声带振动", "word": "this", "zh": "这个", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-th-voice.mp3"}, {"cat": "辅音", "ipa": "/ʃ/", "han": "嘘", "tip": "嘴唇稍圆", "word": "she", "zh": "她", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-sh.mp3"}, {"cat": "辅音", "ipa": "/ʒ/", "han": "柔", "tip": "轻振动", "word": "vision", "zh": "视觉", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-zh.mp3"}, {"cat": "辅音", "ipa": "/h/", "han": "哈", "tip": "只送气", "word": "he", "zh": "他", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-h.mp3"}, {"cat": "辅音", "ipa": "/r/", "han": "若", "tip": "舌尖卷起但不碰上颚", "word": "red", "zh": "红色", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-r.mp3"}, {"cat": "辅音", "ipa": "/tʃ/", "han": "吃", "tip": "先堵后放", "word": "chair", "zh": "椅子", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-ch.mp3"}, {"cat": "辅音", "ipa": "/dʒ/", "han": "知", "tip": "浊音，先堵后放", "word": "job", "zh": "工作", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-j.mp3"}, {"cat": "辅音", "ipa": "/tr/", "han": "戳", "tip": "t+r 连读", "word": "tree", "zh": "树", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-tr.mp3"}, {"cat": "辅音", "ipa": "/dr/", "han": "啄", "tip": "d+r 连读", "word": "dream", "zh": "梦想", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-dr.mp3"}, {"cat": "辅音", "ipa": "/ts/", "han": "次", "tip": "t+s 快速连读", "word": "cats", "zh": "猫（复数）", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-ts.mp3"}, {"cat": "辅音", "ipa": "/dz/", "han": "资", "tip": "d+z 快速连读", "word": "beds", "zh": "床（复数）", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-dz.mp3"}, {"cat": "辅音", "ipa": "/m/", "han": "姆", "tip": "双唇闭合，鼻音", "word": "mother", "zh": "妈妈", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-m.mp3"}, {"cat": "辅音", "ipa": "/n/", "han": "嗯", "tip": "舌尖上抬，鼻音", "word": "no", "zh": "不", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-n.mp3"}, {"cat": "辅音", "ipa": "/ŋ/", "han": "后鼻嗯", "tip": "舌根抬起，鼻音", "word": "sing", "zh": "唱", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-ng.mp3"}, {"cat": "辅音", "ipa": "/l/", "han": "勒", "tip": "舌尖碰上齿龈", "word": "look", "zh": "看", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-l.mp3"}, {"cat": "辅音", "ipa": "/w/", "han": "乌", "tip": "双唇圆，滑向后面元音", "word": "we", "zh": "我们", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-w.mp3"}, {"cat": "辅音", "ipa": "/j/", "han": "耶", "tip": "滑音", "word": "yes", "zh": "是", "audio": "https://raw.githubusercontent.com/resetsix/english-ipa/main/public/audio/consonant-y.mp3"}];
const AUDIO_CACHE='ipa48-audio-v2';
let filter='全部', currentBtn=null, currentStatus=null;
const player=document.getElementById('player');

function resetBtn(){
  if(currentBtn){ currentBtn.classList.remove('playing'); currentBtn.textContent='▶ 真人发音'; }
}

async function playCard(card,btn,status){
  resetBtn(); currentBtn=btn; currentStatus=status;
  btn.classList.add('playing'); btn.textContent='🔊 播放中…'; status.textContent='正在播放';
  try{
    player.pause(); player.src=card.audio; player.currentTime=0; await player.play();
  }catch(e){
    resetBtn(); status.textContent='播放失败：请先联网，或先下载离线音频';
  }
}

function render(){
  const g=document.getElementById('grid'); g.innerHTML='';
  cards.forEach(card=>{
    if(filter!=='全部'&&card.cat!==filter) return;
    const el=document.createElement('article'); el.className='card';
    el.innerHTML=`<div class="ipa">${card.ipa}</div><div class="han">${card.han}</div><div class="desc">${card.tip}</div><div><span class="word">${card.word}</span><span class="zh">${card.zh}</span></div><button class="play">▶ 真人发音</button><div class="status"></div>`;
    const b=el.querySelector('.play'), s=el.querySelector('.status');
    b.onclick=()=>playCard(card,b,s);
    g.appendChild(el);
  });
}

player.onended=()=>{ resetBtn(); if(currentStatus) currentStatus.textContent='播放完成'; };

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
  filter=b.dataset.filter;
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); render();
});

async function offlineCount(){
  if(!('caches' in window)) return 0;
  const c=await caches.open(AUDIO_CACHE);
  const keys=await c.keys();
  const set=new Set(keys.map(r=>r.url));
  return cards.filter(x=>set.has(x.audio)).length;
}

async function updateOfflineUI(){
  const n=await offlineCount();
  const st=document.getElementById('offlineStatus');
  const fill=document.getElementById('barFill');
  fill.style.width=(n/cards.length*100)+'%';
  st.textContent = n===cards.length ? '✅ 已缓存 48/48：现在可以断网使用。' : `已缓存 ${n}/48`;
}

document.getElementById('downloadOffline').onclick=async()=>{
  const btn=document.getElementById('downloadOffline');
  const st=document.getElementById('offlineStatus');
  if(!('caches' in window)){ st.textContent='当前浏览器不支持离线缓存，请使用 Safari/Chrome。'; return; }
  btn.disabled=true; btn.textContent='正在下载…';
  const cache=await caches.open(AUDIO_CACHE);
  let done=0;
  for(const card of cards){
    try{
      const hit=await cache.match(card.audio);
      if(!hit){
        const res=await fetch(card.audio,{cache:'no-store'});
        if(!res.ok) throw new Error('HTTP '+res.status);
        await cache.put(card.audio,res.clone());
      }
      done++;
    }catch(e){ console.error(card.audio,e); }
    document.getElementById('barFill').style.width=(done/cards.length*100)+'%';
    st.textContent=`正在缓存 ${done}/48`;
  }
  btn.disabled=false; btn.textContent='⬇ 重新下载离线音频';
  await updateOfflineUI();
};

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(console.error);
}
render();
updateOfflineUI();
