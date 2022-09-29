import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID' : 'ktotjkjip09jsgg5sjj4hcd6ryoy3b',
        "Authorization": "Bearer 7dlg9ljwabfo1v008kmah5r8r4ch3y"
    }
})

/* 
    'Client-ID' : 'ktotjkjip09jsgg5sjj4hcd6ryoy3b'
    REDIRECT = 'https://127.0.0.1/'

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token

    LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=ktotjkjip09jsgg5sjj4hcd6ryoy3b&redirect_uri=https://127.0.0.1/&response_type=token

    */

export default api;