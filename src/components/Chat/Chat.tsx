import { FC, useState } from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import type { IChat, IMessage, IUserImage } from '@/types';
import { message as MockMessages } from '@/constants/message';
import { FormTextField } from '@/ui-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { messageScheme } from '@/utils';

import { Message } from './Message';
import {
  StyledFormWrapper,
  StyledNotCheckedChatWrapper,
  StyledSendIcon,
  StyledWrapper,
} from './styles';

export interface IChatProps {
  id: string;
  companionImage: Pick<IChat, 'title' | 'alt' | 'image'>;
  userImage: IUserImage;
}

interface INewMessageData {
  newMessage: string;
}

const Chat: FC<IChatProps> = ({ id, companionImage, userImage }) => {
  const { spacing } = useTheme();
  const [messages, setMessages] = useState(MockMessages);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newMessage: '',
    },
    resolver: yupResolver(messageScheme),
  });

  const handleSend = ({ newMessage }: INewMessageData) => {
    const newMessageObj: IMessage = {
      _id: uuidv4(),
      content: newMessage,
      dispatchTime: new Date().toString(),
      isCurrentUser: true,
    };
    setMessages((prev) => [...prev, newMessageObj]);
  };

  return (
    <StyledWrapper>
      {!id ? (
        <StyledNotCheckedChatWrapper>Выберите Чат</StyledNotCheckedChatWrapper>
      ) : (
        <>
          <Stack gap={spacing(2)}>
            {messages.map((item, index) => (
              <Message
                // eslint-disable-next-line no-underscore-dangle
                key={item._id}
                message={messages}
                index={index}
                {...item}
                userImage={userImage}
                companionImage={companionImage}
              />
            ))}
          </Stack>
          <StyledFormWrapper as="form" onSubmit={handleSubmit(handleSend)}>
            <Box width="100%">
              <FormTextField
                variant="outlined"
                label="Введите сообщение"
                control={control}
                color="secondary"
                name="newMessage"
                error={!!errors.newMessage?.message}
                errorMessage={errors.newMessage?.message}
                fullWidth
              />
            </Box>
            <StyledSendIcon type="submit">
              <SendIcon color={errors.newMessage?.message ? 'error' : 'secondary'} />
            </StyledSendIcon>
          </StyledFormWrapper>
        </>
      )}
    </StyledWrapper>
  );
};

export default Chat;
