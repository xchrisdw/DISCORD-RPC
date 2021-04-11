const rpc = require("discord-rpc") // require the discord-rpc package
const client = new rpc.Client({ transport: 'ipc' }) // new rpc client
var clientName = 'FNBRChris-RPC' // your name which is a var which is used in the log when it goes online
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : { // btw thats my fn code if you want to use it :)
details : "Code FNBRChris", // text -> any text... youll see where it goes when you start it
assets : {
large_image : "code_fnbrchris", // copy the image name from https://discord.com/developers/applications (the image of name you put in)
large_text : "USING CODE FNBRChris" // this is text that will show once you hover over the image on the rpc
},
buttons : [{label : "Affilate Referal" , url : "https://store.epicgames.com/fnbrchris/fortnite"},{label : "Twitter",url : "https://twitter.com/FNBRChris"}]
} //                         ^ text                     ^ url which will redirect                          ^ more text the url which will redirect
})
})
client.on('ready', () => {
    console.log(`${clientName} is Online!`) // ready event -> this will log to the console if it launchs all good
})            // client id from https://discord.com/developers/applications
client.login({ clientId : "814144442461323345" }).catch(console.error); // console logging errors which shouldnt happen but just incase
