const dict = {
  AS1mPyb6HCqATWDRQKi4gPSfbphdaGv1pwEscLuKVaQgcktmVTqY: "ASMassaBlast",
  AU12MQoZRrJhszgMKLQR7YFBXSALm42Gxcq98FwNU3KiC5aPrftyc:
    "AUsideproject3-massa-blast owner and node",
  AU12W92UyGW4Bd94BPniTq4Ra5yhiv6RvjazV2G9Q9GyekYkgqbme: "AUtop1stacker",
  AU122Em8qkqegdLb1eyH8rdkSCNEf7RZLeTJve4Q2inRPGiTJ2xNv: "AUtop2stacker",
  AU12NT6c6oiYQhcXNAPRRqDudZGurJkFKcYNLPYSwYkMoEniHv8FW: "AUtop3stacker",
  AS12qzyNBDnwqq2vYwvUMHzrtMkVp6nQGJJ3TETVKF5HCd4yymzJP: "ASCoinvester",
};

dictKeys = Object.keys(dict);
dictKeys.forEach(function (key) {
  document.body.innerHTML = document.body.innerHTML.replace(
    new RegExp(key, "g"),
    dict[key]
  );
});
