import { FC, useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { stringify } from 'qs';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { StyledForm, StyledIconButton } from './styles';

const SearchPanel: FC = () => {
  const [value, setValue] = useState('');

  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    await push(`/mentors?${stringify({ search: value })}`, '', {
      scroll: false,
    });
  };

  return (
    <StyledForm as="form" onSubmit={(e) => handleSubmit(e)}>
      <Box width="calc(100% - 24px)">
        <TextField
          placeholder="Поиск..."
          color="secondary"
          fullWidth
          value={value}
          data-testid="input"
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <StyledIconButton type="submit" data-testid="submit-btn">
        <SearchIcon color="secondary" />
      </StyledIconButton>
    </StyledForm>
  );
};

export default SearchPanel;
