
import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start md:px-8 px-4 py-6 gap-4 max-w-4xl mx-auto">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials flex gap-4">
          {socialImgs.map((img) => (
            <a className="icon" target='_blank' href="img.url" key={img.url}>
              <img src={img.imgPath} alt={img.alt || "social"} />

            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:px-8 px-4 py-6 gap-4 max-w-4xl mx-auto">
          <p className="text-center md:text-end">
            ©{new Date().getFullYear()} Abedin | Minhaz
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
