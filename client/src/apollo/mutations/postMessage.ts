import { gql } from '@apollo/client';

const POST_MESSAGE = gql`
	mutation ($user: String!, $text: String!) {
		postMessage(user: $user, text: $text)
	}
`;

export default POST_MESSAGE;
