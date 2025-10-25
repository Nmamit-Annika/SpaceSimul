
(function () {
  const holder = document.getElementById("demo-holder");
  if(!holder) return;
  holder.innerHTML = `
    <div class="embed-wrap" style="position:relative;width:100%;height:0;padding-bottom:56.25%;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.12)">
      <iframe title="Solar system" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" loading="lazy"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        style="position:absolute;inset:0;width:100%;height:100%"
        src="https://sketchfab.com/models/96e701793bca476fac958985ee256a99/embed">
      </iframe>
    </div>
    <p style="font-size:12px;color:#9aa4b2;margin-top:8px">
      Model via Sketchfab. 
    </p>
  `;
})();
