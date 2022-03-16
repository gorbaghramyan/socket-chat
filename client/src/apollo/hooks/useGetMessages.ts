import GET_MESSAGES from '../queries/getMessages';
import { useSubscription } from '@apollo/client';
import { MessageType } from './../index.d';

export const useGetMessages = (): MessageType[] => {
	const { data } = useSubscription(GET_MESSAGES);

	return data?.messages || [];
};
