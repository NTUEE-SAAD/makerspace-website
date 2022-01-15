const contentGenerator = ({ data }) => {
  console.log(data.instrument);
  return `<!DOCTYPE html>
  <html>
    <p>
      ${data.user}同學您好:<br/>
      您於${data.date}在電機系makerspace預約了以下資源:<br/>
      <table style="width:100%">
      <tr>
        <th>時間</th>
        <td>${data.reservationDate}</td>
      </tr>
      <tr>
        <th>使用機台</th>
        <td>${data.instrument}</td>
      </tr>
      <tr>
        <th>預約id</th>
        <td><a href="http://localhost:3000/">${data.id}</a></td>
      </tr>
      </table>
      如需更改預約時間請利用預約id進行更改
    <p>
  </html>`;
};
const subjectGenerator = () => {
  return "MakerSpace預約成功通知訊息";
};
export { contentGenerator, subjectGenerator };
