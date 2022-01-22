import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { getToken, getTokensIds, getMetadatas, getTransfers } from '../api/getData'
import Card from "../../components/card"
import TransferList from "../../components/transferList"

export async function getStaticPaths() {
  const tokens = await getTokensIds();
  const paths = tokens.map(token => ({
    params: { id: token.id }
  }));
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(paths) {
  const tokenresult = await getToken(paths.params.id)
  const metaresult = await getMetadatas();

  return {
    props: { token: tokenresult[0], metadata: metaresult[0] }
  }
}

export default function Cardpage({ token, metadata }) {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div />
  } else return (
    < main className={styles.main} >
      <h1>Card: {token.identifier}</h1>
      <p>url: {metadata.image}</p>
      <Card token={token} metadata={metadata} />
      <TransferList transfers={token.transfers} />
    </main >
  )
}

