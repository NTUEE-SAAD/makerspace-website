import { google } from "googleapis";

export const GoogleAuth = async () => {
  const auth = await google.auth.getClient({
    keyFile: "./utility/service_key.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheet = google.sheets({ version: "v4", auth });
  const request = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: "1gu6iFqnpXDaBJOP98CP_iBf2gMbqoI_AuKxqVF35P0o",
    // The A1 notation of the values to retrieve.
    range: `A2:D`,
    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: "FORMATTED_VALUE",
    //The major dimension that results should use.
    majorDimension: "ROWS",
  };
  return { sheet, request };
};
