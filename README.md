# Calm Mind - Official Emotional Wellness & Meditation Platform

## Netlify Deployment Guide (Solving the "Page Not Found 404" Error)

### Kyun Aaya Tha 404 Error?
Netlify par jab aap zip file upload karte hain ("Drag and drop your site output folder here"), toh Netlify zip ke root par **`index.html`** dhoondta hai:
* Pehle jo file upload hui thi (`calm-mind-database.zip`), usme sirf database files (CSV, JSON, SQL) theen aur koi `index.html` nahi thi.
* Is wajah se Netlify site ko load nahi kar saka aur **"Page not found / 404"** error aa gaya.

---

### Netlify Par Kaise Upload Karein (Step-by-Step)

Aap ke liye deployment zip file **`calm-mind-website.zip`** ready kar di gayi hai, jisme root par `index.html`, `calm-mind-database.zip`, aur Netlify configuration (`_redirects` aur `netlify.toml`) mojood hain.

#### Option 1: `calm-mind-website.zip` Drag & Drop Karna (Recommended)
1. Netlify dashboard ([app.netlify.com](https://app.netlify.com/)) par login karein.
2. **"Sites"** section par jayein.
3. Wahan neeche **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"** ka box hoga.
4. **`calm-mind-website.zip`** file ko drag kar ke wahan drop kar dein.
5. Netlify chand seconds me deploy kar ke aapko live site ka link (e.g., `https://random-name.netlify.app`) de dega.

#### Option 2: Folder Drag & Drop Karna
Agar aap zip ke bajaye seedha folder drop karna chahte hain:
1. Is repository / project ke folder ko kholein jahan `index.html` mojood hai.
2. Poore folder ko drag karke Netlify ke drop area me chhor dein.
*(Dhyan rahe ke `index.html` seedha folder ke pehle level par honi chahiye).*

---

### Files Included in the Website Package
* `index.html` - The complete Calm Mind single-page web app.
* `calm-mind-database.zip` - Downloadable database package linked inside the website.
* `_redirects` - Redirects rule for Netlify to ensure clean routing without 404 errors.
* `netlify.toml` - Netlify build and redirect configuration.
* `calm-mind-database-package/` - Database schemas, sample CSV/JSON data, and Google Apps Script sync code.
