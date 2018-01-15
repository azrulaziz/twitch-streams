// all DOM selector
const content = document.querySelector(".content");
const allChannelButton = document.querySelector(".allChannel");
const onlineChannelButton = document.querySelector(".onlineChannel");
const offlineChannelButton = document.querySelector(".offlineChannel");
const searchForm = document.querySelector("#searchForm");
const inputForm = document.querySelector('.inputForm');
// list of channels to be retrieved from the API
const channels = ['freecodecamp', 'ESL_SC2', 'noob2ninjas', 'Ogamingsc2', 'cretetion', 'ESLUK', 'Cheddar'];
const url = 'https://wind-bow.glitch.me/twitch-api/streams/';
const channelUrl = "https://www.twitch.tv/";
let online = '';
let offline = '';

// setup ajax calls & loop thru each channel
const xhr = [];

for (let i = 0; i < channels.length; i++) {
	xhr[i] = new XMLHttpRequest();
	xhr[i].open('GET', url + channels[i], true);
	xhr[i].onload = function() {
		if(this.status === 200) {
			const twitch = JSON.parse(this.responseText);
			if (twitch.stream !== null) {
				online += `<div class="onlineDiv">
							<a href="${channelUrl}${channels[i]}" target="_blank">${channels[i]}</a> <span class="online"><em>Online</em></span><br />
							<span class="channelStatus">${twitch.stream.game} ${twitch.stream.channel.status}</span>

						   </div>`;
			} else {
				offline += `<div class="offlineDiv"><a href="${channelUrl}${channels[i]}" target="_blank">${channels[i]}</a>
							<span class="offline"><em>Offline</em></span></div>
							<span class="channelStatus">No status available</span>`;
			}
			content.innerHTML = `${online} ${offline}`;
		}
	};
	xhr[i].send();
}

// setup event listener for the toggle channels buttons
allChannelButton.addEventListener('click', () => {
	content.innerHTML = `${online} ${offline}`;
});

onlineChannelButton.addEventListener('click', () => {
	content.innerHTML = online;
});

offlineChannelButton.addEventListener('click', () => {
	content.innerHTML = offline;
});




