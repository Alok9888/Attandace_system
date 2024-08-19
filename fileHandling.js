const fs = require("fs");

function appendData(filePath, content) {
  fs.readFile(filePath, 'utf8', (err, data) => {
      let existingData = [];
      if (!err) {
          try {
              existingData = JSON.parse(data);
          } catch (e) {
              console.error("Error parsing JSON data:", e);
          }
      }

      if (!Array.isArray(existingData)) {
          existingData = [];
      }

      // Log the content before appending it
      console.log("Appending content:", content);

      existingData.push(content);

      fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
          if (err) {
              console.error("Error writing the file:", err);
          } else {
              console.log("File updated successfully");
          }
      });
  });
}


module.exports = { appendData };