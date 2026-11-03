# 📊 CALM MIND - Official Database & Integration Package

This package contains the complete database schema, sample seed data, and Google Apps Script integration code for the CALM MIND official platform.

## 📁 Package Contents

1. `schema.sql`: SQL database schema for MySQL / PostgreSQL / SQLite.
2. `feedbacks.json`: Seed dataset for user reviews & feedback records.
3. `feedbacks.csv`: CSV export format for spreadsheet import (Excel, Google Sheets).
4. `sessions.json`: Seed dataset for user meditation & breathing sessions.
5. `sessions.csv`: CSV format for meditation sessions.
6. `google-apps-script.js`: Complete Google Apps Script backend code for Google Sheets sync.
7. `SETUP_GUIDE.md`: Step-by-step instructions to connect Google Sheets and manage data.

## 🚀 Quick Setup for Google Apps Script
1. Go to your Google Apps Script project:
   `https://script.google.com/u/0/home/projects/1-2MnQPXGL7URmUeGj3nmTaOM4IK8SzszTAtxJJjNd8DglIYO1capOLNp/edit`
2. Paste the contents of `google-apps-script.js` into your project's `Code.gs`.
3. Click "Deploy" -> "New deployment" -> Select "Web app".
4. Set "Who has access" to "Anyone" and click Deploy.
5. Copy the generated Web App URL and paste it into the "Data Base" modal on your CALM MIND website.
