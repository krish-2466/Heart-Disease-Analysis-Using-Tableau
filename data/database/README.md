# data/database/

Optional MySQL database setup for local data exploration.

> The Flask web app does **not** require a database — it uses embedded Tableau Public URLs. This folder is for running raw SQL analysis locally.

## Files

### `schema.sql`
Creates the `heart_disease_db` database, the `patient_data` table and a `heart_disease_stats` view.

```bash
mysql -u root -p < schema.sql
```

### `load_data.py`
Loads the CSV/Excel dataset into the MySQL database in batches of 1000 rows.

Requires a `config.ini` file in the `data/` folder:

```ini
[DATABASE]
host     = localhost
user     = root
password = yourpassword
database = heart_disease_db
port     = 3306
```

Then run:

```bash
pip install mysql-connector-python pandas
python3 load_data.py ../heart.xlsx
```

### `queries.sql`
A collection of exploratory SQL queries covering:
- Overall dataset statistics
- Gender-wise heart disease distribution
- Age group breakdown
- BMI and smoking correlations
- Race-wise prevalence
- Comorbidity analysis (diabetes, stroke, kidney disease)

```bash
mysql -u root -p heart_disease_db < queries.sql
```

