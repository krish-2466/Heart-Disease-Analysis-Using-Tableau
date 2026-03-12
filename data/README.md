# data/

Dataset and database utilities for the CardioInsight project.

## Files

### `heart.xlsx`
The raw dataset used for all Tableau visualizations.

- **Source:** CDC Behavioral Risk Factor Surveillance System (BRFSS) 2020
- **Records:** 319,795 survey responses
- **Features:** 18 columns

| Column | Type | Description |
|--------|------|-------------|
| HeartDisease | Binary | Target variable — has heart disease |
| BMI | Float | Body Mass Index |
| Smoking | Binary | Smoked ≥ 100 cigarettes in lifetime |
| AlcoholDrinking | Binary | Heavy drinker |
| Stroke | Binary | History of stroke |
| PhysicalHealth | Int | Days of poor physical health (past 30 days) |
| MentalHealth | Int | Days of poor mental health (past 30 days) |
| DiffWalking | Binary | Difficulty walking or climbing stairs |
| Sex | Categorical | Male / Female |
| AgeCategory | Categorical | Age in 5-year bands |
| Race | Categorical | Race / ethnicity |
| Diabetic | Categorical | Diabetic status |
| PhysicalActivity | Binary | Physical activity in past 30 days |
| GenHealth | Categorical | Self-reported general health |
| SleepTime | Float | Average hours of sleep per night |
| Asthma | Binary | Has asthma |
| KidneyDisease | Binary | Has kidney disease |
| SkinCancer | Binary | Has skin cancer |

## database/

Optional MySQL integration — see [database/README.md](database/README.md).
