(function() {
  (function($) {
    var loadSwiftype, renderContent, renderMath, setFancybox;
    if ((typeof performFancybox !== "undefined" && performFancybox !== null) && performFancybox) {
      setFancybox = function() {
        return $('.article-content img').each(function() {
          var image, imageLink;
          image = $(this);
          imageLink = image.parent('a');
          if (imageLink.size() < 1) {
            imageLink = image.wrap('<a href="' + this.getAttribute('src') + '"></a>').parent('a');
          }
          return imageLink.fancybox();
        });
      };
    } else {
      setFancybox = function() {};
    }
    if (typeof doRenderMath !== "undefined" && doRenderMath !== null) {
      switch (doRenderMath) {
        case 'katex':
          renderMath = function() {
            return renderMathInElement(document.getElementById('content'), {
              delimiters: [
                {
                  left: "$$",
                  right: "$$",
                  display: true
                }, {
                  left: "\\[",
                  right: "\\]",
                  display: true
                }, {
                  left: "$",
                  right: "$",
                  display: false
                }, {
                  left: "\\(",
                  right: "\\)",
                  display: false
                }
              ]
            });
          };
          break;
        case 'mathjax':
          renderMath = function() {};
      }
    } else {
      renderMath = function() {};
    }
    if (typeof swiftypeKey !== "undefined" && swiftypeKey !== null) {
      loadSwiftype = function() {
        (function(w, d, t, u, n, s, e) {
          w['SwiftypeObject'] = n;
          w[n] = w[n] || function() {
            (w[n].q = w[n].q || []).push(arguments);
          };
          s = d.createElement(t);
          e = d.getElementsByTagName(t)[0];
          s.async = 1;
          s.src = u;
          e.parentNode.insertBefore(s, e);
        })(window, document, 'script', '//s.swiftypecdn.com/install/v2/st.js', '_st');
        return _st('install', swiftypeKey, '2.0.0');
      };
    } else {
      loadSwiftype = function() {};
    }
    renderContent = function() {
      setFancybox();
      renderMath();
      return loadSwiftype();
    };
    $('#search-icon').click(function() {
      return $('#search-input').toggle('fast', function() {
        $(this).toggleClass('hidden');
        if (!$('#search-input').hasClass('hidden')) {
          return $('#search-input').focus();
        }
      });
    });
    return $(document).on('click', '.comments-switch-duoshuo', function() {
      var comments, el;
      comments = $('#duoshuo_thread');
      if (comments.has('div').length > 0) {
        comments.toggle('fast');
        return;
      }
      el = document.createElement('div');
      el.setAttribute('data-thread-key', $(this).attr('key'));
      el.setAttribute('data-url', $(this).attr('url'));
      el.setAttribute('data-author-key', $(this).attr('duoshuo'));
      DUOSHUO.EmbedThread(el);
      return comments.append(el).hide().fadeIn('');
    }).on('click', '.extra-switch', function() {
      return $('.extra').toggle('fast');
    }).pjax('a', '#content', {
      fragment: '#content',
      timeout: 10000
    }).on('pjax:send', function() {
      return $('#content').fadeTo(0, 0);
    }).on('pjax:complete', function() {
      $('#content').fadeTo('fast', 1);
      renderContent();
      if (typeof ga !== "undefined" && ga !== null) {
        ga('set', 'location', window.location.href);
        return ga('sent', 'pageview');
      }
    }).ready(function() {
      return renderContent();
    });
  })(jQuery);

}).call(this);
