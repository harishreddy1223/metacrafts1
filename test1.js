/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console.
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Variable to hold NFTs
const NFTs = [];

// Function to mint a new NFT
function mintNFT(name, artist, description) {
    const nft = {
        name: name,
        artist: artist,
        description: description
    };
    NFTs.push(nft);
    console.log("Minted: " + name);
}

// Function to list all NFTs
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(`\nNFT #${i + 1}`);
        console.log("Name:        " + NFTs[i].name);
        console.log("Artist:      " + NFTs[i].artist);
        console.log("Description: " + NFTs[i].description);
    }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    console.log("Total NFTs: " + NFTs.length);
}

// Call functions
mintNFT("Zevin", "Parallel_Lore_Deployer", "The human body is a machine, and a good doctor knows how to keep it running.");
mintNFT("Felicity", "Parallel_Lore_Deployer", "Strength and determination are the cornerstones of Marcolian power.");
mintNFT("Charm", "PixelVaultDeployer", "The Pixel Vault Cores are 146 uniquely hand-drawn characters, designed by project creatives Chris Wahl and Odious.");
listNFTs();
getTotalSupply();
