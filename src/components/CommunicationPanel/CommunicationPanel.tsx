import { FC } from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';

import { StyledWrapper } from './styles';

interface ICommunicationPanelProps {
  callLink: string;
  messageLink: string;
}

const CommunicationPanel: FC<ICommunicationPanelProps> = ({ callLink, messageLink }) => {
  const { push } = useRouter();

  return (
    <StyledWrapper>
      <IconButton onClick={() => push(callLink)}>
        <LocalPhoneIcon color="success" />
      </IconButton>
      <IconButton onClick={() => push(messageLink)}>
        <MessageIcon color="success" />
      </IconButton>
    </StyledWrapper>
  );
};

export default CommunicationPanel;
