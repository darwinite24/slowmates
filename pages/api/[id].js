import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";


import traits from "../../database/traits.json";

const infuraAddress = INFURA_ADDRESS

const slowmateApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const slowmateContract = new web3infura.eth.Contract(ABI, ADDRESS)




// THE ID YOU ASKED IN THE URL
  const query = req.query.id;



  const totalSlowmates = 7777;
  if(parseInt(query) < totalSlowmates) {


    // CALL CUSTOM TOKEN NAME IN THE CONTRACT
    const tokenNameCall = await slowmateContract.methods.slowmateNames(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`





    const signatures = [40,405,340]
    const trait = traits[parseInt(query)]
    

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}
    // IF THE REQUESTED TOKEN IS A SIGNATURE, RETURN THIS METADATA
    if ( signatures.includes( parseInt( query ) ) ) {

      metadata = {
        "name": tokenName,
        "description": "Slowmates is a generative NFT collection.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://slowmates.io/api",
        "attributes": [
          {
            "trait_type": "Signature Series",
            "value": trait["Signature Series"]
          }
        ]
      }
      // console.log(metadata)
    } else {
    // GENERAL slowmate METADATA
      metadata = {
        "name": tokenName,
        "description": "Slowmates is a generative NFT collection.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.slowmates.io/api",
        "attributes": [
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "Fur",
              "value": trait["Fur"]
            },
            {
              "trait_type": "Eyes",
              "value": trait["Eyes"]
            },
            {
              "trait_type": "Mouth",
              "value": trait["Mouth"]
            },
            {
              "trait_type": "Head",
              "value": trait["Head"]
            },
            {
              "trait_type": "Body",
              "value": trait["Body"]
            },
        ]
      }

      // console.log(metadata)

    }

    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The slowmate you requested is out of range"})

  }


  // this is after the reveal


}

export default slowmateApi
