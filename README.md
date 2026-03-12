# CardioInsight — Heart Disease Analysis

A full-stack data analytics web application that presents interactive heart disease visualizations built on the **CDC BRFSS 2020** dataset (319,795 records). The project combines a **Flask** web server with **Tableau Public** embedded dashboards to explore cardiovascular health risk factors.

---

## Project Structure

```
Heart-Disease-Analysis/
├── flaskApp/               # Flask web application
│   ├── app.py              # Routes and Tableau embed URLs
│   ├── requirements.txt    # Python dependencies
│   ├── templates/          # Jinja2 HTML templates
│   └── static/             # CSS, JS, images
├── data/
│   ├── heart.xlsx          # Raw CDC BRFSS 2020 dataset
│   └── database/
│       ├── schema.sql      # MySQL table + view definitions
│       ├── queries.sql     # Exploratory SQL queries
│       └── load_data.py    # CSV → MySQL loader script
├── Tableau workbook/
│   └── Heart Disease.twbx  # Tableau packaged workbook
├── Document/               # Project documentation
└── video/                  # Demo video
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python 3, Flask 3 |
| Frontend | HTML, CSS, Vanilla JS |
| Visualizations | Tableau Public (embedded) |
| Dataset | CDC BRFSS 2020 (319,795 rows) |
| Optional DB | MySQL |

---

## Visualizations (10 Charts)

1. Gender vs Heart Disease
2. Age vs Heart Disease
3. Diabetic vs Stroke
4. Impact of Smoking and Alcohol on Heart Disease
5. Stroke vs Other Disease
6. Race-wise Heart Disease
7. General Health vs Heart Disease
8. Physical Activity vs Heart Disease
9. Age vs BMI vs Diabetic
10. People Who Got Stroke from Diabetes and Heart Disease

---

## Running the App

### 1. Set up a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r flaskApp/requirements.txt
```

### 3. Run the Flask server

```bash
cd flaskApp
python3 app.py
```

Open **http://127.0.0.1:5000** in your browser.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with dataset stats |
| `/about` | Heart disease background and risk factors |
| `/visualizations` | All 10 Tableau charts |
| `/dashboard` | Interactive Tableau dashboard |
| `/story` | Guided Tableau data story |
| `/contact` | Contact form |

---

## Dataset

Source: [CDC BRFSS 2020](https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease)  
Records: **319,795**  
Features: 18 (demographics, lifestyle, comorbidities)
