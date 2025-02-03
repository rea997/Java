var gjuheshqipe = 5;
var gjuheangleze = 5;
var gjuhegjermane = 5;
var artmuzikor = 5;
var artfigurativ = 5;
var matematike = 5;
var fizike = 4;
var kimi = 5;
var biologji = 5;
var histori = 5;
var gjeografi = 5;
var edqytetare = 5;
var edfizike = 5;
var tik = 5;
var trashegimikulturore = 5;
var stekiometri = 5;

var notamesatare = (gjuheshqipe + gjuheangleze + gjuhegjermane + artmuzikor + artfigurativ + matematike + fizike + kimi + biologji + histori + gjeografi + edqytetare + edfizike + tik + trashegimikulturore + stekiometri) / 16;

if(notamesatare > 4.5) {
    console.log("Keni suksesin e shkelqyeshem");
} else if (notamesatare > 3.5 && notamesatare < 4.5) {
    console.log("Keni sukses shume te mire");
} else if (notamesatare > 2.5 && notamesatare < 3.5) {
    console.log("Keni sukses te mire");
} else if (notamesatare > 1.5 && notamesatare < 2.5) {
    console.log("Keni sukses shume te mjaftueshem");
} else if (notamesatare > 0.5 && notamesatare < 1.5) {
    console.log("Keni sukses shume te pamjaftueshem");
}