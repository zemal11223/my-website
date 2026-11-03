/**
 * CALM MIND - Official Google Apps Script Integration Backend
 * Project Link: https://script.google.com/u/0/home/projects/1-2MnQPXGL7URmUeGj3nmTaOM4IK8SzszTAtxJJjNd8DglIYO1capOLNp/edit
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Apps Script project link above.
 * 2. Copy and paste all the code in this file into `Code.gs`.
 * 3. Click "Deploy" (blue button at top right) -> "New deployment".
 * 4. Select type: "Web app".
 * 5. Set:
 *    - Description: "Calm Mind Live Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (crucial so website visitors can submit feedback)
 * 6. Click "Deploy" and authorize access when prompted.
 * 7. Copy the generated "Web App URL" (ends with /exec).
 * 8. Open your CALM MIND website, click "📊 Data Base" -> "Google Sheet Sync",
 *    paste your Web App URL and click "Save Web App URL".
 * Done! Any feedback submitted will instantly append to your Google Sheet!
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var parsed = JSON.parse(rawData);
    var ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create("Calm Mind Database Records");

    // 1. Ensure Feedback Sheet exists
    var feedbackSheet = ss.getSheetByName("Feedbacks");
    if (!feedbackSheet) {
      feedbackSheet = ss.insertSheet("Feedbacks");
      feedbackSheet.appendRow(["ID", "Date", "Name", "Email", "Rating", "Message", "Timestamp"]);
      feedbackSheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#8ef0b6");
    }

    // 2. Ensure Sessions Sheet exists
    var sessionSheet = ss.getSheetByName("Sessions");
    if (!sessionSheet) {
      sessionSheet = ss.insertSheet("Sessions");
      sessionSheet.appendRow(["ID", "Date", "Mood", "Session Type", "Duration (sec)", "Completed", "Timestamp"]);
      sessionSheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#a8d8ff");
    }

    if (parsed.type === "feedback") {
      var fb = parsed.data;
      feedbackSheet.appendRow([
        fb.id || "",
        fb.date || new Date().toISOString(),
        fb.name || "Anonymous",
        fb.email || "",
        fb.rating || 5,
        fb.message || "",
        new Date()
      ]);
    } else if (parsed.type === "bulk_sync") {
      if (parsed.feedbacks && parsed.feedbacks.length > 0) {
        parsed.feedbacks.forEach(function(item) {
          feedbackSheet.appendRow([
            item.id || "",
            item.date || "",
            item.name || "",
            item.email || "",
            item.rating || 5,
            item.message || "",
            new Date()
          ]);
        });
      }
      if (parsed.sessions && parsed.sessions.length > 0) {
        parsed.sessions.forEach(function(sess) {
          sessionSheet.appendRow([
            sess.id || "",
            sess.date || "",
            sess.mood || "",
            sess.type || "",
            sess.durationSec || 0,
            sess.completed ? "Yes" : "No",
            new Date()
          ]);
        });
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "online",
      message: "Calm Mind Google Apps Script Webhook is active and running."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
