document.querySelector('nav').innerHTML = ` 
<div> 
    <h3><a href="../index.html">Sean Stempler</a></h3>
</div>
<ul>
    <li class="dropdown">
        <button class="drop-button">Projects
            <i>▼</i>
        </button>
        <div class="drop-content">
            <a href="/html/web_dev.html">Web Development</a>
            <a href="/html/design.html">Graphic Design</a>
            <a href="/html/video_editing.html">Video Editing</a>
        </div>
    </li>
    <li id="li_toggle"><a href="#" onclick="dark_toggle()"><img src="/assets/darkmode-nav.png" id="toggle-button"></a></li>
</ul>
</div>
`