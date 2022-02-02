import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from './component/card'
import Header from './component/header'
import { useState } from 'react'


export default function Home() {

  const [tab, onClickTab] = useState('*');


  var resourcez = [

    {
      type: "css",
      url: "https://moderncss.dev/",
      title: "Modern CSS",
      desc: "Modern CSS Solutions for Old CSS Problems"
    },
    {
      type: "icons",
      url: "https://heroicons.com/",
      title: "Hero Icons",
      desc: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
    },
    {
      type: "css",
      url: "https://smolcss.dev/",
      title: "Smol CSS",
      desc: "Minimal snippets for modern CSS layouts and components"
    },
    {
      type: "css",
      url: "https://stylestage.dev/",
      title: "Style Stage",
      desc: "A modern CSS showcase styled by community contributions"
    },
    {
      type: "css",
      url: "https://animate.style/",
      title: "Animate.css",
      desc: "A cross-browser library of CSS animations."
    },
    {
      type: "css",
      url: "https://webcode.tools/generators/css",
      title: "CSS Generator",
      desc: "Almost all css generators you need"
    },
    {
      type: "css",
      url: "https://keyframes.app/",
      title: "Keyframes",
      desc: "simple visual tools to help you generate CSS for your projects."
    },
    {
      type: "color",
      url: "http://khroma.co/",
      title: "khroma",
      desc: "The AI color tool for designers"
    },
    {
      type: "icons",
      url: "https://simpleicons.org/",
      title: "Simple Icons",
      desc: "Free SVG icons for popular brands"
    },
    {
      type: "color",
      url: "https://uigradients.com/",
      title: "UI gradients",
      desc: "Beautiful colored gradients"
    },
    {
      type: "css",
      url: "https://cssreference.io/",
      title: "CSS Reference",
      desc: "A free visual guide to CSS."
    },
    {
      type: "css",
      url: "https://grid.malven.co/",
      title: "Grid Malven",
      desc: "A simple visual cheatsheet for CSS Grid Layout"
    },
    {
      type: "css",
      url: "https://cssgridgarden.com/",
      title: "CSS grid garden",
      desc: "A game for learning CSS grid"
    },
    {
      type: "color",
      url: "https://mycolor.space/",
      title: "Color Space",
      desc: "Color Palettes Generator and Color Gradient Tool"
    },
    {
      type: "css",
      url: "https://flexboxfroggy.com/",
      title: "Flexbox Froggy",
      desc: "A game for learning CSS flexbox"
    },
    {
      type: "css",
      url: "https://csslayout.io/",
      title: "CSS Layout",
      desc: "Popular layouts and patterns made with CSS"
    },
    {
      type: "css",
      url: "https://flexbox.malven.co/",
      title: "flexbox malven",
      desc: "A simple visual cheatsheet for flexbox"
    },
   
    {
      type: "color",
      url: "https://www.materialpalette.com/",
      title: " material palette",
      desc: "Material Design Color Palette Generator"
    },
   
    {
      type: "color",
      url: "https://meshgradient.in/",
      title: "mesh gradients",
      desc: "Generate beautiful mesh gradients"
    },
    {
      type: "color",
      url: "https://cssgradient.io/gradient-backgrounds/",
      title: "gradient backgrounds",
      desc: "As a curated list of the best gradient websites across the internet, Gradient Backgrounds allows you to explore, try and choose from hundreds of beautiful blended color palettes."
    },
    {
      type: "color",
      url: "https://gradients.party/",
      title: "gradients party",
      desc: "collection of gradients for your buttons."
    },
    {
      type: "color",
      url: "https://slick-gradient.vercel.app/",
      title: "slick gradient",
      desc: "A curated collection of beautiful CSS gradients using the full range of CSS colours. Easily copy and paste CSS"
    },
    {
      type: "icons",
      url: "https://ikonate.com/",
      title: "Ikonate",
      desc: "fully customisable & accessible vector iconsS"
    },
    {
      type: "icons",
      url: "https://icons.modulz.app/",
      title: "Radix Icons",
      desc: "A crisp set of 15×15 icons designed by the Modulz team."
    },
    {
      type: "icons",
      url: "https://iconscout.com/unicons/explore/line",
      title: "Unicons",
      desc: "Unicons icon library"
    },
    {
      type: "icons",
      url: "https://www.iconshock.com/",
      title: "iconshock",
      desc: "The biggest icon pack: 2 million professional icons library"
    },
    {
      type: "font",
      url: "https://www.fontfabric.com/",
      title: "Font Fabric",
      desc: "A digital type foundry crafting retail fonts and custom typography for various brands. Sharing a passion for premium typefaces, calligraphy and lettering."
    }
  ]




  return (
    <div className='container w-7/12 m-auto pb-36'>

      <Header />

      <div className='flex gap-2 justify-center mb-12'>
        <button className='bg-tab text-white shadow  px-5 py-1 rounded-full'  onClick={() => onClickTab('*')}>All</button>
        <button className='bg-tab text-white shadow px-5 py-1 rounded-full' onClick={() => onClickTab('css')}>CSS</button>
        <button className='bg-tab text-white shadow px-5 py-1 rounded-full' onClick={() => onClickTab('color')}>Colors</button>
        <button className='bg-tab text-white shadow px-5 py-1 rounded-full' onClick={() => onClickTab('icons')}>Icons</button>
      </div>


      <div id="tabs-h" className="tabs">
        <div data-title="CSS">
          <Head>
            <title>Resourcez</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className=" site css mt-5  grid grid-cols-4  justify-center ">
            {tab !== "*" ?
              resourcez.filter(d => d.type === tab && "*" !== tab).map((fs, i) => (
                <Card key={i}  title={fs.title} desc={fs.desc} url={fs.url} />
              ))
              :
              resourcez.map((fs, i) => (
                <Card key={i}  title={fs.title} desc={fs.desc} url={fs.url} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
