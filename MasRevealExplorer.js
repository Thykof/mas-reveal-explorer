const dict = {
  AS1mPyb6HCqATWDRQKi4gPSfbphdaGv1pwEscLuKVaQgcktmVTqY: "MassaBlast",
  AU12MQoZRrJhszgMKLQR7YFBXSALm42Gxcq98FwNU3KiC5aPrftyc: "Massa-blast node",
  AU12W92UyGW4Bd94BPniTq4Ra5yhiv6RvjazV2G9Q9GyekYkgqbme: "AUtop1stacker",
  AU122Em8qkqegdLb1eyH8rdkSCNEf7RZLeTJve4Q2inRPGiTJ2xNv: "AUtop2stacker",
  AU12NT6c6oiYQhcXNAPRRqDudZGurJkFKcYNLPYSwYkMoEniHv8FW: "AUtop3stacker",
  AS12qzyNBDnwqq2vYwvUMHzrtMkVp6nQGJJ3TETVKF5HCd4yymzJP: "Coinvester",
  AS1wmX9BTcDpp6Hu3tB6tDuMywLWWusNeVuVMxeYaSTBn8rMgqnx: "Casino jackpot",
  AS12sUv4W3w4nDKnQWnR74TqLVEzK5ThwAqHkkgaHRHYPEyxNK9Sw: "Casino flip",
  AS12WirWdurggUQSnRTx6cJ5DqwkdWJAkgBXx95yZhzxaWs5eSoaK: "Massagotchi",
  AS1rahehbQkvtynTomfoeLmwRgymJYgktGv5xd1jybRtiJMdu8XX: "DUSA Factory",
  AS12UMSUxgpRBB6ArZDJ19arHoxNkkpdfofQGekAiAJqsuE6PEFJy: "DUSA Router",
  AS12VBT5xeL3XdXhLwnpyMVB8re5RcMuW4Z8ragCKEKnDDCEkYjXL: "DUSA Quoter",
  AS12U4TZfNK7qoLyEERBBRDMu8nm5MKoRzPXDXans4v9wdATZedz9: "WMAS",
  AS1hCJXjndR4c9vekLWsXGnrdigp4AaZ7uYG3UKFzzKnWVsrNLPJ: "USDC",
  AS1ZGF1upwp9kPRvDKLxFAKRebgg7b3RWDnhgV7VvdZkZsUL7Nuv: "DAI",
  AS124vf3YfAJCSCQVYKczzuWWpXrximFpbTmX4rheLs5uNSftiiRY: "WETH",
  AS1FJrNBtZ5oXK9y6Wcmiio5AV6rR2UopqqdQWhBH4Fss9JNMySm: "DUSA multicall",
  AS1s8Jw2jFpULWiejpeaQpZdCRhTp5iH3Lc6VcJ6swCW2Khmig26: "Massan FT",
  AU1nf9RjAVfFAPsAwr9bnFdfAG6nVuGtTmdaHnKQcitVWikC3Fe8: "Massan owner",
  AS12qkzKb6FNxHV6aNCWfm8XVHqmceNRKr3L9YAto6nBBgMHENTQY: "Buggy Massan NFT",
};

dictKeys = Object.keys(dict);
dictKeys.forEach(function (key) {
  document.body.innerHTML = document.body.innerHTML.replace(
    new RegExp(key, "g"),
    dict[key]
  );
});
