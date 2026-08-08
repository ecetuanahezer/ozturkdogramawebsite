// ============================================
// Öztürk Doğrama — site scripts
// (mobile nav, contact form, language toggle)
// ============================================

var LANG_KEY = 'ozturk-lang';
var DEFAULT_LANG = 'tr';

function getPath(obj, path) {
  return path.split('.').reduce(function (o, k) {
    return o && o[k] !== undefined ? o[k] : undefined;
  }, obj);
}

function applyTranslations(lang) {
  if (typeof TRANSLATIONS === 'undefined') return;
  var dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

  document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

  // Plain text content
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = getPath(dict, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  // HTML content (allows tags like &nbsp;)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var val = getPath(dict, el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var val = getPath(dict, el.getAttribute('data-i18n-placeholder'));
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  // Page title + meta description (page identified via <body data-page="...">)
  var page = document.body.getAttribute('data-page');
  if (page && dict[page] && dict[page].meta) {
    var titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.textContent = dict[page].meta.title;
    var descEl = document.getElementById('page-desc');
    if (descEl) descEl.setAttribute('content', dict[page].meta.desc);
  }

  // Toggle button shows the language you'd switch TO
  var toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'tr' ? 'EN' : 'TR';
}

function setLanguage(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  applyTranslations(lang);
}

function getCurrentLanguage() {
  var stored;
  try { stored = localStorage.getItem(LANG_KEY); } catch (e) {}
  return stored === 'en' || stored === 'tr' ? stored : DEFAULT_LANG;
}

document.addEventListener('DOMContentLoaded', function () {
  // Apply language on load
  applyTranslations(getCurrentLanguage());

  // Language toggle
  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var next = getCurrentLanguage() === 'tr' ? 'en' : 'tr';
      setLanguage(next);
    });
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('active', open);
    });
  }

  // Contact form -> mailto fallback (free, no backend needed)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var service = document.getElementById('service').value;
      var message = document.getElementById('message').value.trim();

      var subject = encodeURIComponent('Website Inquiry — ' + (service || 'General'));
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Service: ' + service + '\n\n' +
        'Message:\n' + message
      );

      window.location.href = 'mailto:iozturkdograma@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
