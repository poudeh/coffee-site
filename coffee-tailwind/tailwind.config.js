/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"], //Boro to src boro to  tamami folder tamami file hayi ke formate html ya js dare
  //mitoni az class haye tailwind estefade bokoni.
  darkMode:'class',
  theme: {
    extend: {
      spacing: {
        '7.5':'30px',
        '4.5':'18px',
        '65':'260px',
        '50':'200px',
        '25':'100px',
        '18':'72px',
        '45':'180px'
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300:" #DBC1AC",
          600:" #967259",
          900:" #634832"

        },
        "green": {
          'special': "#0D9488"
          
        }
        
      },
      boxShadow:{
        'normal':'0px 1px 10px 0px #0000000D',
        

      },
      borderRadius: {
        '4xl':'32px'
      },
      fontFamily: {
        "Dana":"Dana",
        "DanaMedium":"Dana Medium",
        "DanaDemiBold":"Dana DemiBold",
        "Morabba":"Morabba Light",
        "MorabbaMedium":"Morabba Medium",
        "MorabbaBold":"Morabba Bold"


      },
      letterSpacing: {
        'tightest':"-0.065em"
      },
      container: {
        center:true,
        padding: {
          DEFAULT:'1rem',
          lg:'0.625rem' //10px

        }
      },
      backgroundImage: {
        'home-mobile':'url(../images/headerBgMobile.webp)',
        'home-desktop':'url(../images/headerBgDesktop.webp)'
      }

    },
      screens: {
        'xs': '480px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }

  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
]
}
//<div class="[&>*]:p-4">...</div>

