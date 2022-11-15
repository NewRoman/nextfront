import App from "next/app"
import Head from "next/head"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import { getStrapiMedia } from "utils/media"
import { getGlobalData } from "utils/api"
import "@/styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  // Extract the data we need




  return (
    <>
      <h1>Hello i am next page</h1>
    </>
  )
}

export default MyApp
