import { InMemoryCache } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import GET_MESSAGES from './queries/getMessages';
import POST_MESSAGE from './mutations/postMessage';

const link = new WebSocketLink({
	uri: `ws://localhost:4000/`,
	options: {
		reconnect: true,
	},
});

const client = new ApolloClient({
	link,
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache(),
});

export { GET_MESSAGES, POST_MESSAGE };

export default client;
