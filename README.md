# EndoRisk — Endocrine Risk Visualization

> An interactive, fully transparent **educational** tool that maps clinical biomarkers and symptoms onto four endocrine conditions and renders the result as a living, holographic 3D endocrine system.

**Live site:** `https://<your-username>.github.io/<your-repo>/`

> **Educational demonstration only.** EndoRisk uses transparent, hand-specified scoring rules built on published clinical reference ranges. It does **not** use trained machine-learning models, was **not** validated against patient outcomes, reports **no** diagnostic-accuracy metrics, and is **not** a medical device. It must not be used for diagnosis, screening, or any clinical decision-making.

---

## What it is

EndoRisk takes twelve clinical biomarker values and twelve weighted symptoms and produces a real-time risk index for four endocrine conditions. The centerpiece is a Three.js holographic endocrine system whose organs glow, pulse, and change color by risk band, connected by animated hormone-axis pathways. Every score traces back to a documented rule — there is no hidden model.

It is built to **teach and visualize**, not to diagnose. The scoring math has the shape of logistic regression, but the coefficients were chosen **by hand** to reflect textbook clinical relationships; they were not learned from data, and the output is an illustrative index rather than a calibrated probability.

---

## Features

| Feature | Description |
|---|---|
| Holographic 3D system | Three.js endocrine field — organs pulse and shift color by risk; animated HPT / HPA / pancreatic axes |
| 4 condition models | Thyroid dysfunction, type 2 diabetes, metabolic syndrome, adrenal insufficiency |
| 12 biomarkers | TSH, Free T4/T3, glucose, HbA1c, insulin, BMI, cortisol, ACTH, DHEA-S, triglycerides, HDL |
| Symptom engine | 12 weighted clinical symptoms feeding the relevant condition scores |
| Intervention simulator | Shift a biomarker, see the projected change across all four indices |
| Patient comparison | Two profiles side by side with comparative charts |
| Clinical report | Clean, print-ready summary with charts, a biomarker table, and an auto-written narrative |
| Trajectory view | Risk indices across simulated longitudinal visits |
| Transparent scoring | Every coefficient is documented on the About page |
| Zero data egress | All computation is local — nothing leaves the browser |

---

## Conditions & reference framing

- **Thyroid dysfunction** — TSH, Free T4, Free T3 · ATA (Jonklaas et al., 2014)
- **Type 2 diabetes** — fasting glucose, HbA1c, BMI, fasting insulin · ADA Standards of Medical Care (2024)
- **Metabolic syndrome** — triglycerides, HDL, BMI, glucose · NCEP ATP III / IDF (2009)
- **Adrenal insufficiency** — AM cortisol, ACTH, DHEA-S · Endocrine Society (Bornstein et al., 2016)

The reference ranges and diagnostic thresholds used to anchor the rules come from these published guidelines. EndoRisk does not reproduce or claim the performance of any model trained on any dataset.

---

## Scoring pipeline

1. Biomarker input (12 clinical values).
2. Standardize each value as a signed distance from its clinical reference midpoint.
3. Combine with **hand-specified** weights (plus symptom increments).
4. Logistic (sigmoid) transform → 0–1 index.
5. Stratify: Low (<25%), Moderate (25–50%), Elevated (>50%).

The full coefficient tables are published on `about.html`.

---

## Tech stack

- **3D:** Three.js r128 · **Charts:** Chart.js 4.4.1
- **Scoring:** transparent rule-based JavaScript (client-side)
- **Hosting:** GitHub Pages (static, zero backend)
- **Privacy:** all computation local; no data transmitted or stored

---

## Pages

- `index.html` — landing page (animated constellation background, overview)
- `app.html` — full dashboard with the 3D endocrine field and all tools
- `report.html` — clinical report generator with PDF export
- `about.html` — complete methodology, coefficient tables, limitations, references
- `404.html` — custom not-found page

Each page is self-contained — no shared CSS/JS files are required.

---

## Clinical references

1. American Diabetes Association (2024). Standards of Medical Care in Diabetes. *Diabetes Care*, 47(Suppl. 1).
2. Jonklaas, J. et al. (2014). ATA Guidelines for Hypothyroidism Treatment. *Thyroid*, 24(12).
3. Alberti, K.G. et al. (2009). Harmonizing the Metabolic Syndrome. *Circulation*, 120(16).
4. Expert Panel (NCEP) (2001). ATP III Executive Summary. *JAMA*, 285(19).
5. Bornstein, S.R. et al. (2016). Primary Adrenal Insufficiency. *JCEM*, 101(2).
6. Smith, J.W. et al. (1988). ADAP algorithm for diabetes onset prediction. *Proc. SCAMC*, 261–265.

---

## Author

**Aryan Shoaei** — Pre-medicine, University of Texas at Austin. An independent computational + clinical informatics project, built to learn, teach, and visualize.

---

*For research and educational purposes only. Not intended for clinical use or medical decision-making.*
