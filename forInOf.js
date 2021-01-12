const names = ["facebook", "instagrams", "twiter", "gmail"];

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagrams",
    tw : "twiter",
    pv : "pritamvidh"
}

for(const s in symbols){
    console.log(symbols[s]);
}