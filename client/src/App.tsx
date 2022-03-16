import { ApolloProvider } from '@apollo/client';
import { AppWrapper } from './styledComponents';
import { Chat } from './Chat';
import client from './apollo';


function App() {
	return (
		<AppWrapper>
			<ApolloProvider client={client}>
				<Chat />
			</ApolloProvider>
		</AppWrapper>
	);
}

export default App;
