function onChat(RollNo,SheetsId,SheetsName,userQuery) {
  // return `${userData[3]}${userData[4]}`
  var categoryRow=Array(Sheets.Spreadsheets.Values.get(SheetsId,`${SheetsName}!A1:A`).values)[0].findIndex(userQuery[0]);
  // Logger.log(Sheets.Spreadsheets.Values.get(userData[3],`${userData[4]}!A1:A`).values)
  if(categoryRow){
    var categorySS=Sheets.Spreadsheets.Values.get(SheetsId,`${SheetsName}!A${categoryRow}:Z${categoryRow}`).values[0];
    if(categorySS[3]=='1' && categorySS[4]!='-1')
      return getData(categorySS,userQuery,RollNo)
    if(categorySS[4]=='-1')
      return getData(categorySS,userQuery,userQuery[1])
    userQuery.shift();
    return onChat(RollNo,categorySS[1],categorySS[2],userQuery)
    
  }
  else{
    return `${String(userQuery[0])} not found`
  }
}
