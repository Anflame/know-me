import { FC } from 'react';
import { Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

import type { IMessage, IUserImage } from '@/types';
import { CustomImage } from '@/components/CustomImage';
import { getShortTime } from '@/utils';
import { StyledContentWrapper, StyledImageWrapper } from './styles';

interface IMessageProps extends IMessage {
  isCurrentUser: boolean;
  userImage: IUserImage;
  _id: string;
  content: string;
  dispatchTime: string;
  companionImage: IUserImage;
  message: IMessage[];
  index: number;
}

const Message: FC<IMessageProps> = ({
  _id,
  content,
  dispatchTime,
  isCurrentUser,
  userImage,
  companionImage,
  message,
  index,
}) => {
  const isNetbook = useMediaQuery('(max-width: 1024px)');
  const { spacing } = useTheme();

  const image = isCurrentUser ? userImage : companionImage;

  const isShowAvatar = message[index + 1]?.isCurrentUser !== isCurrentUser;

  return (
    <Stack flexDirection={isCurrentUser ? 'row-reverse' : 'row'} key={_id} gap={spacing(1)}>
      <StyledImageWrapper>
        {!isNetbook && isShowAvatar && (
          <CustomImage src={`/static/${image.image}`} alt={` ${image.alt}`} fill sizes="100%" />
        )}
      </StyledImageWrapper>
      <StyledContentWrapper isCurrentUser={isCurrentUser}>
        <Typography>{content}</Typography>
        <Typography alignSelf="flex-end" variant="overline">
          {getShortTime(dispatchTime)}
        </Typography>
      </StyledContentWrapper>
    </Stack>
  );
};

export default Message;
