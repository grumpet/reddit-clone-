from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from spotipy.cache_handler import FlaskSessionCacheHandler
import os
from dotenv import load_dotenv
from flask import Flask , session  ,redirect , url_for,request , jsonify
from flask_cors import CORS
import logging
from users_crud import *

logging.basicConfig(filename='app.log', level=logging.INFO)
load_dotenv()
app = Flask(__name__)
CORS(app)
app.secret_key = os.environ.get('SECRET_KEY')
client_id = os.environ.get('CLIENT_ID')
client_secret = os.environ.get('CLIENT_SECRET') 
redirect_uri = os.environ.get('REDIRECT_URI')
scope = "playlist-read-private,playlist-read-collaborative,user-library-read,user-read-private,user-read-email,user-read-recently-played,user-top-read"

cache_handler = FlaskSessionCacheHandler(session)
sp_auth = SpotifyOAuth(client_id=client_id, client_secret=client_secret, redirect_uri=redirect_uri, scope=scope, cache_handler=cache_handler,show_dialog=True)
sp = Spotify(auth_manager=sp_auth)



@app.route('/')
def home():
    if not sp_auth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_auth.get_authorize_url()
        return redirect(auth_url)
    return redirect(url_for('exract_data'))

@app.route('/callback')
def callback():
    sp_auth.get_access_token(request.args['code'])
    return redirect(url_for('exract_data'))


@app.route('/exract_data')
def exract_data():
    if not sp_auth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_auth.get_authorize_url()
        return redirect(auth_url)
    
    username = sp.current_user()['display_name']
    users_mail = sp.current_user()['email']
    if not username_exists(username):
        add_spotify_user(users_mail, username)
        
    liked_songs = {}
    if username:
        while True:
            results = sp.current_user_saved_tracks(limit=50, offset=len(liked_songs))
            liked_songs.update({track['track']['id']: track['track']['name'] for track in results['items']})
            if len(liked_songs) == results['total']:
                break
    add_liked_songs_dict(username, liked_songs)
    return jsonify(liked_songs)
        
        
  

    
    
    
    
    user_info = sp.current_user()
    playlist = sp.current_user_playlists()
    playlist_info = [(pl['name'], pl['external_urls']['spotify']) for pl in playlist['items']]
    playlist_html = '<br>'.join(f'{name}:<a href={url}>link to playlist</a>'for name, url in playlist_info)
    playlist_html = f'Hello {user_info["display_name"]}, here are your playlists:<br>{playlist_html}'
    
    
    liked_songs = sp.current_user_saved_tracks()
    liked_songs_info = [(track['track']['name'], track['track']['external_urls']['spotify']) for track in liked_songs['items']]
    liked_songs_html = '<br>'.join(f'{name}:<a href={url}>link to song</a>' for name, url in liked_songs_info)
    liked_songs_html = f'And here are your liked songs:<br>{liked_songs_html}'
    
    recently_played = sp.current_user_recently_played()
    recently_played_info = [(track['track']['name'], track['track']['external_urls']['spotify']) for track in recently_played['items']]
    recently_played_html = '<br>'.join(f'{name}:<a href={url}>link to song</a>' for name, url in recently_played_info)
    recently_played_html = f'And here are your recently played songs:<br>{recently_played_html}'
    
    results = sp.current_user_top_tracks(limit=10)
    top_tracks = [(track['name'], track['external_urls']['spotify']) for track in results['items']]
    top_tracks_html = '<br>'.join(f'{name}:,.<a href={url}>link to song</a>' for name, url in top_tracks)
    
    
    
    return f'{playlist_html}<br><br>{liked_songs_html}<br><br>{recently_played_html}<br><br>{top_tracks_html}'



@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)