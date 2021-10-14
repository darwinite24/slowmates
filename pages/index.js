import Head from 'next/head'


export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-around min-h-screen py-2">
      <Head>
        <title>slowmates</title>
        <link rel="icon" href="/images/logo_transparent.png" />
        <meta property="og:title" content="slowmates" key="ogtitle" />
        <meta property="og:description" content="Slowmates is a generative NFT collection." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://slowmates.io/" key="ogurl"/>
        <meta property="og:image" content="https://slowmates.io/images/logo_transparent.png" key="ogimage"/>
        <meta property="og:site_name" content="https://slowmates.io/" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="https://twitter.com/" key="twdomain" />
        <meta property="twitter:url" content="https://twitter.com/slowmates" key="twurl" />
        <meta name="twitter:title" content="slowmatess" key="twtitle" />
        <meta name="twitter:description" content="Slowmates is a generative NFT collection." key="twdesc" />
        <meta name="twitter:image" content="https://slowmates.io/images/logo.png" key="twimage" />
      </Head>


      <div id="root">


          <div className="flex items-center justify-center w-full border-b-2 border-r-8 border-opacity-0 border-l-8	pb-6 border-opacity-0">
            <nav className="flex flex-wrap flex-row justify-around PermanentMarker-Regular">
              <a href="https://twitter.com/slowmates" className="text-4xl text-black hover:underline m-2"> <img src="images/twitter.png" alt="TWITTER"/> </a>
              <a href="https://discord.gg/N239QjZFE2" className="text-4xl text-black hover:underline m-2"> <img src="images/discord.png" alt="DISCORD"/> </a>
            </nav>
          </div>

          <div className="flex flex-col items-center border-b-20 ">
            <img src="images/collage.png"/>
          </div>

          <div className="flex flex-col items-center">

          <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold"></h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                 </p>
                    <img className="lg:w-full" src="images/divide.png" />
                </div>
              </div>
            </div>     

            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div id="about" className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold">What are Slowmates? </h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                  "Slowmates are 7,777 unique sloth NFTs coming soon to the Ethereum blockchain. Each Slowmate is a unique combination of 5 random sloth traits of different rarities: fur, eyes, mouth, head, and body.  The random combinations are endless to ensure there is enough variety for everyone.  Mint your NFT so that you can find your Slowmate."
                  </p>
                  <img className="lg:w-full" src="images/slowmate_creation_timelapse.gif" />
                </div>
              </div>
            </div>

            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold"></h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                 </p>
                    <img className="lg:w-full" src="images/divide.png" />
                </div>
              </div>
            </div>     

            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div id="rarity" className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold">How rare is my Slowmate? </h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                    "The rarity of your Slowmate is determined by the rarity of the traits.  Each trait has a unique rarity which contributes to your specific Slowmate's rarity.  Each individual trait has a rarity score based on how many times that trait shows up in the Slowmate population.  The overall rarity score is simply the summation of the each of the rarity score for each individual trait."
                  </p>
                  <img className="lg:w-full" src="images/rarity_board.png" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                    <h1 className="text-2xl PermanentMarker-Regular text-black font-bold">So, is there a quick way to determine rarity? </h1>                   
                    <p className="text-lg PermanentMarker-Regular text-black ">
                    "The background color of your Slowmate is an easy way to determine relative rarity in the Slowmate population. Each color represents a group, a tier, and a numeric point value.                   </p>
                    <img className="lg:w-full" src="images/rarity.png" />
                </div>
              </div>
            </div>

            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold"></h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                 </p>
                    <img className="lg:w-full" src="images/divide.png" />
                </div>
              </div>
            </div>     

            <div className="mt-6 border-b-2 py-6 border-l-8	pb-6 border-opacity-0">
              <div id="roadmap" className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-full">
                  <h1 className="text-2xl PermanentMarker-Regular text-black font-bold">Do you have a roadmap? </h1>
                  <p className="text-lg PermanentMarker-Regular text-black ">
                  "The waterfall represents the start of the Slowmate journey.  The waterfall displays both nature's beauty and power.  Climbing up the waterfall and crossing the bridge will unlock additional roadmap objectives while making it to the top will unlock the project's first real-world charitable donation."                  </p>
                  <img className="lg:w-full" src="images/W1S4.png" />
                  <img className="lg:w-full" src="images/W1D.png" />
                </div>
              </div>
            </div>



          </div>
      </div>
    </div>
    )

  }
