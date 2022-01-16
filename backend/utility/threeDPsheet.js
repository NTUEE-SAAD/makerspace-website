import { google } from "googleapis";

export const threeDPAuth = async () => {
  const auth = await google.auth.getClient({
    keyFile: "./utility/service_key.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets({ version: "v4", auth });
  const request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: "1R1reHQqborbc8wqWD-M7U9i8tNFgOLmks2FvpdFBSBQ",
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
