import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import '../styles/styles.scss';

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
