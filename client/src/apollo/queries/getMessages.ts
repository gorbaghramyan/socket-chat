import { gql } from '@apollo/client';

const GET_MESSAGES = gql`
	subscription {
		messages {
			id
			user
			text
		}
	}
`;

export default GET_MESSAGES;
