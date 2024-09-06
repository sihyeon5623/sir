const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [289070, 1174180, 359550, 550,105600, 1281930, 730, 1144200, 1091500, 553850, 8500, 1973530, 239140, 1172620 , 346010,  322330, 2788630, 477160, 1085660, ];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible
//            문명  레데리  레식 레포데 테라리아 티모드로더 카스2  레오낫 사펑  헬다이버  이브 림버스컴퍼니 다잉라이트 씨딥1172620   비시즈   돈스타브 낫띵투게더 휴먼폴플렛  데가 

user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});

// 1245620엘든링    346110 아크
