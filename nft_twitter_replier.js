console.log("Starting the Bot..");
const config = require('./config');
const { TwitterApi } = require('twitter-api-v2');

// const client = new TwitterApi({
//     appKey: config.appKey,
//     appSecret: config.appSecret,
//     accessToken: config.accessToken,
//     accessSecret: config.accessSecret,
// });

const client = new TwitterApi({
    appKey: 'X3GrEpReEEJXxfRBy5xvnhTQE',
    appSecret: 'b9uGZxoKynk8rv0YaBUcZQjAoNYivGcg3W66MxSw85VBDH5SWH',
    accessToken: '1478117648307142657-XdBTsx3qQpDf4VozqKHPVMSok5JMdJ',
    accessSecret: 'HCVXiXHSuHuZ6ifQfRebCS33e7A7YK2xagIZ3UMIh1k33',
});

const nftLinks = [
    'https://t.co/h3p7aL5FHf', // Coqueliot
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51549053308726620437911775712751789064035893322379546000732539725630800920577', // Arkose
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51549053308726620437911775712751789064035893322379546000732539724531289292801', // Glade
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51549053308726620437911775712751789064035893322379546000732539722332266037249', // Clast
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51549053308726620437911775712751789064035893322379546000732539721232754409473', // Creachann
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/51549053308726620437911775712751789064035893322379546000732539698143010226177' // Timescape
];

// console.log(client.v2.search('#nft'));
async function run() {

    // Get and delete old rules if needed
    const nftweet = await client.v2.search('drop your nft');
    
    // console.log(nftweet.data);

    const tweetToReplyTo = nftweet.data.data[0].id
    await client.v2.reply('🙏' + nftLinks.at(Math.random()*nftLinks.length), tweetToReplyTo);
};

run();