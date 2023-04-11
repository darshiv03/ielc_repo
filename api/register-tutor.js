import { google } from "googleapis";

export default async function tutorRegistration(req, res){
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
                ["john", "doe", "jd@j.com", "UCDavis", "this is why", "my goals are", 4, "no questions"],
                another_array_of_data
            ]
        }
        */
        const response = await googleSheet.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: 'tutors!A:H',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: user_data
            }
        })
        res.send(response)
    }
}