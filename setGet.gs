function setUpUser(datas,chatid) {
  var data=[]
  data=datas.split('/')
  var sheetdatas = Sheets.Spreadsheets.Values.get (IndexSheet,'Sheet1!A1:B').values;
  var row = sheetdatas.findIndexs(data)+1
  Logger.log(row+`Sheet1!E${row}`)
  return updateOneCell(IndexSheet,chatid,`Sheet1!C${row}`) 
}
function updateOneCell(spreadsheetId,value,range) {
  var request = {
      majorDimension: "ROWS",
      values: [[value]]
  };
  try {
  Sheets.Spreadsheets.Values.update(
      request,
      spreadsheetId,
      range,
      {valueInputOption: "USER_ENTERED"}
    );  
    sendText(value,'Thank You 🤩!')
    return 'What Queries do you have🤔?\n/question'      // Function to time.
    }
  catch (e) {
  // Logs an ERROR message.
  return 'please enter valid email id and roll number try again!'
  }
}

function getUserData(chatid) {
  var sheetdatas=Sheets.Spreadsheets.Values.get(IndexSheet,'Sheet1!C1:C').values;
  var row = sheetdatas.findIndex(chatid)
  if(row)
    return Sheets.Spreadsheets.Values.get(IndexSheet,`Sheet1!A${row}:E${row}`).values;
  return false
}
function getData(sheetData,userQuery,rollno){  
  var row=Array(Sheets.Spreadsheets.Values.get(sheetData[1],`${sheetData[2]}!A1:A`).values)[0].findIndex(rollno);
  if(row){
  var data=[];
  data.push(Sheets.Spreadsheets.Values.get(sheetData[1],`${sheetData[2]}!A${sheetData[3]}:Z`).values[0]);  
  data.push(Sheets.Spreadsheets.Values.get(sheetData[1],`${sheetData[2]}!A${row}:Z${row}`).values[0].replace(-1));
  if(userQuery.length>1){    
    return data.prity(userQuery[1].split(','));
  }
  return data.prity(null);
  }
  else{
    return 'user does not exist !';
  }
}
