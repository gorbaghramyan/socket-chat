import styled from 'styled-components';

export const AppWrapper = styled.div`
	text-align: center;
	padding: 0 100px 100px;
`;

export const MessagesWrapper = styled.div`
	margin-bottom: 50px;
`;

export const Message = styled.div`
	margin-bottom: 50px;
	text-align: ${({ self }: { self: boolean }) => (self ? 'right' : 'left')};
`;

export const MessageFrom = styled.h3`
	margin-bottom: 20px;
`;
