//http://closure-compiler.appspot.com/home

function removeOverlayipb336310() {
  var o = document.getElementById('omipb3363199');
  if (o) {
    o.style.opacity = 0.0;
    o.parentNode.removeChild(document.getElementById('omipb3363199'));
  }
}

if (!document.getElementById('omipb3363199')) {

  var o=document.createElement('div');
  o.setAttribute('id', 'omipb3363199');
  var textStyle =
  "-webkit-text-size-adjust: none; " +
  "font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif; font-weight: bold; " +
  "line-height: 1.0; letter-spacing: normal; font-variant: normal; font-style: normal;"
  ;
  o.setAttribute('style',
  "position: fixed; z-index: 2147483647; left: 0; top: 0; width: 100%; height: 100%; font-size: 25px; " +
  "opacity: 0.9; -webkit-transition: opacity 0.25s linear; text-align: center; " +
  "padding: 200px 0 0 0; margin: 0; background-color: #333; color: #F2F2F2; " +
  textStyle
  );
  var o1 = document.createElement('span');
  o1.setAttribute('id', 'omipb3363199');
  o1.setAttribute('style', textStyle);
  o1.appendChild(document.createTextNode("Save This! "+String.fromCharCode(8594)));
  o.appendChild(o1);
  o1 = document.createElement('div');
  o1.setAttribute('id', 'ocipb336310');
  o1.setAttribute('style', 'cursor:pointer;margin: 35px auto; width: 120px; font-size: 15px; padding: 10px; color: #ccc; background-color: black; border: 1px solid #aaa;');
  o1.setAttribute('onclick', 'removeOverlayipb336310();');
  o1.appendChild(document.createTextNode("Cancel"));
  o.appendChild(o1);
  document.body.appendChild(o);
  window.location = "http://facebookmarklet.com/?url="+encodeURIComponent(window.location.href);
}
