// list of channels to be retrieved from the API
let channels = ['freecodecamp', 'ESL_SC2', 'noob2ninjas', 'Ogamingsc2'];
const url = 'https://wind-bow.glitch.me/twitch-api/streams/';


// setup ajax calls & loop thru each channel

let xhr = [];

for (let i = 0; i < channels.length; i++) {
    xhr[i] = new XMLHttpRequest();
    xhr[i].open('GET', url + channels[i], true);
    xhr[i].onload = function() {
        if(this.status === 200) {
            let twitch = JSON.parse(this.responseText);
            if (twitch.stream !== null) {
                console.log(twitch.stream.channel.display_name + ": online")
            } else {
                console.log(channels[i] + ": offline");
            } 
        }   
    };
    xhr[i].send();
}

console.log(xhr)

