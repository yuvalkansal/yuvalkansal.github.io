---
permalink: /assets/js/google-analytics-setup.js
---
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());

{% if site.google_analytics_ids %}
  // Configure multiple measurement IDs
  {% for measurement_id in site.google_analytics_ids %}
  gtag("config", "{{ measurement_id }}");
  {% endfor %}
{% else %}
  // Configure single measurement ID (fallback)
  gtag("config", "{{ site.google_analytics }}");
{% endif %}
