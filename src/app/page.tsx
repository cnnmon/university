import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 gap-5 md:pt-32 md:px-16">
      <div className="text-center items-center flex flex-col">
        <Image src="/twinkle.gif" width={100} height={200} alt="art of desk" />
        <h1 className="wave">
          {"univers(ity)".split("").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </h1>
        <h2>space is big. you are small.</h2>
      </div>

      <div className="flex flex-row overflow-x-scroll gap-4">
        <Image src="/bedroom.gif" width={800} height={200} alt="bedroom preview" />
        <Image src="/hallway.gif" width={800} height={200} alt="hallway preview" />
        <Image src="/elevator.gif" width={800} height={200} alt="elevator preview" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2><b>about</b></h2>
        <p>
          my final project for fall 2023 <a href="https://classes.berkeley.edu/content/2021-fall-art-173-001-std-001" target="_blank">electrocrafting</a>. a tiny game about being on a spaceship for holiday break. you have a lot of time to think, play video games, and look at stars.
          <br /><br />
          built with godot 4. drew assets in procreate and animated them in procreate dreams. bg music by <a href="https://www.youtube.com/watch?v=Gcm6gpuxlfY" target="_blank">riddiman</a>.
        </p>
        <div className="md:justify-center md:flex">
          <Image src="/walk.gif" width={300} height={200} alt="character walk animation" />
          <Image src="/idle.gif" width={300} height={200} alt="character idle animation" />
        </div>

        <br />
        <h2><b>how to play</b></h2>
        <p>
          godot 4 unfortunately has difficulties with html5, so you need to download the game to play it. here are the download links:
        </p>
        <ul className="list-disc list-inside mt-2 mb-2">
          <li><a href="https://drive.google.com/file/d/1O0o51JXPvNllp7DvdqSKSNO1ByFFy2H0/view?usp=sharing" target="_blank">macOS</a> — may need to <a href="https://discussions.apple.com/thread/250425993?sortBy=best" target="_blank">temporarily override security settings</a> but it&apos;s not a virus i promise</li>
          <li><a href="https://drive.google.com/file/d/19mS-mCQ2DYG8wEmp_bcPjvr3rr2luMPs/view?usp=sharing" target="_blank">windows</a></li>
        </ul>
        <p>
          most of the scenes are captured in the gifs above though! just without the introspection (and music)
        </p>
        <div className="flex justify-center">
          <Image src="/desk.png" width={300} height={200} alt="desk" />
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-auto mb-24">
        made by <a href="https://twitter.com/cnnmonsugar" target="_blank">tiffany</a> with the coconut jelly from hui lau shan
      </footer>
    </main>
  )
}
