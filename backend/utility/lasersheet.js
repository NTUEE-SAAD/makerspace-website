import { google } from "googleapis";

export const LaserAuth = async () => {
  const auth = await google.auth.getClient({
    keyFile: "./utility/service_key.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets({ version: "v4", auth });
  const request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: "12zMiEx0sic-Un4ewlWqSOOuYWAvNu6_9jct9paKWHTs",
    // The A1 notation of the values to retrieve.
    range: `A:F`,
    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: "FORMATTED_VALUE",
    //The major dimension that results should use.
    majorDimension: "ROWS",
  };
  return { sheet, request };
};
