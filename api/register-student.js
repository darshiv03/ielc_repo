import { google } from "googleapis";

export default async function studentRegistration(req, res){
    const auth = new google.auth.GoogleAuth({
        keyFile: 'api-cred.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    })
    const client = await auth.getClient
    const googleSheet = google.sheets({version: 'v4', auth: client})
    const spreadsheetId = '1pshedkf6wLx8CQRGea4szQILU6qIXgTjuCQaqnAjsaw'
    if(req.method !== 'POST'){
        res.send('error')
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