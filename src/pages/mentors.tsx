import { FC } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { mentors } from '@/constants/mentors';
import { IMentorCard, IUser } from '@/types';
import { MentorList } from '@/components/MentorList';

interface IPropMentorCard {
  propMentors: IMentorCard[];
}

export const getServerSideProps: GetServerSideProps<IPropMentorCard> = async ({ query }) => {
  // TODO: выпилить когда будет АПИ
  const filteredMentors: IMentorCard[] = [];
  if ('search' in query) {
    const searchParam = query.search as keyof IMentorCard | keyof IUser;
    filteredMentors.push(
      ...mentors.filter((item) => {
        const arr = Object.entries(item);
        const regexp = new RegExp(searchParam, 'gi');
        // eslint-disable-next-line no-restricted-syntax
        for (const [key] of arr) {
          if (regexp.test(String(item[key as keyof IMentorCard])) || regexp.test(String(item.user)))
            return true;
        }
        return false;
      })
    );
  } else {
    const queryArr: { [key: string]: string[] } = {};
    Object.entries(query).forEach(([key, value]) => {
      const parsedKey = key.replace(/\[\w\]/, '');
      if (!queryArr[parsedKey]) queryArr[parsedKey] = [];
      queryArr[parsedKey].push(value as string);
    });

    Object.entries(queryArr).map(([key, value]) =>
      value.forEach((item) => {
        filteredMentors.push(
          ...mentors.filter(
            (mentorItem) =>
              mentorItem[key as keyof IMentorCard] === item ||
              mentorItem.user[key as keyof IUser] === item
          )
        );
      })
    );
  }

  return {
    props: { propMentors: filteredMentors.length ? filteredMentors : mentors },
  };
};

const Mentors: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ propMentors }) => (
  <MentorList propMentors={propMentors} />
);

export default Mentors;
