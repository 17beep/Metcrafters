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
const Nfts = [];


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _artist, _rarity, _price) {
    const nft ={_name,_artist,_rarity,_price};

    Nfts.push(nft); //to add nft to the array
    console.log("Minted: " + _name); //to confirm minting
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < Nfts.length; i++){
        console.log("---------------------------------")
        console.log('\t\t\tID: ' + (i + 1));
        console.log("---------------------------------")
        console.log("\tName:  " + Nfts[i]._name)
        console.log("\tArtist:  " + Nfts[i]._artist)
        console.log("\tRarity:  " + Nfts[i]._rarity)
        console.log("\tPrice:  " + Nfts[i]._price)
        console.log("---------------------------------")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: " + Nfts.length);
}

// call your functions below this line
mintNFT("Moon River","Frank Ocean", "Rare", 450);
mintNFT("Congratulations","Post Malone", "Common", 210);
mintNFT("Evergreen","Omar Apollo", "Legendary", 640);
mintNFT("All too Well","Taylor Swift", "Rare", 420);

listNFTs();
getTotalSupply();