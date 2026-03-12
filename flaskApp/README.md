# flaskApp

The Flask web application that serves the CardioInsight frontend.

## Structure

```
flaskApp/
├── app.py              # Application entry point — routes + Tableau URLs
├── requirements.txt    # Python package dependencies
├── templates/          # Jinja2 HTML templates
│   ├── base.html       # Shared layout (navbar, footer)
│   ├── index.html      # Home / landing page
│   ├── about.html      # About heart disease + risk factors
│   ├── visualizations.html  # All 10 Tableau charts
│   ├── dashboard.html  # Interactive Tableau dashboard
│   ├── story.html      # Guided Tableau data story
│   └── contact.html    # Contact form
└── static/
    ├── css/style.css   # All site styles
    ├── js/main.js      # Navigation, modal, scroll animations
    └── images/         # Static image assets
```

## Running

```bash
# From the project root
source .venv/bin/activate
cd flaskApp
python3 app.py
```

Server starts at **http://127.0.0.1:5000** with debug/hot-reload enabled.

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/visualizations` | Visualizations page |
| GET | `/dashboard` | Dashboard page |
| GET | `/story` | Story page |
| GET | `/contact` | Contact page |
| POST | `/submit-contact` | Contact form handler (returns JSON) |

## Dependencies

| Package | Version |
|---------|---------|
| Flask | ≥ 3.0 |
| Werkzeug | ≥ 3.0 |

Upgrade note: Flask 2.x is incompatible with Python 3.14+. Use Flask ≥ 3.0.

