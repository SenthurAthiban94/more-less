export default ({
  id=Math.floor(Math.random() * 1000),
  text,
  isMobile=false,
  shortTo=100,
  moreText='Read more',
  lessText='Read less',
  continuous=false
})=>{
    if(!document) throw new Error("Can't find Document!");
    if(!text || (text.length<shortTo)) return text.trim();
    let replaceAt = (str,index,chr)=>{if(index > str.length-1) return str;return str.substr(0,index) + chr + str.substr(index+1);},
    continuousElement = continuous ? 'span' : 'div',limit=(shortTo-1);
    let script = document.createElement('script');
    script.innerHTML='function readMore'+id+'(){var dots = document.getElementById("readMore-dots-'+id+'");var moreText = document.getElementById("readMore-more-'+id+'");var btnText = document.getElementById("readMore-'+id+'");if (dots.style.display === "none") {dots.style.display = "inline";btnText.innerHTML = "'+moreText+'";moreText.style.display = "none";} else {dots.style.display = "none";btnText.innerHTML = "'+lessText+'";moreText.style.display = "inline";}}';
    document.head.appendChild(script);
    if(isMobile){
      let style = document.createElement('style');
      style.innerHTML='@media screen and (min-width: 600px){ #readMore-'+id+',#readMore-dots-'+id+'{display:none !important;} #readMore-more-'+id+'{display:inline!important;} }';
      document.head.appendChild(style);
    }
    text= replaceAt(text,limit,text[limit]+'<span id="readMore-dots-'+id+'">...</span><span id="readMore-more-'+id+'" style="display:none;">');
    text+='</span> <'+continuousElement+'><label onclick="readMore'+id+'()" id="readMore-'+id+'">'+moreText+'</label></'+continuousElement+'>';
    return text.trim();
}