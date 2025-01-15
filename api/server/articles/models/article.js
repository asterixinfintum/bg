const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    subheader: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        enum: ['announcement', 'news', 'blogpost', 'projects', 'launchprogram'],
        required: true
    },
    hidden: {
        type: Boolean,
        default: false
    },
    //for launch programs
    launchdate: {
        type: String,
        default: ""
    },
    conclusiondate: {
        type: String,
        default: ""
    },
    airdropdate: {
        type: String,
        default: ""
    },
    totalairdrops: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        enum: ['Completed', 'Ongoing', 'Whitelisted']
    },
    network_logo: {
        type: String
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

/*@click="
              $router.push({
                path: '/articles/projects',
                query: { type: 'projects' },
              })
            "*/

/*
        {
          logo: "bnb-bnb-logo.png",
          name: "VintageCoin Launch",
          status: "Completed",
          launchDate: "November 10, 2024",
          conclusionDate: "December 15, 2024",
          airdropDate: "January 5, 2024",
          totalAirdrops: "$ 150,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "RetroToken Launch",
          status: "Completed",
          launchDate: "March 15, 2024",
          conclusionDate: "April 20, 2024",
          airdropDate: "May 1, 2024",
          totalAirdrops: "$ 200,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "LegacyCoin Launch",
          status: "Completed",
          launchDate: "July 25, 2024",
          conclusionDate: "August 30, 2024",
          airdropDate: "September 10, 2024",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "solana-sol-logo.png",
          name: "MoonPaw Launch",
          status: "Upcoming",
          launchDate: "January 10, 2025",
          conclusionDate: "February 15, 2025",
          airdropDate: "March 1, 2025",
          totalAirdrops: "$ 300,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "ShibaNova Launch",
          status: "Upcoming",
          launchDate: "March 20, 2025",
          conclusionDate: "April 25, 2025",
          airdropDate: "May 5, 2025",
          totalAirdrops: "$ 500,000",
        },
        {
          logo: "ethereum-eth-logo.png",
          name: "DogeRocket Launch",
          status: "Upcoming",
          launchDate: "May 15, 2025",
          conclusionDate: "June 30, 2025",
          airdropDate: "July 10, 2025",
          totalAirdrops: "$ 750,000",
        },
        {
          logo: "polkadot-new-dot-logo.png",
          name: "FrogoCoin Launch",
          status: "Upcoming",
          launchDate: "July 20, 2025",
          conclusionDate: "August 25, 2025",
          airdropDate: "September 1, 2025",
          totalAirdrops: "$ 1,000,000",
        },
        {
          logo: "xrp-xrp-logo.png",
          name: "PepeBlast Launch",
          status: "Upcoming",
          launchDate: "September 15, 2025",
          conclusionDate: "October 20, 2025",
          airdropDate: "November 1, 2025",
          totalAirdrops: "$ 2,000,000",
        },
      */