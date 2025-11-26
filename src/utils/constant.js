export const BUTTON_LIST=[
    "All","Music","Mixes","T-Series","Arijit Singh","Soul Music","Telenovelas","Tamil Cinema",
    "Jukebox","Atif Aslam"
]

export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&chart=mostPopular&maxResults=50&key="+process.env.REACT_APP_YOUTUBE_API_KEY

export const YOUTUBE_SEARCH_API="https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="

export const API_OPTIONS={
    headers:{
        "Content-Type":"application/json"
    }
}

export const commentsData = [
    {
        name: "Aarav Mehta",
        text: "This video was actually super helpful! The explanation was so clear 👏",
        time: "2 hours ago",
        replies: [
            {
                name: "Neha Sharma",
                text: "Totally agree! I finally understood this concept after watching this.",
                time: "1 hour ago",
                replies: [
                    {
                        name: "Rohan Patel",
                        text: "Same here — wish more videos were this straightforward.",
                        time: "45 minutes ago",
                        replies: [
                            {
                                name: "Kritika Joshi",
                                text: "Exactly! It’s rare to find creators who actually explain the 'why' behind things.",
                                time: "30 minutes ago",
                                replies: [
                                    {
                                        name: "Manav Tiwari",
                                        text: "Yeah, most tutorials just copy code without explanation 😅",
                                        time: "25 minutes ago",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Simran Kaur",
        text: "Can someone explain why the value changes at 4:15? I’m a bit confused there.",
        time: "3 hours ago",
        replies: [
            {
                name: "Vikram Desai",
                text: "It’s because the variable is being re-assigned. Check the scope again around 4:10–4:20.",
                time: "2 hours ago",
                replies: [
                    {
                        name: "Ananya Gupta",
                        text: "Exactly! The function creates a new scope, so the earlier one isn’t valid anymore.",
                        time: "1 hour ago",
                        replies: [
                            {
                                name: "Simran Kaur",
                                text: "Ahhh makes sense now, thanks both of you!",
                                time: "55 minutes ago",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Rakesh Nair",
        text: "I’ve tried this code on my system but got a different output. Anyone else?",
        time: "5 hours ago",
        replies: [
            {
                name: "Priya Singh",
                text: "Yeah, you might be using a different Node version. Try updating to v18+.",
                time: "4 hours ago",
                replies: [
                    {
                        name: "Rakesh Nair",
                        text: "That fixed it, thanks! Didn’t realize version differences could matter so much.",
                        time: "3 hours ago",
                        replies: [
                            {
                                name: "Vikrant Kumar",
                                text: "Yep, especially for ES modules — older versions behave differently.",
                                time: "2 hours ago",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Mehul Jain",
        text: "Appreciate how detailed this tutorial was. Great work!",
        time: "1 day ago",
        replies: [
            {
                name: "Aditi Verma",
                text: "Thanks, Mehul! Glad you liked it 🙌",
                time: "22 hours ago",
                replies: [
                    {
                        name: "Siddharth Rao",
                        text: "Seriously, one of the best explanations I’ve seen on this topic.",
                        time: "18 hours ago",
                        replies: [
                            {
                                name: "Aditi Verma",
                                text: "Really appreciate that, Siddharth! 💙",
                                time: "17 hours ago",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export const OFFSET_LIVE_CHAT=10