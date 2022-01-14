const contentGenerator = ({ data }) => {
  console.log(data.instrument);
  return `<!DOCTYPE html><html>${data.user}同學您好:
      您在${data.date}在電機系makerspace預約了以下資源:
      ${data.reservationDate}使用${data.instrument}, 您的預約id為${data.id}, 如需更改預約時間請利用此id進行更改</html>`;
};
const subjectGenerator = () => {
  return "MakerSpace預約成功通知訊息";
};
export { contentGenerator, subjectGenerator };
