import { Flex, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Img from '../assets/Frame.png';
import { useContext } from 'react';
import Context from '../context';

export const EmptyPage = () => {
  const navigate = useNavigate();
  const { saveQueryParams } = useContext(Context);
  const handleClick = () => {
    saveQueryParams({});
    navigate('/');
  };

  return (
    <Flex justify={'center'} pt={120} h={'90%'}>
      <Flex direction={'column'} gap={32} align={'center'}>
        <Image src={Img} alt="image" width={240} height={230} />
        <Text color={'#343A40'} fw={700} size={24} lh={1.21}>
          Упс, здесь еще ничего нет!
        </Text>
        <Button variant={'light'} radius={8} p={'10px 24px'} h={42} onClick={handleClick}>
          Поиск Вакансий
        </Button>
      </Flex>
    </Flex>
  );
};
