

(function(window) {
  var svgSprite =
    '<svg>' +
    '<symbol id="icon-error" viewBox="0 0 1024 1024">' +
    '<path d="M480 64C217.6 64 0 281.6 0 544s217.6 480 480 480 480-217.6 480-480S742.4 64 480 64z m204.8 614.4c19.2 19.2 19.2 44.8 0 64-19.2 19.2-44.8 19.2-64 0L486.4 608 345.6 748.8c-19.2 19.2-51.2 19.2-70.4 0-19.2-19.2-19.2-51.2 0-70.4L416 537.6 281.6 403.2c-19.2-19.2-19.2-44.8 0-64 19.2-19.2 44.8-19.2 64 0L480 473.6l140.8-140.8c19.2-19.2 51.2-19.2 70.4 0 19.2 19.2 19.2 51.2 0 70.4L550.4 544l134.4 134.4z" p-id="3203">'+
    '</path>' +
    '</symbol>'+
    '<symbol id="icon-logo" viewBox="0 0 1024 1024">'+
    '<path d="M297.803294 969.065412a30.117647 30.117647 0 1 1 0-60.235294h428.393412a30.117647 30.117647 0 0 1 0 60.235294H297.803294zM150.588235 60.235294a60.235294 60.235294 0 0 0-60.235294 60.235294v556.272941a60.235294 60.235294 0 0 0 60.235294 60.235295h722.82353a60.235294 60.235294 0 0 0 60.235294-60.235295V120.470588a60.235294 60.235294 0 0 0-60.235294-60.235294H150.588235z m0-60.235294h722.82353a120.470588 120.470588 0 0 1 120.470588 120.470588v556.272941a120.470588 120.470588 0 0 1-120.470588 120.470589H150.588235a120.470588 120.470588 0 0 1-120.470588-120.470589V120.470588a120.470588 120.470588 0 0 1 120.470588-120.470588z" p-id="684"></path>'+
    '<path d="M403.275294 382.313412L237.748706 532.48a30.117647 30.117647 0 0 1-40.478118-44.574118l178.657883-162.153411a42.164706 42.164706 0 0 1 59.030588 2.228705l129.385412 137.09553 219.196235-257.867294a30.117647 30.117647 0 0 1 45.899294 39.03247L597.172706 519.469176c-1.505882 1.807059-1.505882 1.807059-3.132235 3.373177a42.164706 42.164706 0 0 1-59.632942-1.686588L403.275294 382.313412z" p-id="685"></path>'+
    '</symbol>'+
    '<symbol id="icon-back" viewBox="0 0 1024 1024">'+
    '<path d="M1008.48 496.48c-8.544 0-15.52 6.976-15.52 15.52 0 265.216-215.744 480.96-480.96 480.96-265.248 0-480.96-215.744-480.96-480.96 0-265.216 215.744-480.992 480.96-480.992 8.544 0 15.52-6.944 15.52-15.488C527.52 6.912 520.544 0 512 0c-282.336 0-512 229.664-512 512s229.696 512 512 512c282.304 0 512-229.76 512-512C1023.968 503.424 1017.024 496.48 1008.48 496.48zM513.408 337.984c6.208-5.92 6.4-15.712 0.48-21.952-5.952-6.144-15.744-6.368-21.952-0.48l-180.768 173.248c-0.032 0.032-0.064 0.096-0.096 0.128-0.032 0.032-0.096 0.064-0.128 0.096-0.64 0.64-0.928 1.44-1.44 2.176-0.672 0.928-1.44 1.824-1.888 2.848-0.288 0.736-0.288 1.536-0.48 2.304-0.288 1.184-0.672 2.304-0.672 3.52 0 0.832 0.288 1.6 0.416 2.4 0.16 1.152 0.224 2.336 0.672 3.424 0.32 0.8 0.96 1.44 1.376 2.208 0.608 0.96 0.992 2.016 1.824 2.848 0.032 0.032 0.096 0.064 0.16 0.096 0.032 0.032 0.032 0.064 0.064 0.096l175.552 175.552c3.04 3.072 7.008 4.576 10.976 4.576 3.968 0 7.936-1.504 10.944-4.576 6.048-6.048 6.048-15.872 0-21.888l-146.784-146.848 363.68 0c8.576 0 15.52-6.944 15.52-15.488 0-8.576-6.976-15.52-15.52-15.52L358.176 486.752 513.408 337.984z" p-id="1034"></path>'+
    '</symbol>'+
  ('</svg>');
  var script = (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  var shouldInjectCss = script.getAttribute('data-injectcss');
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function() {
          document.removeEventListener('DOMContentLoaded', loadFn, false);
          fn();
        };
        document.addEventListener('DOMContentLoaded', loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }
    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        init = function() {
          if (!done) {
            done = true;
            fn();
          }
        };
      var polling = function() {
        try {
          d.documentElement.doScroll('left');
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }
        init();
      };
      polling();
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };
  var before = function(el, target) {
    target.parentNode.insertBefore(el, target);
  };
  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement('div');
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName('svg')[0];
    if (svg) {
      svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = 'hidden';
      prepend(svg, document.body);
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  ready(appendSvg);
})(window);
