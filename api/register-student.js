import { google } from "googleapis";

export default async function handler(req, res){
    const auth = new google.auth.GoogleAuth({
        keyFile: 'api-cred.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    })

    const client = await auth.getClient
    const googleSheet = google.sheets({version: 'v4', auth: client})
    const spreadsheetId = '1pshedkf6wLx8CQRGea4szQILU6qIXgTjuCQaqnAjsaw'
    if(req.method !== 'POST'){
        //accessing the sheet:
        /*const getMetaData= await googleSheet.spreadsheets.get({
            auth,
            spreadsheetId,
        })
        res.send(getMetaData)*/
        
        //reading values from the sheet w/o useless info:
        const getSheetData = await googleSheet.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: 'Sheet1!A2:G'
        })
        res.send(getSheetData.data.values)

    } else{
        const user_data = req.body.values
        /* req body example:
        {
            "values": [
                ["jay", "justin", "jj@j.com", 54689, 4, 3],
                another_array_of_data
            ]
        }
        */

        const response = await googleSheet.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: 'Sheet1!A2:F',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: user_data
            }
        })
        res.send(response)
    }
}

/*const student_name = req.body.student, parent_name = req.body.parent, parent_email = req.body.email, parent_phno = req.body.phno
        const grade = req.body.grade, group = req.body.group, additional = req.body.addn
        const user_data = [student_name, parent_name,  parent_email, parent_phno, grade, group, additional]
        */