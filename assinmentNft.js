/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let MY_NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(ID, name, tokenUri, type) {
  let metaDataNFT = {
    ID: ID,
    nftName: name,
    tokenUri: tokenUri,
    type: type,
  };
  MY_NFT.push(metaDataNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < MY_NFT.length; i++) {
    console.log(`\nID: ${MY_NFT[i].ID}`);
    console.log(`Name: ${MY_NFT[i].nftName}`);
    console.log(`tokenURI: ${MY_NFT[i].tokenUri}`);
    console.log(`Type: ${MY_NFT[i].type} \n`);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(`Total supply of NFT'S : ${MY_NFT.length}`);
}

// call your functions below this line

mintNFT(100, "mini art", 74358023498, "videoNFT");
mintNFT(101, "nft_osm WEB3", 7592034985034, "ImageNft");
mintNFT(102, "nft_osm WEB34", "hfgslkdhgfkjlfhgj@sjehfs79078979", "gameNft");

listNFTs();

getTotalSupply();

console.log(MY_NFT);
