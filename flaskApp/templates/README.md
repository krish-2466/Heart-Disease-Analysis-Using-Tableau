# templates/

Jinja2 HTML templates for the CardioInsight Flask app.

| File | Route | Description |
|------|-------|-------------|
| `base.html` | — | Base layout inherited by all pages. Contains navbar, footer, font imports and CSS/JS links. |
| `index.html` | `/` | Landing page with hero section, dataset stats and features overview. |
| `about.html` | `/about` | Background on heart disease, global statistics and the 6 key risk factors. |
| `visualizations.html` | `/visualizations` | Grid of all 10 embedded Tableau charts with fullscreen modal support. |
| `dashboard.html` | `/dashboard` | Full interactive Tableau dashboard with sidebar legend and key stats. |
| `story.html` | `/story` | Embedded Tableau data story with a narrative walkthrough. |
| `contact.html` | `/contact` | Contact form that POSTs to `/submit-contact` and returns a JSON response. |

All templates extend `base.html` using `{% extends "base.html" %}` and fill `{% block content %}{% endblock %}`.
