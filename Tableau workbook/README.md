# Tableau workbook/

Contains the packaged Tableau workbook for the CardioInsight project.

## File

### `Heart Disease.twbx`
A Tableau packaged workbook (`.twbx`) that bundles the workbook and data source together. Opening this file in Tableau Desktop or Tableau Public (Windows/Mac) gives access to all sheets.

## Sheets included

| # | Sheet Name | Description |
|---|------------|-------------|
| 1 | GendervsHeartdisease | Heart disease prevalence split by gender |
| 2 | AgevsHeartdisease | Disease rate across age categories |
| 3 | DiabeticvsStroke | Cross-analysis of diabetes and stroke |
| 4 | ImpactofsmokingandalcoholonHeartdisease | Lifestyle risk factor impact |
| 5 | StrokevsOtherDisease | Stroke vs other comorbidities |
| 6 | RacewiseHeartDisease | Prevalence across racial groups |
| 7 | GeneralHealthvsHeartDisease | Self-reported health vs diagnosis |
| 8 | PhysicalActivityvsHeartDisease | Activity level impact on heart disease |
| 9 | AgevsBMIvsDiabetic | Three-variable correlation chart |
| 10 | PeopleGotStrokeFromDiabetesandHeartDisease | Subset analysis |
| — | Dashboard1 | Combined interactive dashboard |
| — | Story1 | Guided narrative data story |

## Publishing to Tableau Public

To publish under your own Tableau Public account (requires Windows or Mac):

1. Open `Heart Disease.twbx` in **Tableau Public** (free desktop app)
2. Sign in: **File → Sign in to Tableau Public**
3. Publish: **File → Save to Tableau Public As…**
4. Copy your new embed URLs and update `flaskApp/app.py`

> Linux users: Use the Tableau Public web uploader or a Windows/Mac machine to publish the workbook.
