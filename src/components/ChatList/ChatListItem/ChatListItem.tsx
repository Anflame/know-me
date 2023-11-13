import { FC } from 'react';
import { Typography, Stack, Button } from '@mui/material';

import type { IChat } from '@/types';
import { CustomImage } from '@/components/CustomImage';
import { getShortTime } from '@/utils';
import { StyledImageWrapper, StyledWrapper } from './styles';

interface IChatListItemProps extends IChat {
  setSelectedId: (chatId: string) => void;
}

const ChatListItem: FC<IChatListItemProps> = ({
  _id,
  alt,
  image,
  lastMessage,
  lastMessageTimeSent,
  title,
  setSelectedId,
}) => {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <CustomImage alt={alt} src={`/static/${image}`} fill />
      </StyledImageWrapper>
      <Stack>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body2"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {lastMessage}
        </Typography>
      </Stack>
      <Typography variant="subtitle1" style={{ alignSelf: 'flex-start' }}>
        {getShortTime(lastMessageTimeSent)}
      </Typography>
      <Button variant="ghost" onClick={() => setSelectedId(_id)} />
    </StyledWrapper>
  );
};

export default ChatListItem;
