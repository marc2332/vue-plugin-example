document.addEventListener("graviton_loaded",()=>{
    new Panel({
        content:"<div id=app></div>"
    })
    const requireDir = require('require-dir');
    const dir = requireDir('./dist/js');
})