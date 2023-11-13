import { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import type { IChat, UserChats } from '@/types';

import { Chat } from '../Chat';
import { ChatList } from '../ChatList';
import { StyledCloseBtn, StyledDrawer, StyledWrapper } from './style';

const Messenger: FC<UserChats> = ({ chats, userImage }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedId, setSelectedId] = useState('');
  const companionImage = chats.reduce(
    (result, { _id, image, alt, title }) =>
      _id === selectedId
        ? {
            image,
            alt,
            title,
          }
        : result,
    {} as Pick<IChat, 'image' | 'alt' | 'title'>
  );

  return (
    <StyledDrawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
      <StyledWrapper>
        <ChatList chats={chats} setSelectedId={setSelectedId} />
        <Chat id={selectedId} companionImage={companionImage} userImage={userImage} />
        <StyledCloseBtn>
          <CloseIcon />
        </StyledCloseBtn>
      </StyledWrapper>
    </StyledDrawer>
  );
};

export default Messenger;
