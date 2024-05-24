var pillarBase = "██▓██▓██▓██";
var pillarPeak ="░██▓██▓██▓██░";
document.write(pillarPeak + "\n");

//V tejto verzii pillars scriptu sme schopni ich generovat normalne podseba s tym, ze ak su na krivo, da sa to cez css wrapper upravit tak, aby nam sedeli presne do columnu
for (let i = 0; i < 60; i++) {
    document.write("   "+pillarBase + "\n");
}
document.write(pillarPeak + "\n");