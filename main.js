document.addEventListener("graviton_loaded",()=>{
    new Tab({
        id:"vue-plugin-example",
        data:"<div id=app></div>",
        type:"free",
        name:"vue-plugin-example"
    })
    const requireDir = require('require-dir');
    const dir = requireDir('./dist/js');
})