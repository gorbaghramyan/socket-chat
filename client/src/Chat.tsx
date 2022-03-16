import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { POST_MESSAGE } from './apollo';
import Messages from './Messages';

export const Chat: React.FC = (): JSX.Element => {
	const [user, setUser] = useState<string>('Gor');
	const [text, setText] = useState<string>('');

	const [postMessage] = useMutation(POST_MESSAGE);

	const sendMessage = () => {
		if (text.length && user.length) {
			postMessage({
				variables: {
					user: user,
					text: text,
				},
			});
			setText('');
		} else {
			alert('Missing fields!');
		}
	};

	return (
		<Container>
			<h3>Chat</h3>
			<Messages user={user} />
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<TextField
						fullWidth
						required
						size='small'
						value={user}
						label='Enter name'
						variant='outlined'
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setUser(e.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={8}>
					<TextField
						required
						fullWidth
						size='small'
						value={text}
						variant='outlined'
						label='Enter message here'
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
				</Grid>
				<Grid item xs={1}>
					<Button
						fullWidth
						onClick={sendMessage}
						variant='contained'
						style={{ backgroundColor: '#60a820', color: 'white' }}
					>
						Send
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};
