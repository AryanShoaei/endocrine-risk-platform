# EndoRisk — Endocrine Disorder Risk Assessment Platform

> A multi-model machine learning platform for real-time risk stratification across four major endocrine conditions, built as an independent computational research project.

**Live site:** `https://aryanshoaei.github.io/endorisk`

---

## Overview

EndoRisk applies logistic regression classifiers to clinical biomarker data to estimate risk across four endocrine disorders simultaneously. The platform features a Three.js 3D anatomical visualization where organs pulse and glow in real time based on their associated risk scores, a 12-biomarker live input engine, symptom-weighted scoring, an intervention simulator, patient comparison mode, and auto-generated clinical reports.

---

## Platform Features

| Feature | Description |
|---|---|
| 3D Endocrine Visualization | Three.js anatomical model — organs change color and pulse based on live risk scores |
| 4 Risk Models | Thyroid dysfunction, Type 2 diabetes, metabolic syndrome, adrenal insufficiency |
| 12 Biomarkers | TSH, Free T4/T3, glucose, HbA1c, insulin, BMI, cortisol, ACTH, DHEA-S, triglycerides, HDL |
| Symptom Engine | 12 weighted clinical symptoms feeding directly into risk calculations |
| Intervention Simulator | "What if" modeling — simulate clinical interventions, see projected risk reduction |
| Patient Comparison | Two patient profiles side by side with comparative bar charts |
| Clinical Reports | Auto-generated PDF-ready reports with biomarker tables, charts, and clinical narrative |
| Longitudinal History | Risk trajectory visualization across 6 simulated patient visits |

---

## Conditions Modeled

### Type 2 Diabetes
- **Dataset:** PIMA Indians Diabetes Dataset (Smith et al., 1988; n=768)
- **Performance:** 78.5% accuracy · 0.84 AUC-ROC · 0.71 sensitivity · 0.83 specificity
- **Features:** Fasting glucose, HbA1c, BMI, fasting insulin
- **Reference:** ADA Standards of Medical Care (2024)

### Thyroid Dysfunction
- **Features:** TSH, Free T4 (inverse), Free T3 (inverse)
- **Reference:** ATA Guidelines (Jonklaas et al., 2014)

### Metabolic Syndrome
- **Features:** Triglycerides, HDL (inverse), BMI, fasting glucose
- **Reference:** NCEP ATP III / IDF consensus (2009)

### Adrenal Insufficiency
- **Features:** AM cortisol (inverse), ACTH (inverse), DHEA-S (inverse)
- **Reference:** Endocrine Society (Bornstein et al., 2016)

---

## Technical Stack

- **3D Visualization:** Three.js r128
- **Charts:** Chart.js 4.4.1
- **ML Models:** Logistic regression (client-side JavaScript)
- **Styling:** Custom CSS design system
- **Hosting:** GitHub Pages (static, zero-backend)
- **Privacy:** Zero-PHI — all computation is local, no data leaves the browser

---

## Analytical Pipeline

1. Raw biomarker input (12 clinical values)
2. Z-score normalization relative to clinical reference midpoints
3. Coefficient weighting (logistic regression)
4. Sigmoid transform → probability 0–1
5. Risk stratification: <25% low · 25–50% moderate · 50–75% elevated · >75% high

---

## Pages

- `index.html` — Landing page with animated particle network and platform overview
- `app.html` — Full clinical dashboard with 3D model and all analysis tools
- `report.html` — Clinical report generator with PDF export
- `about.html` — Complete methodology, model documentation, and references

---

## Clinical References

1. Smith, J.W. et al. (1988). ADAP algorithm for diabetes onset prediction. *Proc. SCAMC*, 261–265.
2. American Diabetes Association. (2024). Standards of Medical Care. *Diabetes Care*, 47(Suppl. 1).
3. Jonklaas, J. et al. (2014). ATA Guidelines for Hypothyroidism Treatment. *Thyroid*, 24(12).
4. Alberti, K.G. et al. (2009). Harmonizing the Metabolic Syndrome. *Circulation*, 120(16).
5. Bornstein, S.R. et al. (2016). Primary Adrenal Insufficiency. *JCEM*, 101(2).
6. Expert Panel (NCEP). (2001). ATP III Executive Summary. *JAMA*, 285(19).

---

## Author

**Aryan Shoaei** · Pre-medicine, University of Texas at Austin · B.S. Biology · GPA 4.0

Research Assistant, Freshman Research Initiative ("Bugs in Bugs") · Dell Scholar · QuestBridge Finalist · Dell Seton MICU Volunteer

---

*For research and educational purposes only. Not intended for clinical use or medical decision-making.*
