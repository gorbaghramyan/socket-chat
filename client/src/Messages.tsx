import React from 'react';
import { Chip } from '@material-ui/core';
import { Message, MessageFrom, MessagesWrapper } from './styledComponents';
import { MessageType } from './apollo/index.d';
import { useGetMessages } from './apollo/hooks/useGetMessages';

const Messages: React.FC<{ user: string }> = ({ user }) => {
	const messages = useGetMessages();

	return (
		<MessagesWrapper>
			{messages.map(({ id, user: messageUser, text }: MessageType) => {
				return (
					<Message
						key={id}
						self={user === messageUser}
					>
						<MessageFrom>{messageUser}</MessageFrom>
						<Chip
							color={user === messageUser ? 'primary' : 'secondary'}
							label={text}
						/>
					</Message>
				);
			})}
		</MessagesWrapper>
	);
};

export default Messages;