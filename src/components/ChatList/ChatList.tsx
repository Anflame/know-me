import { FC } from 'react';
import { Stack } from '@mui/material';

import type { IChat } from '@/types';
import { ChatListItem } from './ChatListItem';

interface IChatListProps {
  chats: IChat[];
  setSelectedId: (chatId: string) => void;
}

const ChatList: FC<IChatListProps> = ({ chats, setSelectedId }) => {
  return (
    <Stack
      style={{
        width: '30%',
        overflowY: 'auto',
      }}
    >
      {chats.map(({ _id, ...item }) => (
        <ChatListItem key={_id} _id={_id} {...item} setSelectedId={setSelectedId} />
      ))}
    </Stack>
  );
};

export default ChatList;
